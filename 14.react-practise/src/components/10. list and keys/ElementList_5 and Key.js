const ElementList_5 = (props) => {
    const arrayOfJSXElement = props.arr.map((item,index) => <ItemJSXElement key={index} data={item}/>)
    console.log(arrayOfJSXElement); // debugging React_JSX_HTML_element.
    return(
        <>
            <h1>Vegetable Store:</h1>
            {arrayOfJSXElement}
        </>
    );
}

const ItemJSXElement = (props) => {
    return(
        <div>
            <h3>Item_Id: {props.data.id}</h3>
            <p>Name: {props.data.title}</p>
            <i>Price: {props.data.price}</i>
            <hr/>
        </div>
    )
}

export default ElementList_5;



// mapping list return aaray of symbols
// react is capable of rendering array item as string

