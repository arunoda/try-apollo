const express = require('express');
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema')

const port = process.env.PORT || 4000
const app = express();

app.use('/', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`App started on port: ${port}`)
});
