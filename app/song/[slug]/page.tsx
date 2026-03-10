import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
process.env.NEXT_PUBLIC_SUPABASE_URL as string,
process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
);

async function getSong(slug: string) {
const { data } = await supabase
.from("songs")
.select("*")
.eq("slug", slug)
.single();

return data;
}

async function getSongLinks(songId: string) {
const { data } = await supabase
.from("song_links")
.select("*")
.eq("song_id", songId);

return data || [];
}

export default async function SongPage({ params }: any) {
const song = await getSong(params.slug);

if (!song) {
return <div>Música não encontrada</div>;
}

const links = await getSongLinks(song.id);

const youtube = links.find((l: any) => l.platform === "youtube");

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
<h1 style={{ fontSize: "42px", marginBottom: "20px" }}>
{song.title} </h1>

```
  {youtube && (
    <div style={{ marginBottom: "40px" }}>
      <iframe
        width="100%"
        height="400"
        src={youtube.url.replace("watch?v=", "embed/")}
        title="YouTube video player"
        frameBorder="0"
        allowFullScreen
      />
    </div>
  )}

  <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
    📄 Letra
  </h2>

  <p style={{ whiteSpace: "pre-line", marginBottom: "40px" }}>
    {song.lyrics}
  </p>

  <h2 style={{ fontSize: "28px", marginBottom: "10px" }}>
    📖 História da música
  </h2>

  <p style={{ whiteSpace: "pre-line" }}>
    {song.story}
  </p>
</main>
```

);
}
