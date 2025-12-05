import { clear } from "console"

const FunctionandEvents = () => {
    function handleClick (){
        alert ("Button was Clicked! ")
    }

    const handleInput = (event) => {
        console.clear()
        console.log ("Value : ", event.target.value )
    }

    const name="Aqsa Aslam"
    const Descr= "Lorem ipsum dolor sit amet."
  return (
    <div>
      <p>Name: {name}</p>
      <p>Description: {Descr}</p>
      <button className="bg-amber-300 w-20 h-10" onClick={handleClick}>Click me</button>
      <button className="bg-amber-700 gap-1 w-20 h-10" onClick={() => { alert ( "Apply in-line function" ) }}>Click here</button>
      <br />
      <input className="border border-black w-20 h-15" type="text" onChange={handleInput} placeholder="type something" />
    </div>
  )
}

export default FunctionandEvents
