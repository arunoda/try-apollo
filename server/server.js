const express = require('express');
const cors = require('cors')
const graphqlHTTP = require('express-graphql');
const Schema = require('./schema')

const port = process.env.PORT || 4000
const app = express();

app.use(cors())
app.use('/', graphqlHTTP({
  schema: Schema,
  graphiql: true
}));

app.listen(port, () => {
  console.log(`App started on port: ${port}`)
});
