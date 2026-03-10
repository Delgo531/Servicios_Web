function CardProducto({ producto }) {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">id: {producto.id}</h5>
                    <p className="card-text">fecha: {producto.date}</p>
                    <p className="card-text">cantidad: {producto.products.length}</p>

                </div>
            </div>
        </>
    );
}
export default CardProducto;
