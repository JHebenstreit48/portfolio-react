import './App.css';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';

function App() {

  return (
    <>
    <Header />
    <Navigation />
    <Outlet />
    </>
  )
}

export default App
