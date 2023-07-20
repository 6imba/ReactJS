const ElementList_2 = (props) => {
    const elementArr = props.arr.map(item => <li>{item}</li>)
    return <ul>{elementArr}</ul>;
}
export default ElementList_2;

// Warning: Each child in a list should have a unique "key" prop.
