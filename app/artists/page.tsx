import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

async function getArtists() {
  const { data } = await supabase
    .from("artists")
    .select("*")
    .order("name");

  return data || [];
}

export default async function ArtistsPage() {
  const artists = await getArtists();

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Artistas</h1>

      {artists.map((artist: any) => (
        <div key={artist.id}>
          <Link href={`/artists/${artist.slug}`}>
            {artist.name}
          </Link>
        </div>
      ))}
    </main>
  );
}
