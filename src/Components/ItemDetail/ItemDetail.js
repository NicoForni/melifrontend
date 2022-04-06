import "./ItemDetail.css";

const ItemDetail = () => {
    


    return(
        <>
            <div className="container-title">Electronica - otra cosa</div>
            <div className="container-detail">
                <img className="image-detail" src="https://i0.wp.com/hipertextual.com/wp-content/uploads/2017/06/playa-sol.jpg?fit=960%2C638&ssl=1" alt="product"></img>
                <div className="container-name">
                    <h4>Nuevo-234 vendidos</h4><br/>
                    <h3>Sombrero de Oxford rojo</h3><br/>
                    <h2>$1999</h2>
                    <button className="comprar">Comprar</button>                    
                </div>                                    
                <div className="container-text-description">
                    <h2>Descripcion</h2>
                    <h3>Texto</h3>
                </div>
            </div>                
        </>
    )
}

export default ItemDetail;