import { Dispatch, SetStateAction } from 'react'
import { Link } from 'react-router-dom';
import { useMyContext } from './context/DataContext';



function Nav() {
  const {  search, setSearch  } = useMyContext();
  return (
    <nav>
      <form action="" method="post" onSubmit={(e) => e.preventDefault()}>
        <label htmlFor="search">Search Post</label>
        <input type="text" name="" id="search" placeholder="Search Post" value={search} onChange={(e) => setSearch(e.target.value)} />
      </form>
      <ul>
        <li><Link to=""></Link></li>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Missing">Missing</Link></li>
        <li><Link to="/NewPost">New Post</Link></li>
        <li><Link to="*"></Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
