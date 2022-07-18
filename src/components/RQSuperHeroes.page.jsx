import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:3001/superheroes')
}

const RQSuperHeroesPage = () => {
  const { isLoading, data } = useQuery('super-heroes', fetchSuperHeroes)
  console.log(data)

  return <div>RQSuperHeroes.page</div>
}

export default RQSuperHeroesPage
