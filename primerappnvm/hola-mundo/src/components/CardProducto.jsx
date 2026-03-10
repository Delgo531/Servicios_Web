function CardProducto({ producto }) {
    return (
        <>

            <div className="card" >
                <img src={producto.image} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{producto.title}</h5>
                        <p className="card-text">{producto.description}</p>
                        <p className="card-text">${producto.price}</p>
                    </div>
            </div>

        </>
    );
}
export default CardProducto;