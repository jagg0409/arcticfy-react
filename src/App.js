import {Route, Link, Routes} from 'react-router-dom'
import './App.css';
import Albums from './components/albums-section/albums';
import Footer from './components/footer/footer';
import Lateral from './components/lateral/lateral';
import Up from './components/up/up'
import Sesion from './components/sesion/sesion';
import RenderAlbum from './components/albums-inside/render';
import { useEffect } from 'react';
import Search from './components/search/search';
import Posters from './components/posters/posters';

function App() {

  return (
    <div>
      <Up/>
      <Lateral/>
      <main> 
        
  <Sesion/>

<Routes>

      <Route exact path='/' element={
      <section>
      <Albums name='thecar' des='el album el carro' name2='am' des2='arctic monkeys' name3='tranquility base' des3='hotel and casino'>Arctic Albums</Albums>
      <Albums  name='body paint' des='infidelity song' name2='no busses' des2='single' name3='four out of five' des3='from the TBH&C album'>calm and chill</Albums>
      <Albums name='pretty visitors' des='come and wave ur arms' name2='from the ritz' des2='from the ritz to the rubble' name3='r u mine' des3='get in this car and rock'>rock n roll</Albums>
      </section>  
      }/>
      </Routes>

      <RenderAlbum/> 
      <Search/>
      <Posters/>
      <Albums name='thecar' des='el album el carro' name2='am' des2='arctic monkeys' name3='tranquility base' des3='hotel and casino'>recent albums</Albums>
      <Footer/>
      </main>
    </div>
  );
}

export default App;
