import Header from './components/Header'
import NavProvider from './contexts/NavContext'
import About from './sections/About'
import Hero from './sections/Home'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Team from './sections/Team'

function Home() {
  return (
    <div>
      <NavProvider>
        <Header />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Team />
      </NavProvider>
    </div>
  )
}

export default Home
