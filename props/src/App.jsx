import Student from "./student"
const Showconsole=(props)=>{
  console.log(props)
}
const App=()=>{
  return(
    <>
  <Student name="Pranjal" age={20}  isStudent={true} course="CSBS"/>

    </>
  )
}
export default App;