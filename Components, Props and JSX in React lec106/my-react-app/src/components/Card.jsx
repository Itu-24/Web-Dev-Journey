import React from 'react'
import "./card.css"
const Card = (props) => {
  console.log("prop: ", props);
  return (
    <div className='card' style={{ overflow: "hidden" }}>

      <img src={props.src || "https://www.shutterstock.com/image-photo/hands-typing-on-laptop-programming-600nw-2480023489.jpg"}
        alt="" width={"300px"} style={{ border: "8px solid black", borderRadius: 10 }} />
      {/* in insline css when we do { } thenn inside that we are writing js {{}} here we r passing propertty of css as object nd when we write {20} nd {"29px"} both are same as in first we r giving js value just 20 nd in 2nd we are giving it as string  */}
      <h1>{props.title}</h1>
      <p>{props.desc}c</p>

    </div>
  )
}
// not working for some reason 
Card.defaultProps = {
  title: "ji",
  desc: "no",

}
export default Card
