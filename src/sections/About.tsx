import { useNav } from '../hooks/useNav'

function About() {
  const aboutRef = useNav('About')

  return (
    <section ref={aboutRef} id="aboutSection">
      <h2>About</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </section>
  )
}

export default About
