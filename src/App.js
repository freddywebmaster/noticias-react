import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';

function App() {
  const [categoria, setCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);

  useEffect(()=>{
    const consultarApi = async () =>{
      const apiKey = 'ba6d3a1f08534dac8752a57c9ff0e005';
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=${apiKey}`;

      const respuesta = await fetch(url);
      const noticias = await respuesta.json();
      setNoticias(noticias.articles);
    }
    consultarApi();
  }, [categoria])

  return (
    <>
      <Header titulo="Fnews"/>
      <div className="container white">
        <Formulario
          setCategoria={setCategoria}
        />
        <ListaNoticias noticias={noticias} />
      </div>
    </>
  );
}

export default App;
