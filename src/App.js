import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Navigation from './components/Navigation';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import Tasks from './page/Tasks';
import Messages from './page/Messages';
import Layout from './page/Layout';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Navigation/>}>
                <Route path='home' element={<Home/>}/>
                <Route path='tasks' element={<Tasks/>}/>
                <Route path='messages' element={<Messages/>}/>
                <Route path='layout' element={<Layout/>}/>
            </Route>
        </Routes>
      </BrowserRouter>
      

    </div>
  );
}

export default App;
