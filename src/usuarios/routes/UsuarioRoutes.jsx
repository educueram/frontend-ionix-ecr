import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui';
import { UsuariosPage } from '../pages';

export const UsuarioRoutes = () => {
  return (
    <>
        <Navbar />

        <div className="container">
            <Routes>
                <Route path="usuarios" element={<UsuariosPage />} />                              

                <Route path="/" element={<Navigate to="/usuarios" />} />

            </Routes>
        </div>


    </>
  )
}