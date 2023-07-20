const ElementList_Debugging = () => {
    const intArr = [2,3,4,5,6]
    // const elementArr = intArr.map(item => <li>{item}</li>)
    const elementArr = intArr.map((item,index) => <li key={index}>{item}</li>)
    console.log(elementArr)
    console.log(elementArr instanceof Array)
    console.log(elementArr)
    console.log(typeof(elementArr[0]))
    console.log(elementArr[0] instanceof Symbol)
    console.log(<p>Hi</p>) //how does react read html element as?
    console.log(<li>List Item</li>) //how does react read html element as?
    // return elementArr;
    // return <ul>{elementArr}</ul>;
    // return <ol >{elementArr}</ol>;
    return <ol type="i">{elementArr}</ol>;
}
export default ElementList_Debugging;

// Warning: Each child in a list should have a unique "key" prop.


{/* <li key={index}>{item}</li> ==> {$$typeof: Symbol(react.element), type: 'li', key: '0', ref: null, props: {…}, …} */}
{/* <li>{item}</li>             ==> {$$typeof: Symbol(react.element), type: 'li', key: null, ref: null, props: {…}, …} */}
{/* <p>{item}</p>             ==> {$$typeof: Symbol(react.element), type: 'p', key: null, ref: null, props: {…}, …} */}