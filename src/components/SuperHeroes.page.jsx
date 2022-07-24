import axios from 'axios'
import React from 'react'

function SuperHeroesPage() {
  React.useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get('http://localhost:3001/superheroes')
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return <div>SuperHeroes.page</div>
}

export default SuperHeroesPage
