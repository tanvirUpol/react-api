
import './App.css'
import Digimon from './components/query/Digimon'
import {QueryClientProvider,QueryClient} from 'react-query';
import { Suspense } from 'react';

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        suspense: true,
      }
    }
  })

  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <Suspense fallback={<h1>Loading...</h1>}>
           <Digimon/>
        </Suspense>
      </QueryClientProvider>
      
    </div>
  )
}

export default App
