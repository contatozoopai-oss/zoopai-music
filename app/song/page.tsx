import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

async function getSong(slug: string) {
  const { data } = await supabase
    .from("songs")
    .select("*")
    .eq("slug", slug)
    .single()

  return data
}

export default async function SongPage({
  params,
}: {
  params: { slug: string }
}) {
  const song = await getSong(params.slug)

  if (!song) {
    return <div>Música não encontrada</div>
  }

  return (
    <main
      style={{
        maxWidth: "800px",
        margin: "auto",
        padding: "40px",
        color: "white",
      }}
    >
      <h1>{song.title}</h1>

      <h3>{song.artist}</h3>

      <p style={{ marginTop: "30px", lineHeight: "1.6" }}>
        {song.story}
      </p>
    </main>
  )
}
