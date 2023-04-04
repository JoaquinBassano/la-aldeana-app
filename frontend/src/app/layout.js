import '../styles/globals.css'

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <head>
        <title>La Aldeana App with Next 13</title>
      </head>

      <body className='bg-slate-600 font-bold m-4 pt-2'>
        <h2>Layour -- Barra de navegacion</h2>
        {children}
      </body>
    </html>
  )
}
