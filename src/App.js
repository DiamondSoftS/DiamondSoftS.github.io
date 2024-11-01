import React from 'react'
import {Routes, Route} from 'react-router-dom'
import DispatchStore from './DispatchStore';
import Inicio from './inicio';
import NavigationBar from './NavigationBar';
import Contacto from './contact';

const App = () => {
    return (
        <>
            <NavigationBar/>
                <Routes>
                    <Route path='/' element={<DispatchStore />}/>
                    <Route path='Inicio' element={<Inicio />} />
                    <Route path='Contacto' element={<Contacto />} />
                </Routes>           
        </>
    );
}

export default App;
