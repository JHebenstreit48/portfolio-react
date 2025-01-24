import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import './css/Page.css';

function App() {

  return (
    <div className='appContainer'>

      <Header />

      <div className="contentWrapper">

      <Outlet />

      </div>
      

    </div>
  )
}

export default App
