import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

import Header from './components/Header'
import NavProvider from './contexts/NavContext'
import Home from './sections/Home'
import About from './sections/About'
import News from './sections/News'
import Projects from './sections/Projects'
import Services from './sections/Services'
import Team from './sections/Team'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <NavProvider>
        <Header />
        <Home />
        <About />
        <Services />
        <Projects />
        <Team />
        <News />
      </NavProvider>
    </ThemeProvider>
  )
}

export default App
