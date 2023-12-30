db.tiendas.aggregate([
    { $unwind: "$pedidos" },
    { $unwind: "$pedidos.pedidoCliente" },
    { $match: { "pedidos.pedidoCliente.tipo": "bb" } },
    {
        $group: {
            _id: "$pedidos.pedidoCliente.product_id",
            totalBb: {
                $sum: {
                    $cond: [{
                        $eq: ["$pedidos.pedidoCliente.tipo", "bb"]
                    },
                        "$pedidos.pedidoCliente.cantidad", 0
                    ]
                }
            }
        }
    }, 
    
    { $project: {
         "_id": 1,
          totalBb: 1,
       }
    }
])