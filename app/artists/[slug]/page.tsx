import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

async function getArtist(slug: string) {
  const { data } = await supabase
    .from("artists")
    .select("*")
    .eq("slug", slug)
    .single();

  return data;
}

export default async function ArtistPage({ params }: any) {
  const artist = await getArtist(params.slug);

  if (!artist) return <div>Artista não encontrado</div>;

  return (
    <main style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>{artist.name}</h1>

      <p>{artist.bio}</p>
    </main>
  );
}
