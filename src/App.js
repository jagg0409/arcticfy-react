import './App.css';
import Albums from './components/albums-section/albums';
import Footer from './components/footer/footer';
import Lateral from './components/lateral/lateral';
import Up from './components/up/up'
import Sesion from './components/sesion/sesion';
import RenderAlbum from './components/albums-inside/render';
import Search from './components/search/search';
import Posters from './components/posters/posters';
import Playlist from './components/playlist/playlist';
import ScrollToTop from './autoscroll';
import Text from './components/text/legal';
import LoadingScreen from './components/loading/loading';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();
  // Simulate a delay (you can replace this with your actual loading logic)
  useEffect(() => {
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => clearTimeout(loadingTimeout);
  }, [location.pathname]);
  return (
    <div>
      <ScrollToTop />
      
      <Up id='up'/>
      <Lateral />
      <main>
        <Sesion />
        <Text/>
          

        <Playlist />
        <RenderAlbum/>
        <Search />
        <Posters />
            <section>
              <Albums name='thecar' des='el album el carro' name2='am' des2='arctic monkeys' name3='tranquility base' des3='hotel and casino'>Arctic Albums</Albums>
              <Albums name='body paint' des='infidelity song' name2='no busses' des2='single' name3='four out of five' des3='from the TBH&C album'>calm and chill</Albums>
              <Albums name='pretty visitors' des='come and wave ur arms' name2='from the ritz' des2='from the ritz to the rubble' name3='r u mine' des3='get in this car and rock'>rock n roll</Albums>
            </section>
        <Footer />

      </main>
      {isLoading && <LoadingScreen />}
    </div>
  );
}

export default App;
