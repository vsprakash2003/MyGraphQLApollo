import React from 'react';
import PropTypes from 'prop-types';
// import { Loading } from "bonsai-components-react";
import DepartmentList from './components/DepartmentList'
//import { Switch, Route } from 'react-router-dom'
import { ApolloProvider, Query, ApolloConsumer } from 'react-apollo'
import { apolloClient } from './utils/apolloClient/apolloClient.Copy'
import { withRouter } from "react-router";
import { ALL_DEPARTMENTS } from './graphql/query/department';

export class App extends React.Component {
  backToHome = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Query
          query={ALL_DEPARTMENTS}
        >
          {({ data, loading, error }) => {
            if (loading) {
              return <p>Loading....</p>;
            }
            if (error) {
              return `Error! ${error.message}`;
            }
            console.log(data.allDepartments)
            let dept_list_object = data.allDepartments.edges
            let dept_list_array = dept_list_object.map((outerList, index) => {
                return(outerList.node)
            })
            return (<div>
              <ApolloConsumer>
              {client => (
                  <div>
                            <DepartmentList list = {dept_list_array}
                            />
                  </div>
                )}
              </ApolloConsumer>
              {/* <Switch>
                <Route exact path="/graphql" component={DepartmentList} />
              </Switch> */}
            </div>)
          }}
        </Query>
      </ApolloProvider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
};

export default withRouter(App);
