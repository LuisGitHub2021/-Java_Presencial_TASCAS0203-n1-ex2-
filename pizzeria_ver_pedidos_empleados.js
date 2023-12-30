db.tiendas.aggregate([
    { $unwind: "$empleadosTienda" },
    { $unwind: "$pedidos" },
    {
        $group: {
            _id: {
                empleadoEntrega: "$empleadosTienda.nombreEmpleados",
                tipoEntrega: "$pedidos.tipoEntrega",
                funcionEmpleados: "$empleadosTienda.funcionEmpleados"
            }, 
            totalPedidos: {
                $sum: {
                    $cond: [
                        { $and: [
                            { $eq: ["$empleadosTienda.funcionEmpleados", "Reparto"] },
                            { $eq: ["$pedidos.tipoEntrega", "Domicilio"] }
                        ] },
                        1,
                        { $cond: [
                            { $and: [
                                { $eq: ["$empleadosTienda.funcionEmpleados", "Cocina"] },
                                { $eq: ["$pedidos.tipoEntrega", "Tienda"] }
                            ] },
                            1,
                            0
                        ] }
                    ]
                }
            },
            tienda: { $first: "$nombreTienda" }
        }
    },
    {
        $project: {
            _id: 0,
            empleadoEntrega: "$_id.empleadoEntrega",
            tipoEntrega: "$_id.tipoEntrega",
            totalPedidos: 1,
            tienda: 1
        }
    },
    { $match: { totalPedidos: { $gt: 0 } } }, // Filtrar registros con totalPedidos mayor que 0
    { $sort: { tienda: 1 } }
])