import { useEffect, useState } from "react";
import Header from "../components/Header";
import CardProducto from "../components/cardProducto";

function Productos() {
    const [productos, setProductos] = useState([])
    useEffect(() => {
        // Ejecutar cuando se monte mi componente
        const obtenerProductos = async () => {
            try {
                const data = await fetch("https://fakestoreapi.com/products");
                const productos = await data.json();
                console.log("productos obtenidos" + productos);
                setProductos(productos);
            } catch (error) {
                console.log("Error al obtener los productos", error);
            }
        };
        // la mando a llamar
        obtenerProductos();
    }, []);

    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>Productos</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">



                    {productos.map(

                        (producto) => {
                            return (
                                    
                                <div className="col-4">
                                    <CardProducto key={producto.id} producto={producto} />
                                </div>

                            )
                        }
                    )}



                </div>
            </div>
        </>
    );
}
export default Productos;
