import React from 'react'
import DataTable from './DataTable'

export default {
    title: "Organisms/DataTable",
    component: DataTable
}

const data = {
    columns: [
        {
            label: "Nombre",
            field: "nombre",
            sort: 'asc',
        },
        {
            label: "Fecha",
            field: "fecha",
            sort: 'asc',
        },
        {
            label: "Cantidad Platos",
            field: "cantidad_platos",
            sort: 'asc',
        },
        {
            label: "Total",
            field: "costo_total",
            sort: 'asc',
        },
        {
            label: "Monto Pagado",
            field: "monto_pagado",
            sort: 'asc',
        },
        {
            label: "Entrega",
            field: "estado_entrega",
            sort: 'asc',
        },
        {
            label: "Acciones",
            field: "acciones",
            sort: 'asc',
        },
    ],
    rows: [
        {
            nombre: "Diego",
            fecha: "10/05/2020",
            cantidad_platos: 30,
            costo_total: `S/ ${50}`,
            monto_pagado: `S/ ${30}`,
            estado_entrega: "entregado",
            acciones: <button>Hola mundo</button>
        },
        {
            nombre: "Diego",
            fecha: "10/05/2020",
            cantidad_platos: 30,
            costo_total: `S/ ${50}`,
            monto_pagado: `S/ ${30}`,
            estado_entrega: "entregado",
            acciones: <button>Hola mundo</button>
        },
        {
            nombre: "Diego",
            fecha: "10/05/2020",
            cantidad_platos: 30,
            costo_total: `S/ ${50}`,
            monto_pagado: `S/ ${30}`,
            estado_entrega: "entregado",
            acciones: <button>Hola mundo</button>
        },
        {
            nombre: "Diego",
            fecha: "10/05/2020",
            cantidad_platos: 30,
            costo_total: `S/ ${50}`,
            monto_pagado: `S/ ${30}`,
            estado_entrega: "entregado",
            acciones: <button>Hola mundo</button>
        },

    ]
}










export const primary = () => <DataTable title="Pedidos" data={data} loading={false} />
export const cargando = () => <DataTable title="Pedidos"  />
export const tablaVacia = () => <DataTable title="Pedidos" loading={false} />
