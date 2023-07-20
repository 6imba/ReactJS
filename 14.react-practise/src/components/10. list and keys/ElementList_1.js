const ElementList_1 = () => {
    const intArr = [2,3,4,5,6]
    const elementArr = intArr.map(item => <li>{item}</li>)
    return elementArr;
}
export default ElementList_1;

// Warning: Each child in a list should have a unique "key" prop.
