import './App.css'
import { useSelector, useDispatch } from 'react-redux';
import { agregarAlCarrito, removeCart } from './actions';
import { GiShoppingCart } from "react-icons/gi";

function DispatchStore() {

  const productos = useSelector((state) => state.tienda.productos) || [];
  const carrito = useSelector ((state) => state.tienda.carrito);
  const searchTerm = useSelector ((state) => state.searchTerm) || ''; 

  const filteredProducts=productos.filter((product) => 
    product.nombre.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  const dispatch = useDispatch();
  
  const addNow = (id) => {
    dispatch(agregarAlCarrito(id));
  };

  const removeItem = (index) => {
    dispatch(removeCart(index));
  };

  const total = carrito.reduce(
        (totalAmount, actual) => totalAmount + actual.precio,
        0
  );
  
  return (
  <>
  <br />
  <center>  
    
   <div className="row">   
    {filteredProducts.map(product =>( 
     <div className="col-md-4 col-lg-4 col-12" key={product.id}> 
        <div className='card' style={{width:"18rem"}}>
          <img className="card-img-top"src="https://wallpaperaccess.com/full/533451.jpg" alt=""/>
            <div className="card-body">
              <h5 className='bi bi-tag'>
                {product.nombre} ${product.precio}
              </h5>
                <p className="card-text">
                  {product.descripcion}
                </p>
                  <button className='btn btn-outline-danger' onClick={() => addNow(product.id)}>Agregar al carrito</button>
            </div>        
        </div>
        </div>
        ))}
        </div>

                    
</center>
     <div>
     <span><p className='SpecialClass'>
     <h6><center>Carrito <GiShoppingCart />  </center></h6> 
     <hr /> 
    <ul>
      {carrito.map((item, index) => (

        <li key={item.id}>
          {item.nombre} - ${item.precio}
          <br />
          <button className='btn btn-danger' onClick={() => removeItem(index)}>Eliminar</button>
          <hr />
        </li>
      ))}
    </ul>   
       total: ${total}
      </p>
      </span>
     </div>

    {/*
     <div className="row"> 
      {productos.map(product =>( 
     <div className="col-md-4 col-lg-4 col-12" key={product.id}> 
        <div className='card' style={{width:"18rem"}}>
          <img className="card-img-top"src="https://wallpaperaccess.com/full/533451.jpg" alt=""/>
            <div className="card-body">
              <h5 className='bi bi-tag'>
                {product.nombre} ${product.precio}
              </h5>
                <p className="card-text">
                  {product.descripcion}
                </p>
                  <button className='btn btn-outline-danger' onClick={() => addNow(product.id)}>Agregar al carrito</button>
            </div>        
        </div>
        </div>
        ))}
     </div>
     */}
    </>
  );
}

export default DispatchStore;
