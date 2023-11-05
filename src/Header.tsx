import { useMyContext } from './context/DataContext';


function Header() {
  const { data, updateData } = useMyContext();
  const title = 'useContext(DataContext)';

  return (
    <header>
        <h2>{data}</h2>

        <p>Data: {data}</p>
      <button onClick={() => updateData(title)}>Update Data</button>
    </header>
  );
}

export default Header;
