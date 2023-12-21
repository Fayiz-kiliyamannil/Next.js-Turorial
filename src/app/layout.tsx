export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      
      <body style={{margin:0}} >
      <header style={{background:'yellow',  padding:'1rem', textAlign:'center'}} > Header... </header>
        {children}
      <h1 style={{background:'cyan', padding:'1rem', textAlign:'center'}} > footer...  </h1>
        </body>
     
    </html>
  )
}
