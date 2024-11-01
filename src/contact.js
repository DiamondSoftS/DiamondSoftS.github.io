import React from 'react';

const Contacto = () => {
  return (
    <div className="container mt-5">
      <h2>Contactanos</h2>
      <br />
      <form>
        <div className="form-group">
          <label htmlFor="name">Nombre</label>
          <input type="text" className="form-control" id="name" placeholder="Como te llamas" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="ejemplo@email.com" />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Telefono</label>
          <input type="text" className="form-control" id="telefono" placeholder="55-5555-5555" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Que tipo de software necesitas</label>
          <textarea className="form-control" id="message" rows="3" placeholder="Your message"></textarea>
        </div>
        <button type="submit" className="btn btn-outline-success">Submit</button>
      </form>
    </div>
  );
};

export default Contacto;