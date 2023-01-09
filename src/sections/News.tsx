import { useNav } from '../hooks/useNav'

function News() {
  const newsRef = useNav('News')

  return (
    <section ref={newsRef} id="newsSection">
      <h2>News</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic optio
        dolorum exercitationem, harum repellat explicabo quis error excepturi
        porro soluta.
      </p>
    </section>
  )
}

export default News
