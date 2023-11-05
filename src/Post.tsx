import React from 'react'
import { Link } from 'react-router-dom'

interface objectProps {
    post: {
        id?: number,
        title?: string,
        datetime?: string,
        body: string
    }
}
const Post = ({ post }: objectProps) => {
    return (
        <article className='post'>
            <Link to={`/post/${post.id}`}>
                <h2>{post.title}</h2>
                <p>{post.datetime}</p>
            </Link>
            <p>{
                (post.body).length <= 25 ? post.body : `${(post.body)?.slice(0, 25)}...`
            }
            </p>
        </article>
    )
}

export default Post
