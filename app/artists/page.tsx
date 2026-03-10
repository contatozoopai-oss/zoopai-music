import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL as string,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

async function getArtists() {
const { data } = await supabase.from("artists").select("*");
return data || [];
}

export default async function ArtistsPage() {
const artists = await getArtists();

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
<h1 style={{ fontSize: "40px", marginBottom: "40px" }}>
🎤 Artistas </h1>

```
  <div style={{ display: "grid", gap: "20px" }}>
    {artists.map((artist: any) => (
      <a
        key={artist.id}
        href={`/artist/${artist.slug}`}
        style={{
          padding: "20px",
          background: "#0f172a",
          borderRadius: "10px",
          textDecoration: "none",
          color: "white",
          display: "block"
        }}
      >
        <h2 style={{ fontSize: "24px" }}>{artist.name}</h2>
        <p style={{ opacity: 0.7 }}>{artist.bio}</p>
      </a>
    ))}
  </div>
</main>
```

);
}
