// import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './css/Page.css';

function App() {

  return (
    <>
    <Header />
    <Outlet />
     
    </>
  )
}

export default App
