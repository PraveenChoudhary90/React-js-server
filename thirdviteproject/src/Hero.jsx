import myimage from "./assets/pic14.jpg";

const Hero = () => {
  return (
    <>
      <section>
        <h1>From public folder</h1>
        <img style={{ padding: "20px" }} src="pic7.jpg" alt="" />
        <img style={{ padding: "20px" }} src="pic7.jpg" alt="" />
        <img style={{ padding: "20px" }} src="pic7.jpg" alt="" />
      </section>

      <h1>from src folder</h1>

      <img style={{ padding: "20px" }} src={myimage} alt="" height="500px" />
      <img style={{ padding: "20px" }} src={myimage} alt="" height="500px" />
      <img style={{ padding: "20px" }} src={myimage} alt="" height="500px" />
    </>
  );
};

export default Hero;
