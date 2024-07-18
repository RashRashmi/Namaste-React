import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "Dummy",
        bio: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/RashRashmi");
    const json = await data.json();
    this.setState({ userInfo: json });
  }

  componentDidUpdate() {
    console.log("componentdidUpdate");   
  }

  componentWillUnmount() {
    console.log("component unmount");
  }

  render() {
    const { name, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>About ui is writen By using Class Component</h2>
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h2>Location: {bio}</h2>
        <h2>Contact: 0000</h2>
      </div>
    );
  }
}

export default UserClass;
