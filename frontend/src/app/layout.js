export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>La Aldeana App with Next 13</title>
      </head>

      <body>
        <h2>Layour -- Barra de navegacion</h2>
        {children}
      </body>
    </html>
  )
}
