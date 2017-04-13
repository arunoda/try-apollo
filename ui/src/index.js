import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route
} from 'react-router-dom'

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
      <BrowserRouter>
        <div>
          <Route exact path="/" component={BlogHome}/>
          <Route path="/:id" component={BlogPost}/>
        </div>
      </BrowserRouter>
    </ApolloProvider>
  ),
  document.getElementById('root')
);
