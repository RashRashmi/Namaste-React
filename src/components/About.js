import React from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

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
        <div className="text-xl font-bold p-2 m-4 flex" >
          Logged in User :
          <UserContext.Consumer>
            {({ loggedInUser }) => (
              <h1 className="text-xl font-bold">{loggedInUser}</h1>
            )}
          </UserContext.Consumer>
        </div>

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
