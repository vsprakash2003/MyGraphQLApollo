import React from 'react';
import Authorization from './Authorization';
import { Switch, Route } from 'react-router-dom';
import { ApolloProvider} from 'react-apollo';
import { apolloClient } from './utils/apolloClient/apolloClient';  
import { withRouter } from "react-router";

const ManageDepartments = async () => {
  const component = await import('./features/Department');
  return component.default;
};

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  

  appJSX = () => {
    return (
      <div>
        <Switch>
          <Route exact path="/graphql" component={Authorization(ManageDepartments)} />
        </Switch>
      </div>);
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        {this.appJSX()}
      </ApolloProvider>
    );
  }
}

export default withRouter(App);
