import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Header from './Components/header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/bannerSection';
import Helper from './Components/helperSection';
import Crousal from './Components/crousalSection';
import Profile from './Components/profile';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Header/>
    <Routes>
    <Route exact path='/' element={<><Banner/><Helper/><Crousal/></>}/>
    <Route exact path='/profile' element={<Profile/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
