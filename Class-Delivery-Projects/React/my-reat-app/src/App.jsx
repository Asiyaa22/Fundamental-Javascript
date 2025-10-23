

let name = "John";

function newFunc(){
  return "wow its amazing!";
}


function App() {
  return (
    <div>
      <h2>Hello {name} We are leanring react </h2>
      <h3>Its fun learning react {2 + 4}</h3>
      <h1><strong>Fun fact </strong>{newFunc()}</h1>
    </div>
  )
}

export default App
