db.tiendas.aggregate([
    { $unwind: "$clientes" },
    {
        $group: {
            _id: "$nombreTienda",
            NombreCliente: { $addToSet: "$clientes.nombreCliente" },
            PrimerApellido: { $addToSet: "$clientes.apellido1Cliente" },
            SegundoApellido: { $addToSet: "$clientes.apellido2Cliente" },
            DireccionCliente: { $addToSet: "$clientes.direccionCliente" },
            CodigoPostal: { $addToSet: "$clientes.cpCliente" },
            TelefonoCliente: { $addToSet: "$clientes.telefonoCliente" },
        }
    }, {
        $project: {
            "nombreTienda": 1, NombreCliente: 1, PrimerApellido: 1, SegundoApellido: 1,
            DireccionCliente: 1, CodigoPostal: 1, TelefonoCliente: 1
        }
    },
    { $sort: { "_id": 1 } }

])