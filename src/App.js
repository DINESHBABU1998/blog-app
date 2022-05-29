import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './components/styles.css'
import Bollywood from './components/Bollywood';
import Home from './components/Home';
import Technology from './components/Technology';
import Apib from './api/Apib'
import Apih from './api/Apih';
import Hollywood from './components/Hollywood';
import Fitness from './components/Fitness';
import Food from './components/Food';
import Apit from './api/Apit';
import Apif from './api/Apif';
import Apid from './api/Apid';
import {Link} from 'react-router-dom'

function App() {
  return (
    <Apib>
      <Apih>
        <Apit>
          <Apif>
            <Apid>
      <div className="App">
        <BrowserRouter>
        <div className='home'>
        <div className="logo">
         <div className="the">THE</div>
         <div className="siren">SIREN</div>
        </div> 
      <div  id='navBar'>
          <div><Link to="/">Home</Link></div>
          <div><Link to={'/bollywood'}>Bollywood</Link></div>
          <div><Link to={'/hollywood'}> Hollywood</Link></div>
          <div><Link to={'/technology'}>Technology</Link></div>
          <div><Link to={'/fitness'}>Fitness</Link></div>
          <div><Link to={'/food'}>Food</Link></div>
      </div>
      </div>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/bollywood' element={<Bollywood />} />
            <Route path='/technology' element={<Technology />} />
            <Route path='/Hollywood' element={<Hollywood/>} />
            <Route path='/Fitness' element={<Fitness/>}/>
            <Route path='/Food' element={<Food/>}/>
          </Routes>
        </BrowserRouter>
      </div>
            </Apid>
          </Apif>
        </Apit>
      </Apih>
    </Apib>
  );
}

export default App;
