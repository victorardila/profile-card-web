import React from 'react'
import LayoutApp from './components/layout/LayoutApp'

const App = () => {
  return (
    <div className="app" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <LayoutApp />
    </div>
  )
}

export default App