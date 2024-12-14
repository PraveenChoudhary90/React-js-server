import img from "./assets/nature1.jpeg";
import img1 from "./assets/nature.jpeg";
import img2 from "./assets/nature3.jpeg";
const Cards = () => {
  return (
    <>
    <div className="container">
      <h1 className="text-center" >Our Feature Tour</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis,
        iure ipsam consectetur, blanditiis officia inventore assumenda,
        accusantium saepe nemo velit quod consequatur nostrum! Est molestias
        praesentium quasi ab odit excepturi? Laudantium excepturi beatae commodi
        rerum similique, sapiente inventore in voluptatibus ea odit dignissimos
        facilis at eveniet earum impedit corrupti, iusto fuga. Fuga soluta,
        nesciunt placeat sed aspernatur suscipit molestias quia?
      </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <div className="card  p-1" style={{ width: "18rem" }}>
              <img src={img} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ marginLeft: "90px" }}>
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  className="price"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  $123
                  <a href="#" className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card p-1" style={{ width: "18rem" }}>
              <img src={img1} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ marginLeft: "90px" }}>
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  className="price"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  $199
                  <a href="#" className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-4">
            <div className="card p-1" style={{ width: "18rem" }}>
              <img src={img2} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title" style={{ marginLeft: "90px" }}>
                  Card title
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div
                  className="price"
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  $189
                  <a href="#" className="btn btn-primary">
                    Book Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cards;
