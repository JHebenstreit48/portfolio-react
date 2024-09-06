import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './css/Page.css';

function App() {

  return (
    <>
    {/* <div className="p-3 mb-2 bg-secondary text-white">.bg-secondary</div> */}
    <Header />
    <Outlet />
    </>
  )
}

export default App
