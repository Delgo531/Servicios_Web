import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


function DetalleProducto() {
    const { id } = useParams();

    const [productos, setProductos] = useState([])
    useEffect(() => {
        // Ejecutar cuando se monte mi componente
        const obtenerProductos = async () => {
            try {
                const data = await fetch(`https://fakestoreapi.com/products/${id}`);
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
            <div>


                <div className="row justify-content-center">

                    <div className="col-md-4">

                        <h2>Detalle del Producto</h2>
                        <p>ID del producto: {id}</p>

                        <div className="card mb-3">
                            <img src={productos.image} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{productos.title}</h5>
                                <p className="card-text">{productos.description}</p>
                                <p className="card-text"><small className="text-body-secondary">${productos.price}</small></p>
                                <p className="card-text"><small className="text-body-secondary">Categoria: {productos.category}</small></p>
                            </div>
                        </div>
                    </div>

                </div>


            </div>
        </>
    );
}
export default DetalleProducto;