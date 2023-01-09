import { useNav } from '../hooks/useNav'

function Projects() {
  const projectsRef = useNav('Projects')

  return (
    <section ref={projectsRef} id="projectsSection">
      <h2>Projects</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </section>
  )
}

export default Projects
