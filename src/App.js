import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import HomePage from './components/Home.page'
import RQSuperHeroesPage from './components/RQSuperHeroes.page'
import SuperHeroesPage from './components/SuperHeroes.page'

const queryClient = new QueryClient()
const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/super-heroes'>Traditional Super Heroes</Link>
          </li>
          <li>
            <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
          </li>
        </ul>
      </nav>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/super-heroes' element={<SuperHeroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
        </Routes>
      </QueryClientProvider>
    </div>
  )
}

export default App
