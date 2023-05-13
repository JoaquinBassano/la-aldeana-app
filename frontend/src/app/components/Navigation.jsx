import Link from 'next/link'

const links = [
  {
    label: 'Inicio',
    route: '/'
  },
  {
    label: 'Empleados',
    route: '/employees'
  }
]

export function Navigation () {
  return (
    <header className='rounded px-6 py-2 border-2'>
      <nav>
        <ul className='flex gap-6 list-none'>
          {
            links.map(({ label, route }) => (
              <li key={route}>
                <Link href={route}>{label}</Link>
              </li>
            ))
            }
        </ul>
      </nav>
    </header>
  )
}
