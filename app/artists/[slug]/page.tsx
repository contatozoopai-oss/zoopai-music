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

async function getSongs(artistId: string) {
const { data } = await supabase
.from("songs")
.select("*")
.eq("artist_id", artistId);

return data || [];
}

export default async function ArtistPage({ params }: any) {
const artist = await getArtist(params.slug);

if (!artist) {
return <div>Artista não encontrado</div>;
}

const songs = await getSongs(artist.id);

return (
<main
style={{
minHeight: "100vh",
background: "#020617",
color: "white",
padding: "60px",
fontFamily: "Arial"
}}
>
<h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
{artist.name} </h1>

```
  <p style={{ opacity: 0.7, marginBottom: "40px" }}>
    {artist.bio}
  </p>

  <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
    🎵 Músicas
  </h2>

  <div style={{ display: "grid", gap: "20px" }}>
    {songs.map((song: any) => (
      <a
        key={song.id}
        href={`/song/${song.slug}`}
        style={{
          padding: "20px",
          background: "#0f172a",
          borderRadius: "10px",
          textDecoration: "none",
          color: "white",
          display: "block"
        }}
      >
        <h3 style={{ fontSize: "22px" }}>{song.title}</h3>
      </a>
    ))}
  </div>
</main>
```

);
}
