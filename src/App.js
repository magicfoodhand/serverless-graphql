import React from 'react'
import GraphiQL from 'graphiql'
import 'graphiql/graphiql.css'

function graphQLFetcher(graphQLParams) {
  return fetch('/.netlify/functions/graphql', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(graphQLParams),
  }).then(response => response.json())
}

let App = () => <GraphiQL fetcher={graphQLFetcher} />

export default App
