import { useEffect, useState } from "react";

const User = (props) => {
const [count] = useState(0);
const [count2] = useState(0);

useEffect(() => {
  const timer =  setInterval(() => {
        console.log("Hi")
    })


    //this function is called when ur unmounting it
    // this is kind of unmounting section
    return ()=> {
        console.log("unmount")
        clearInterval(timer)
    }
}) 

    const {name, location, contact} =props;
    return (
        <div className="user-card">
            <h1>Count 1 - {count}</h1>
            <h1>Count 2 - {count2}</h1>
            <h2>Name: {name}</h2>
            <h2>Location: {location}</h2>
            <h2>Contact: {contact}</h2>
        </div>
    )
}

export default User;