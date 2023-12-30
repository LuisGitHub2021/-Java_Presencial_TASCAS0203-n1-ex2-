db.tiendas.aggregate([
    { $unwind: "$pedidos" },
    { $unwind: "$pedidos.pedidoCliente" },
    {
        $group: {
            _id: "$pedidos.fechaCreacion",
            TotalPizzas: { $sum: { $cond: [{ $eq: ["$pedidos.pedidoCliente.tipo", "pz"] }, "$pedidos.pedidoCliente.cantidad", 0] } },
            TotalHamburguesas: { $sum: { $cond: [{ $eq: ["$pedidos.pedidoCliente.tipo", "hb"] }, "$pedidos.pedidoCliente.cantidad", 0] } },
            TotalBebidas: { $sum: { $cond: [{ $eq: ["$pedidos.pedidoCliente.tipo", "bb"] }, "$pedidos.pedidoCliente.cantidad", 0] } },
            ImporteTotal: {
                $sum: {
                    $cond: [{ $eq: [{ $ifNull: [{ $indexOfArray: ["$productos._id", "$pedidos.pedidoCliente.product_id"] }, -1] }, -1] }, 0,
                    { $multiply: ["$pedidos.pedidoCliente.cantidad", { $arrayElemAt: ["$productos.precio", { $indexOfArray: ["$productos._id", "$pedidos.pedidoCliente.product_id"] }] }] }]
                }
            },
            EntregadoPor: {
                $first: {
                    $cond: [{ $eq: ["$pedidos.tipoEntrega", "Tienda"] },
                    { $arrayElemAt: ["$empleadosTienda.nombreEmpleados", 0] },
                    { $arrayElemAt: ["$empleadosTienda.nombreEmpleados", 1] }]
                }
            },
            TipoEntrega: { $first: "$pedidos.tipoEntrega" },
            Tienda: { $first: "$nombreTienda" },
            NombreCliente: { $first: "$pedidos.cliente.nombreCliente" },
            DireccionCliente: { $first: "$pedidos.cliente.direccionCliente" },
            TelefonoCliente: { $first: "$pedidos.cliente.telefonoCliente" }
        }
    },
    {
        $project: {
            "pedidos.fechaCreacion": 1, TotalPizzas: 1, TotalHamburguesas: 1, TotalBebidas: 1,
            ImporteTotal: 1, Tienda: 1, TipoEntrega: 1, EntregadoPor: 1, NombreCliente: 1, DireccionCliente: 1,
            TelefonoCliente: 1
        }
    },
    { $sort: { "_id": 1 } }
])