export default function Home() {
return (
<main style={{
minHeight: "100vh",
background: "#0f172a",
color: "white",
display: "flex",
alignItems: "center",
justifyContent: "center",
fontFamily: "Arial"
}}>
<div style={{textAlign:"center"}}>
<h1 style={{fontSize:"48px", marginBottom:"20px"}}>
🎵 ZoopAI Music </h1>

```
    <p style={{fontSize:"20px", opacity:0.8}}>
      Descubra músicas, artistas e histórias por trás das canções
    </p>

    <div style={{marginTop:"40px"}}>
      <a href="/artists" style={{
        background:"#2563eb",
        padding:"12px 24px",
        borderRadius:"8px",
        textDecoration:"none",
        color:"white",
        fontWeight:"bold"
      }}>
        Ver Artistas
      </a>
    </div>
  </div>
</main>
```

);
}
