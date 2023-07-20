export default function ListComponent(props){
    const elementList = props.db.map((item,index) => <ItemComponent key={index} data={item}/>) // props.db ==> passing data from top-buttom.
    // console.log(elementList)
    return(
      <>
        <h2>List Item:</h2>
        <ul>{elementList}</ul>
      </>
    )
  }

  function ItemComponent(props){
    return(
      <li><b>ID:</b> {props.data.id}, Title: {props.data.title},  Amount:{props.data.amount}, Date:{props.data.date}, Gender:{props.data.gender}</li>
    )
  }
// mapping list return aaray of symbols