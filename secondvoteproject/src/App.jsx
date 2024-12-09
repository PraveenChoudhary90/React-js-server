import Child1 from "./Props"

 let a = prompt("Enter your name:")

function App() {

 
  return (
    <>

    <Child1 Name={a} />
    </>
  )
}

export default App
