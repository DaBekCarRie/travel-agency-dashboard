
import { Header } from 'components'
import React from 'react'

const dashboard = () => {
  const user ={
    name:"Chaini"

  }
  return (
    <main className='dashboard wrapper'>
      <Header 
      title={`Welcome ${user?.name ?? 'Guest'} 👋`}
      description="Track activity, trends and popular destinations in real time"
      />
      Dashboard Page Contents

    </main>
  )
}

export default dashboard