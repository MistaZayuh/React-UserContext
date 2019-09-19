import React from "react";
import { Form, } from "semantic-ui-react";
import { UserConsumer, } from "../providers/UserProvider";

class UserForm extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    favoriteFood: "",
  };

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value, });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.updateUser(this.state)
  };


  render() {
    return (
      <Form widths="equal" onSubmit={this.handleSubmit}>
        <Form.Input 
        required
        label="First Name"
        type="text"
        name="firstName"
        value={this.state.firstName}
        onChange={this.handleChange}
        />
        <Form.Input 
        required
        label="Last Name"
        type="text"
        name="lastName"
        value={this.state.lastName}
        onChange={this.handleChange}
        />
        <Form.Input 
        label="Email"
        type="text"
        name="email"
        value={this.state.email}
        onChange={this.handleChange}
        />
        <Form.Input 
        label="Favorite Food"
        type="text"
        name="favoriteFood"
        value={this.state.favoriteFood}
        onChange={this.handleChange}
        />
        <Form.Button color="blue">Submit</Form.Button>
      </Form>
    );
  };
};

const ConnectedUserForm = (props) => {
  return (
    <UserConsumer>
      {user => (
        <UserForm { ...props }
        firstName={user.firstName}
        lastName={user.lastName}
        favoriteFood={user.favoriteFood}
        email={user.email}
        updateUser={user.updateUser}
        />
      )}
    </UserConsumer>
  );
};

export default ConnectedUserForm;

