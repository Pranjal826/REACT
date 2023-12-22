const Student=(props)=>{
    return(
        <>
        {console.log(props)}
        <button onClick={props.clickHandler} className="text-rose-800">{props.button}</button>
        </>
    )
}
export default Student;