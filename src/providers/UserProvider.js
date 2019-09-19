import React from "react";

const UserContext = React.createContext();

export const UserConsumer = UserContext.Consumer;

class UserProvider extends React.Component {
  state = { 
    firstName: "Captain",
    lastName: "Crunch",
    email: "KrunchatizeMeDaddy@cerial.com",
    favoriteFood: "Lucky Charms",
    updateUser: (user) => this.updateUser(user) ,
  };

  updateUser = (user) => this.setState({ ...user, });
  
  render() {
    return (
      <UserContext.Provider value={this.state}>
          { this.props.children }
      </UserContext.Provider>
    );
  };
};

export default UserProvider;