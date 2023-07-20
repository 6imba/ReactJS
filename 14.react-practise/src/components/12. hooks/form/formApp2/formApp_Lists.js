import { useState } from "react"

export default function ListComponent(props){
  
  const [gender,setGender] = useState("all")
  const data = gender==="all" ? (props.db) : (props.db.filter(item=>item.gender==gender))
  const filteredJSXList = data.length!=0 ? (data.map((item,index) => <ItemComponent key={index} data={item}/>)) : (<p>"No data"</p>);

  const filterListOnGender = (event) => {
    setGender(event.target.value)
  }

  return(
    <>
      <h2>List Item:</h2>
      <FilterItemComponent filterListOnGender={filterListOnGender}/><br/><br/>
      <div>
        {filteredJSXList}
      </div>
    </>
  )
}

function ItemComponent(props){
  return(
    <li><b>ID:</b> {props.data.id}, Title: {props.data.title},  Amount:{props.data.amount}, Date:{props.data.date}, Gender:{props.data.gender}</li>
  )
}

function FilterItemComponent(props){
  return(
    <select onChange={props.filterListOnGender}>
    {/* <select name="cars" id="cars"> */}
      <option value="all">All</option>
      <option value="male">Male</option>
      <option value="female">Female</option>
      <option value="lgbt">LGBT</option>
    </select>
  )
}

// mapping list return aaray of symbols