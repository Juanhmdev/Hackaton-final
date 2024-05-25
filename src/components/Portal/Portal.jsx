import { useEffect } from 'react';
import "./Portal.css";
import { motion } from "framer-motion";

export const Portal = () => {
    useEffect(() => {

        if (window.location.hash === '#main-content') {
            history.replaceState({}, document.title, window.location.pathname);
        }
    }, []);

    return (
        <div className="portada-inicial">
            <motion.div className="container"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}>
                <div className="titulo">
                    <h1>Tu Tienda Online de Confianza <br /> <span>Encuentra Todo lo que Necesitas</span></h1>
                </div>
                <div className="texto">
                    <p>Explora nuestra amplia gama de productos y descubre increíbles ofertas todos los días.
                        Compra ahora y disfruta de envíos rápidos y seguros. ¡No esperes más, empieza tu
                        experiencia de compra hoy mismo!</p>
                </div>
                <a href="#main-content">
                    <button className="btn10">Ver productos</button>
                </a>
            </motion.div>
            <motion.img className="port" src="/src/assets/Portadahome-removebg-preview.png" alt="Portada"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 2 }}></motion.img>
        </div>
    )
}