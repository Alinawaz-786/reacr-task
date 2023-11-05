import Post from './Post'
import { useMyContext } from './context/DataContext';

const Feed = () => {
  const { filterPost } = useMyContext();
  return (
    <div>
      {filterPost.map(post =>(
        <Post key={post.id}  post={post}/>
      ))}
    </div>
  )
}

export default Feed
