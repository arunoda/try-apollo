import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/BlogHome';

import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo'

const client = new ApolloClient({
  connectToDevTools: true,
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000'
  })
})

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  ),
  document.getElementById('root')
);
