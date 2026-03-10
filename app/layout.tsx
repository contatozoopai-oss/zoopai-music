export const metadata = {
  title: "ZoopAI Music",
  description: "Descubra músicas, artistas e histórias por trás das canções"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body
        style={{
          margin: 0,
          fontFamily: "Arial, sans-serif",
          background: "#0f172a",
          color: "white"
        }}
      >
        {children}
      </body>
    </html>
  )
}
