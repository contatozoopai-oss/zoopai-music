import { supabase } from "../../lib/supabase"
import Link from "next/link"

export default async function ArtistsPage() {

  const { data: artists, error } = await supabase
    .from("artists")
    .select("*")
    .order("name", { ascending: true })

  if (error) {
    return <div>Erro ao carregar artistas</div>
  }

  return (
    <div style={{ padding: "40px" }}>
      <h1>Artistas</h1>

      <ul>
        {artists?.map((artist) => (
          <li key={artist.id}>
            <Link href={`/artists/${artist.slug}`}>
              {artist.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
