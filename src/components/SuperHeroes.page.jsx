import axios from 'axios'
import React from 'react'

function SuperHeroesPage() {
  React.useEffect(() => {
    ;(async () => {
      const { data } = await axios.get('http://localhost:3001/superheroes')
      console.log(data)
    })()
  }, [])
  return <div>SuperHeroes.page</div>
}

export default SuperHeroesPage
