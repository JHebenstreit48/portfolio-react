import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
// import '@/css/Page.css';

function App() {
  return (
    <div className="contentWrapper">
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
