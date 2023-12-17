const Student=(props)=>{
    return(
        <>
        <h4>Student: {props.name}</h4>
        <h4>Age: {props.age}</h4>
        <h4>Course: {props.course}</h4>
        <h4>IsStudent: {props.isStudent?"Yes":"No"}</h4>
        </>
    )
}
export default Student;