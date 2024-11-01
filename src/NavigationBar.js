import {Link} from 'react-router-dom';
import {useDispatch} from 'react-redux'


const NavigationBar = () => {
  
  const dispatch = useDispatch();

    const handleInputChange = (event) => {
      dispatch({type:'SET_SEARCH_TERM',
         payload: event.target.value});
    };

  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-dark navbar-expand-md bg-dark'>
        <Link to='/' className='navbar-brand' href='*'>Advance Solutions </Link>
            <button className ='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='toggle-navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
        <div className='collapse navbar-collapse' id="navbarNav">
            <ul className='navbar-nav'>
              <li className='nav-item active'>
                <Link to='Inicio' className='nav-link'>Inicio<span className='sr-only'>(current)</span></Link>  
              </li> 
              <li>
                <Link to='/' className='nav-link'>
                    Tienda
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='Contacto' className='nav-link'> 
                    Contacto
                </Link>
              </li>
            </ul>
            <form className='form-inline w-100'>
                <input type='search'
                 className='form-control mr-sm-2 ml-auto' 
                 arial-label='search' 
                 placeholder='Busca tu producto' 
                 onChange={handleInputChange}/>
                <button className='btn btn-outline-success my-2 my-sm-0' type='submit'>Buscar</button>
            </form>
        </div>
    </nav>   
    
    </>
    );
}

export default NavigationBar;