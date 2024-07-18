import React from "react";
import User from "./User";
import UserClass from "./UserClass";

// const About = () => {
//     return (
//         <>
//         <h1>About Us</h1>
//         {/* <User name={"Rashmi"} location="Mangalore" contact={'rash@gmail.com'} /> */}
//         <UserClass name={"Rashmi Class"} location="Mangalore" contact={'rash@gmail.com'} />
//         </>
//     )
// }

// export default About;

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <h1>About Us</h1>
        {/* <UserClass
          name={"Rashmi Class"}
          location="Mangalore"
          contact={"rash@gmail.com"}
        /> */}
        <User name={"Rashmi functional"}
          location="Mangalore"
          contact={"rash@gmail.com"} />
      </>
    );
  }
}

export default About;
