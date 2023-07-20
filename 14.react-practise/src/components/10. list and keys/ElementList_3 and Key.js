const ElementList_3 = (props) => {
    const elementArr = props.arr.map((item,index) => <li key={index}>{item}</li>)
    return <ol type="1">{elementArr}</ol>;
}
export default ElementList_3;



// Warning: Each child in a list should have a unique "key" prop.
// A “key” is a special string attribute you need to include when creating lists of elements.

// <li key={index}>{item}</li>
// <li key={index.toString()}>{item}</li>
// <li key={item.id}>{item}</li>