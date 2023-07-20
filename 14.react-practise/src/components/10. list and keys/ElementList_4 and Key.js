const ElementList_4 = (props) => {
    const elementArr = props.arr.map((item,index) => <ListElement key={index} value={item}/>)
    return <ul>{elementArr}</ul>;
}

const ListElement = (props) => {
    return <li>{props.value}</li>
}

export default ElementList_4;



// mapping list return laaray of symbols