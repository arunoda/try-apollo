import React from 'react';
import ReactDOM from 'react-dom';
import BlogHome from './containers/BlogHome';
import BlogPost from './containers/BlogPost';

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
      <BlogPost id="one" />
    </ApolloProvider>
  ),
  document.getElementById('root')
);
