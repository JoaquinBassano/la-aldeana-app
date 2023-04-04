// import { Suspense } from 'react'

// const fetchEmployees = () => {
//   return fetch('http://localhost:3001/api/employees', {
//     next: {
//       revalidate: 10
//     }
//   })
//     .then(res => res.json())
// }

// export default async function EmployeesPage () {
//   const employees = await fetchEmployees()

//   return (
//     <>
//       <h1>Hola, soy Joaquin y ahora muestro una lista de empleados</h1>

//       <Suspense fallback={<p>Cargando empleados....</p>}>
//         {
//             employees.map((employee) => (
//               <article key={employee.id}>
//                 <h3>{employee.name}</h3>
//                 <p>Empleado nro {employee.id}</p>
//               </article>
//             ))
//           }
//       </Suspense>
//     </>
//   )
// }

'use client'

import { useState, useEffect } from 'react'

export default function EmployeesPage () {
  const [employees, setEmployee] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:3001/api/employees')
      .then((res) => res.json())
      .then((employees) => {
        setEmployee(employees)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!employees) return <p>No employee data</p>

  return (
    <>
      <h1>Hola, soy Joaquin y ahora muestro una lista de empleados</h1>

      {
        employees.map((employee) => (
          <article key={employee.id}>
            <h3>{employee.name}</h3>
            <p>Empleado nro {employee.id}</p>
          </article>
        ))
      }

    </>
  )
}
