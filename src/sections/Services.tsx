import { useNav } from '../hooks/useNav'

function Services() {
  const servicesRef = useNav('Services')

  return (
    <section
      ref={servicesRef}
      id="servicesSection"
      className="secondary-section"
    >
      <h2>Services</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </section>
  )
}

export default Services
