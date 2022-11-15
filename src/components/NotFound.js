import React from 'react';
import imageError from '../assets/error404.png'
import '../assets/styles.css'

function NotFound() {
  return (
    <div className='page-404'>
      <main className="main-404-page">

        <div className="div-img-404-page">
            <img src={imageError} alt="Imagen de 404 error" className="img-404-page" />
        </div>

        <div className="div-info-404-page">
            <p className="oops-404-page">Oops!</p>
            <h2 className="title-404-page">No hemos encontrado el componente que estabas buscando</h2>
            <p className="info-error-404-page">Código del error: 404</p>
        </div>

      </main>

      <footer className="footer-404-page">
        <img src="/img/logo.svg" alt="Logo Techlogic.store" className="img-footer-404-page" />
        <p className="p-footer-404-page">© 2022 Techlogic.store. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}

export default NotFound