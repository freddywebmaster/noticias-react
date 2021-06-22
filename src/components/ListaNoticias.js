import React from 'react';
import Noticias from './Noticias';
import PropTypes from 'prop-types';
const ListaNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {
                noticias.map(noticia=>(
                    <Noticias key={noticia.url} noticia={noticia}/>
                ))
            }
        </div>
     );
}
ListaNoticias.propTypes = {
    setCategoria: PropTypes.array.isRequired
}
export default ListaNoticias;