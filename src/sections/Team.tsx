import { useNav } from '../hooks/useNav'

function Team() {
  const teamRef = useNav('Team')

  return (
    <section ref={teamRef} id="teamSection" className="secondary-section">
      <h2>Team</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </section>
  )
}

export default Team
