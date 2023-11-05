import Feed from './Feed'
import { useMyContext } from './context/DataContext';
const Home = () => {
  const { filterPost } = useMyContext();
  return (
    <main>
      {filterPost.length ? (
        <Feed />
      ) : (
        <p style={{marginTop: "2rem"}}>
          No Post Record Exist
        </p> 
      )}
    </main>
  )
}

export default Home
