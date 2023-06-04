import './App.css'
import { ChooseClass } from './components/ChooseClass'
import { Easiest } from './components/Easiest'
import { Footer } from './components/Footer'
import { HowItWork } from './components/HowItWork'
import { Main } from './components/Main'
import { Navigation } from './components/Navigation'
import { NewLanguages } from './components/NewLanguages'

function App() {

  return (
    <div>
        <Navigation/>
        <Main/>
        <ChooseClass/>
        <Easiest/>
        <HowItWork/>
        <NewLanguages/>
        <Footer/>
    </div>
  )
}

export default App
