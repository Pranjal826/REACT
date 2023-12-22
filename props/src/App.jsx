import Student from "./student"

const name="Pranjal"
const App=(message)=>{
  const clickHandler=()=>{
    alert(`Button Clicked" ${name}`)
    console.log(name)
  }
  return(
    <>
    <Student button="Click Me" clickHandler={clickHandler}/>
    </>

  )
}
export default App; 