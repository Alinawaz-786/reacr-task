import { useParams, Link } from 'react-router-dom'
import { useMyContext } from './context/DataContext';

function PostPage() {
  const { id } = useParams();
  const { post, handleDelete  } = useMyContext();

  const postItem = post.find(post => (post.id).toString() === id)
  return (
    <main>
      <h2>Post Page</h2>
      {post && 
        <>
        <h2>{postItem?.title}</h2>
        <p>{postItem?.datetime}</p>
        <p>{postItem?.body}</p>
        <button onClick={() => handleDelete(postItem?.id)}>
          Delete
        </button> 

        <Link to={`/edit-post/${postItem?.id}`}>Edit</Link>
        </>
      }
      {!post &&
      <>
        <h2>Post Not Found</h2>
        <Link to='/'> <p>Visit Our Home Page</p> </Link>
      </>

      }
    </main>
  );
}

export default PostPage;
