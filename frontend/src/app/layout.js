import './globals.css'

import { Head } from './components/Head'
import { Navigation } from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <Head />
      </head>
      <body className='overscroll-none'>
        <main className='block w-full max-w-6xl p-4 pb-32 m-auto'>
          <Navigation />
          {children}
          {
            /* Agregar Footer */
          }
        </main>
      </body>
    </html>
  )
}
