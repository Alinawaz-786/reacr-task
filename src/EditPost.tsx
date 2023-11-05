import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useMyContext } from './context/DataContext';

const EditPost = () => {
    const { id } = useParams();
    const [status, setStatus] = useState(false);
    const { post, editTitle, editBody, setEditTitle, setEditBody, handleEdit } = useMyContext();

    const getQuejaById = async () => {
        const postItem = post.find(post => (post.id).toString() === id);
        if (post) {
            console.log("00000000000000000000000000000000000000000000000000");
            console.log(post);

            setStatus(true)
            // seteditBody(postItem?.body);
            // seteditTitle(postItem.title);
        } else {
            setStatus(false)
        }

    }
    useEffect(() => {
        if (post.length > 0) {
            getQuejaById();
        }
    }, [post])
    return (
        <main>
            {status &&
                <>
                    <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
                        <label htmlFor="postTitle">Title:</label>
                        <input type="text" value={editTitle}
                            onChange={(e) => {
                                console.log(e.target.value)
                                setEditTitle(e.target.value)
                            }
                            }
                        />
                        <label htmlFor="postBody"></label>
                        <input type="text" name="postBody" value={"editBody"} onChange={(e) => setEditBody(e.target.value)} />
                        <button type='submit' onClick={() => handleEdit(id)}>Save</button>
                    </form>
                </>
            }
            {!status &&
                <>
                    <h2>Post Not Found</h2>
                    <Link to='/'> <p>Visit Our Home Page</p> </Link>
                </>

            }


        </main>
    )
}

export default EditPost
