import { useState } from "react";

function FormProducto() {

    const [productoZ, setProductoZ] = useState({
        nombre: "",
        precio: 0,
        descrpcion: "",
        estatus: false
    })

    const [errores, setErrores] = useState({});

    const validarFormulario = () => {
        console.log("Validando form");
        const errors = {}

        if (!productoZ.nombre.trim()) {
            errors.nombre = "El nombre es requerido"
        }
        if (!productoZ.precio > 0) {
            errors.precio = "El precio debe ser mayor a 0"
        }

        return errors;
    }

    const enviarPeticion = (e) => {
        e.preventDefault();

        const erroresTemp = validarFormulario();
        console.log("Errores encontrados", erroresTemp)
        setErrores(erroresTemp)
        console.log("Enviar producto");
    }


    return (
        <>
            <div className="container">
                <div className="row justify-content-md-center">
                    <div className="col-6">
                        <h1>Formulario de Producto</h1>

                        <form onSubmit={enviarPeticion}>
                            <div className="mb-2">
                                <label htmlFor="nombre">Nombre:</label>
                                <input type="text" name="nombre" id="nombre" className={`form-control ${errores.nombre ? 'is-invalid' : 'is-valid'}`} value={productoZ.nombre} onChange={(e) => setProductoZ({ ...productoZ, nombre: e.target.value })} />

                                <div class="valid-feedback">
                                    Looks good!
                                </div>

                                <div class="invalid-feedback">
                                    {errores.nombre}
                                </div>

                            </div>

                            <div className="mb-2">
                                <label htmlFor="precio">Precio:</label>
                                <input type="number" name="precio" id="precio" className="form-control" value={productoZ.precio} onChange={(e) => setProductoZ({ ...productoZ, precio: e.target.value })} />
                            </div>

                            <div className="mb-2">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Descripción:</label>
                                <textarea
                                    value={productoZ.descrpcion}
                                    onChange={
                                        (e) => setProductoZ({ ...productoZ, descrpcion: e.target.value })
                                    }
                                    className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>

                            <div className="form-check">
                                <input checked={productoZ.estatus} onChange={(e) => setProductoZ({ ...productoZ, estatus: e.target.checked })} className="form-check-input" type="checkbox" value="" id="checkDefault" />
                                <label className="form-check-label" htmlFor="checkDefault">
                                    Estatus
                                </label>
                            </div>
                            <button type="submit" className="btn btn-primary">Enviar</button>
                        </form>
                        {JSON.stringify(productoZ)}

                    </div>
                </div>
            </div>
        </>
    );
}
export default FormProducto;
