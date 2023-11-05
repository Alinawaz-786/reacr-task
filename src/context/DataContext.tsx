// MyContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Dispatch, SetStateAction } from 'react'
import { format } from 'date-fns';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import api from '../api/post';



type MyContextType = {
  data: string;
  updateData: (newData: string) => void;
  postTitle: string;
  postBody: string;
  setPostTitle: Dispatch<SetStateAction<string>>;
  setPostBody: Dispatch<SetStateAction<string>>;
  handleSubmit: (e: any) => void;
  post: Array<{
    id: number,
    title: string,
    datetime: string,
    body: string
  }>,
  filterPost: Array<{
    id: number,
    title: string,
    datetime: string,
    body: string
  }>,
  handleDelete: (e: any) => void;
  editTitle: string;
  editBody: string;
  setEditTitle: Dispatch<SetStateAction<string>>;
  setEditBody: Dispatch<SetStateAction<string>>;
  handleEdit: (id: any) => void;
  search: string;
  setSearch: Dispatch<SetStateAction<string>>;

};

interface objectProps {
  id: number,
  title: string,
  datetime: string,
  body: string
}

const MyContext = createContext<MyContextType | undefined>(undefined);

export const MyProvider = ({ children }: any) => {
  const [data, setData] = useState<string>('Default Data');
  const [post, setPost] = useState<Array<objectProps>>([]);
  const [search, setSearch] = useState<string>('');
  const [filterPost, setFilterPost] = useState<Array<objectProps>>(post);
  const [postTitle, setPostTitle] = useState('');
  const [postBody, setPostBody] = useState('');
  const [editBody, setEditBody] = useState('');
  const [editTitle, setEditTitle] = useState('');

  const navigationHistory = useNavigate()
  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get('/posts')
        if (response && response.data) {
          console.log(response.data);
          setPost(response.data)
          setFilterPost(response.data)

        }
      } catch (err) {}
    }
    fetchPost();
  }, [])

  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const id = post.length ? post[post.length - 1].id + 1 : 1;
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost: any = { id, title: postTitle, datetime: dateTime, body: postBody };
    try {
      const response = await api.post('/posts', newPost)
      setPost([...post, response.data]);
      setPostTitle('');
      setPostBody('');
      navigationHistory('/home');
    } catch (error) {
      console.log(error)
    }
  };
  const handleDelete = async (id: number) => {
    try {
      await api.delete(`/posts/${id}`);
      const PostList = post.filter(post => post.id !== id)
      setPost(PostList)
      navigationHistory('/home')
    } catch (error) {}
  };
  const handleEdit = async (id: number) => {
    const dateTime = format(new Date(), 'MMMM dd, yyyy pp');
    const UpdatePost: any = { id, title: editTitle, datetime: dateTime, body: editBody };
    console.log("id,UpdatePost");
    console.log(id, UpdatePost);
    try {
      const response = await api.put(`/posts/${id}`, UpdatePost)
      setPost(post.map(item => item.id === id ? { ...response.data } : post))
      setEditBody('')
      setEditTitle('')
      navigationHistory('/home');
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await api.get('/posts')
        if (response && response.data) {
          console.log(response.data); 
          setPost(response.data)
          setFilterPost(response.data)

        }
      } catch (err) {
  
      }
    }
    fetchPost();
  }, [])

  useEffect(() => {
    if (search === "") {
      setFilterPost(post)
    }
    const filterResult = post.filter(pos =>
      ((pos.body).toLowerCase()).includes(search.toLowerCase()) ||
      ((pos.title).toLowerCase()).includes(search.toLowerCase()))
    setFilterPost(filterResult);
  }, [post, search])

  const updateData = (newData: string) => {
    setData(newData);
  };

  return (<MyContext.Provider value={{ data, updateData, handleSubmit, postTitle, postBody, setPostTitle, setPostBody, 
    post, handleDelete,editTitle,editBody,setEditTitle,setEditBody,handleEdit,search,setSearch,filterPost
  
  }}>{children}</MyContext.Provider>);
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context;
};
