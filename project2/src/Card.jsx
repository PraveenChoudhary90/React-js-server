import image from "./assets/pic1.jpg"
import image1 from "./assets/pic2.jpg"
import image2 from "./assets/pic3.jpg"
import image3 from "./assets/pic4.jpg"
import image4 from "./assets/pic5.jpg"
import image5 from "./assets/pic6.webp"
import image6 from "./assets/pic7.jpg"
import image7 from "./assets/pic8.jpg"
const Card =()=>{
    return(
        <>
        <div classNameName="container" style={{marginLeft:"100px"}}>
            <div classNameName="row" style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px"}}>
                <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image1} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image2} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image4} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image5} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image6} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image3} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
                    <div classNameName="col-4">
                    <div className="card" style={{width: "18rem"}}>
            <img src={image} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
         </div>
         </div>
                </div>
            </div>
        </div>
        </>
    )
}
export default Card;