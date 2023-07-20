export default function FunctionComponentProps(props){
    console.log(props)
    return(
        <div>
            Name: {props.name} 
            Id: {props.id}
            District: {props.district}
        </div>
    )
}