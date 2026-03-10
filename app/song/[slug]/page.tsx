export default function SongPage({ params }) {
  return (
    <main style={{ padding: "40px", color: "white" }}>
      <h1>Página da música</h1>
      <p>Slug: {params.slug}</p>
    </main>
  )
}
