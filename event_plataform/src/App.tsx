import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { client } from './lib/apollo';


const GET_LESSONS_QUERY = gql `
  query {
    lessons {
      id
      title
    }
  }
`



function App() {

  useEffect(() => {
    client.query({
      query: GET_LESSONS_QUERY
    }).then(response => {
      console.log(response.data);
    });
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold text-violet-500">Sapup3 na Área</h1>
    </div>
  )
}

export default App
