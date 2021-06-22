import React from 'react';
import styles from './Formulario.module.css';
import useSelect from './hooks/useSelect';
import PropTypes from 'prop-types';
const Formulario = ({setCategoria}) => {

    const OPCIONES =[
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ]

    //utilizar custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    const buscarNoticia =(e)=>{
        e.preventDefault();

        setCategoria(categoria)
    }
    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form action="" onSubmit={buscarNoticia}>
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>
                    <SelectNoticias/>
                    <input
                        type="submit"
                        className={`btn-large amber darken-2 ${styles.btn_block}`}
                        value="Buscar"
                     />
                </form>
            </div>
        </div>
     );
}
Formulario.propTypes = {
    setCategoria: PropTypes.func.isRequired
}
export default Formulario;