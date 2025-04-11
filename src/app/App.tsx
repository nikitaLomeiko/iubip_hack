import { Suspense } from 'react'
import { Routing } from './providers/routing'
import './styles/index.css'

function App() {
  return (
    <Suspense fallback='Загрузка...'>
      <Routing />
    </Suspense>
  )
}

export default App
