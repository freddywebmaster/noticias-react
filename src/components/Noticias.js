import React from 'react';
import PropTypes from 'prop-types';
import './Noticias.css';
const Noticias = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia;
    const imagen = (urlToImage) ?
        <div className="card-image">
            <img src={urlToImage} alt="" />
            <span className="n-source">{source.name}</span>
        </div>
    :null
    return ( 
        <div className="col s12 m6 l4">
           <div className="card">
               {imagen}
               <div className="card-content">
                   <h6 className="n-title">{title}</h6>
                   <p className="n-noticia">{description}</p>
               </div>
               <div className="card-action">
                   <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={url}
                    className="waves-effect waves-ligth btn"
                    >
                        Ver noticia
                    </a>

               </div>
           </div>
        </div>
     );
}
Noticias.propTypes = {
    setCategoria: PropTypes.object.isRequired
}
export default Noticias;