import React from "react";
import { UserConsumer, } from "../providers/UserProvider";
import { Card, } from "semantic-ui-react";

const User = () => (
  <UserConsumer>
    {user => (
      <Card>
        <Card.Content>
          <Card.Header>{user.firstName} { user.lastName }</Card.Header>
          <Card.Meta>
            Favorite food: { user.favoriteFood }
          </Card.Meta>
        </Card.Content>
        <Card.Content>
          <p>{ user.email }</p>
        </Card.Content>
      </Card>
    )}
  </UserConsumer>
);

export default User;