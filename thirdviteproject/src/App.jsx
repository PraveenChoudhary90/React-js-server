import "./App.css";
import Nav from './navbar.jsx'
import Head  from "./header.jsx";
import Hero from "./Hero.jsx";

function App() {
  let st = {
    backgroundColor: "blue",
    color: "yellow",
  };
  return (
    <>
    <Hero/>
    <Head/>
    <Nav />
      <h1 style={{ backgroundColor: "red", color: "white" }}>
        Welcome to the react class
      </h1>
      <h2 style={st}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, ullam
        quae quis, quod ipsa maiores repellat officiis aut earum doloribus,
        omnis ea! Fuga perferendis aspernatur accusamus. Tempore est eius sequi.
      </h2>
      <h1 className="head1">Create your ideas</h1>
      <br/>
    </>
  );
}

export default App;
