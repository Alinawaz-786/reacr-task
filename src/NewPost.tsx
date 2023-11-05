import { Dispatch, SetStateAction } from 'react'
import { useMyContext } from './context/DataContext';


// interface objectProps {
//     postTitle: string,
//     postBody: string,
//     setPostTitle: Dispatch<SetStateAction<string>>,
//     setPostBody: Dispatch<SetStateAction<string>>,
//     handleSubmit: (e: any) => void
// }

function NewPost() {
  const { handleSubmit,postTitle,postBody,setPostTitle,setPostBody } = useMyContext();

  return (
    <main>
      <h2>New Post</h2>
      <form action="" method="post" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title:</label>
        <input type="text" name="" id="postTitle" value={postTitle} onChange={(e) => setPostTitle(e.target.value)} />
        <label htmlFor="postBody"></label>
        <input type="text" name="postBody" id="" value={postBody} onChange={(e) => setPostBody(e.target.value)} />
        <button type='submit'>Save</button>
      </form>
    </main>
  );
}

export default NewPost;
