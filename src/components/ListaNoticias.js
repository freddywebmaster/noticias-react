import React from 'react';
import Noticias from './Noticias';
import PropTypes from 'prop-types';
const ListaNoticias = ({noticias}) => {
    return ( 
        <div className="row">
            {
                (noticias===undefined) ? null:
                noticias.map(noticia=>(
                    <Noticias key={noticia.url} noticia={noticia}/>
                ))
            }
        </div>
     );
}
ListaNoticias.propTypes = {
    noticias: PropTypes.array.isRequired
}
export default ListaNoticias;