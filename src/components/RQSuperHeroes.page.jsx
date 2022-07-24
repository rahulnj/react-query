import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'

const fetchSuperHeroes = () => {
  return axios.get('http://localhost:3001/superheroes1')
}

const RQSuperHeroesPage = () => {
  const { isLoading, data, isError, error } = useQuery(
    'super-heroes',
    fetchSuperHeroes
  )
  console.log(data)
  console.log(isError)
  console.log(error)
  if (isError) {
    return <div>{error.message}</div>
  }
  return <div>RQSuperHeroes.page</div>
}

export default RQSuperHeroesPage
