import ApolloClient from 'apollo-boost';
import {API_URL} from '../../config/apiConfig';

console.log(API_URL)
export const apolloClient = new ApolloClient(
{
uri:`${API_URL}`,
// fetchOptions: {
//     mode: 'no-cors',
//   },
request:operation => {
operation.setContext(
    {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        }
    }
)
},
onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
}
}
)
