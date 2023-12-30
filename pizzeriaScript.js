db.tiendas.insertMany([
    {
        nombreTienda: "pizza TU Bcn Sants",
        cpTienda: "08014",
        direccionTienda: "Carrer Gran 22",
        empleadosTienda: [
            { nombreEmpleados: "Cris", apellido1Empleados: "Rew", apellido2Empleados: "Toyu", nifEmpleados: "54654789L", funcionEmpleados: "Cocina" },
            { nombreEmpleados: "Gael", apellido1Empleados: "Fandos", apellido2Empleados: "Gracia", nifEmpleados: "34213234J", funcionEmpleados: "Reparto" }
        ],

        productos: [
            { _id: "pz1", nombre: "Barbacoa", descripcion: "Carne", precio: 12.5, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Barbacoa.jpg" },
            { _id: "pz2", nombre: "Mexicana", descripcion: "Carne y picante", precio: 13.8, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Mexicana.jpg" },
            { _id: "pz3", nombre: "Carbonara", descripcion: "Bacon", precio: 14, categoria: "Clásica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Carbonara.jpg" },
            { _id: "pz4", nombre: "Funghi", descripcion: "Champiñones", precio: 11.2, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Funghi.jpg" },
            { _id: "pz5", nombre: "Escalivada", descripcion: "Berenjena y Pimiento Rojo", precio: 9, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Escalivada.jpg" },
            { _id: "pz6", nombre: "Calabresa", descripcion: "Tomate y Queso Buffala", precio: 11.5, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Calabresa.jpg" },
            { _id: "pz7", nombre: "Prosciutto", descripcion: "Tomate y York", precio: 9, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Prosciutto.jpg" },
            { _id: "pz8", nombre: "Margarita", descripcion: "Tomate y Queso", precio: 11.2, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Margarita.jpg" },
            { _id: "pz9", nombre: "4 Quesos", descripcion: "Queso Azul, Cheddar, Manchego y Brie", precio: 12.5, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza 4 Quesos.jpg" },
            { _id: "hb1", nombre: "Hamburguesa Classic", descripcion: "Hamburguesa y Queso", precio: 7.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Classic.jpg" },
            { _id: "hb2", nombre: "Hamburguesa Completa", descripcion: "Hamburguesa, Queso, Lechuga, Cebolla", precio: 9.8, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Completa.jpg" },
            { _id: "hb3", nombre: "Hamburguesa COW", descripcion: "	Hamburguesa 200gr, Queso y Lechuga", precio: 12, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa COW.jpg" },
            { _id: "bb1", nombre: "Coca Cola", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Coca Cola.jpg" },
            { _id: "bb2", nombre: "Fanta Naranja", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Naranja.jpg" },
            { _id: "bb3", nombre: "Fanta Limón", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Limon.png" },
            { _id: "bb4", nombre: "Aquarius Naranja", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Naranja.jpg" },
            { _id: "bb5", nombre: "Aquarius Limón", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Limon.jpg" },
            { _id: "bb6", nombre: "Nestea", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Nestea.jpg" },
            { _id: "bb7", nombre: "Cerveza", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza.jpg" },
            { _id: "bb8", nombre: "Cerrveza sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza sin alcohol.jpg" },
            { _id: "bb9", nombre: "Clara", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara.jpg" },
            { _id: "bb10", nombre: "Clara sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara sin alcohol.jpg" },
            { _id: "bb11", nombre: "Agua", decripcion: "Aguas", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua.jpg" },
            { _id: "bb12", nombre: "Agua con Gas", decripcion: "Aguas", precio: 1.75, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua con gas.jpg" }
        ],



        clientes: [
            { nombreCliente: "Juan", apellido1Cliente: "Rodrigo", apellido2Cliente: "Martos", direccionCliente: "Calle Pio 87", cpCliente: "08001", telefonoCliente: "654471158" },
            { nombreCliente: "Ana", apellido1Cliente: "Norce", apellido2Cliente: "Silva", direccionCliente: "Paseo Roura 32 Bajos", cpCliente: "08004", telefonoCliente: "632525269" }

        ],

        pedidos: [{
            fechaCreacion: ISODate("2023-12-19T01:36:14.197Z"),
            cliente: { nombreCliente: "Juan", apellido1Cliente: "Rodrigo", apellido2Cliente: "Martos", direccionCliente: "Calle Pio 87", cpCliente: "08001", telefonoCliente: "654471158" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "hb", product_id: "hb1" },
                { cantidad: 1, tipo: "bb", product_id: "bb1" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T02:36:14.197Z"),
            cliente: { nombreCliente: "Juan", apellido1Cliente: "Rodrigo", apellido2Cliente: "Martos", direccionCliente: "Calle Pio 87", cpCliente: "08001", telefonoCliente: "654471158" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 2, tipo: "pz", product_id: "pz1" },
                { cantidad: 1, tipo: "pz", product_id: "pz4" },
                { cantidad: 1, tipo: "pz", product_id: "pz9" }
            ]

        },
        {
            fechaCreacion: ISODate("2023-12-19T03:36:14.197Z"),
            cliente: { nombreCliente: "Ana", apellido1Cliente: "Norce", apellido2Cliente: "Silva", direccionCliente: "Paseo Roura 32 Bajos", cpCliente: "08004", telefonoCliente: "632525269" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "hb", product_id: "hb1" },
                { cantidad: 1, tipo: "bb", product_id: "bb2" }

            ]

        },
        {
            fechaCreacion: ISODate("2023-12-19T04:36:14.197Z"),
            cliente: { nombreCliente: "Ana", apellido1Cliente: "Norce", apellido2Cliente: "Silva", direccionCliente: "Paseo Roura 32 Bajos", cpCliente: "08004", telefonoCliente: "632525269" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 2, tipo: "pz", product_id: "pz5" },
                { cantidad: 1, tipo: "pz", product_id: "pz7" }

            ]

        }

        ]
    },

    {
        nombreTienda: "pizza TU Mad Alcala",
        cpTienda: "	28001",
        direccionTienda: "Calle Mayor 33",
        empleadosTienda: [
            { nombreEmpleados: "Klausy", apellido1Empleados: "Polme", apellido2Empleados: "Pilmo", nifEmpleados: "62453098P", funcionEmpleados: "Cocina" },
            { nombreEmpleados: "Pirlo", apellido1Empleados: "Jas", apellido2Empleados: "Sak", nifEmpleados: "21456786K", funcionEmpleados: "Reparto" }
        ],

        productos: [
            { _id: "pz1", nombre: "Barbacoa", descripcion: "Carne", precio: 12.5, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Barbacoa.jpg" },
            { _id: "pz2", nombre: "Mexicana", descripcion: "Carne y picante", precio: 13.8, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Mexicana.jpg" },
            { _id: "pz3", nombre: "Carbonara", descripcion: "Bacon", precio: 14, categoria: "Clásica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Carbonara.jpg" },
            { _id: "pz4", nombre: "Funghi", descripcion: "Champiñones", precio: 11.2, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Funghi.jpg" },
            { _id: "pz5", nombre: "Escalivada", descripcion: "Berenjena y Pimiento Rojo", precio: 9, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Escalivada.jpg" },
            { _id: "pz6", nombre: "Calabresa", descripcion: "Tomate y Queso Buffala", precio: 11.5, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Calabresa.jpg" },
            { _id: "pz7", nombre: "Prosciutto", descripcion: "Tomate y York", precio: 9, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Prosciutto.jpg" },
            { _id: "pz8", nombre: "Margarita", descripcion: "Tomate y Queso", precio: 11.2, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Margarita.jpg" },
            { _id: "pz9", nombre: "4 Quesos", descripcion: "Queso Azul, Cheddar, Manchego y Brie", precio: 12.5, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza 4 Quesos.jpg" },
            { _id: "hb1", nombre: "Hamburguesa Classic", descripcion: "Hamburguesa y Queso", precio: 7.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Classic.jpg" },
            { _id: "hb2", nombre: "Hamburguesa Completa", descripcion: "Hamburguesa, Queso, Lechuga, Cebolla", precio: 9.8, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Completa.jpg" },
            { _id: "hb3", nombre: "Hamburguesa COW", descripcion: "	Hamburguesa 200gr, Queso y Lechuga", precio: 12, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa COW.jpg" },
            { _id: "bb1", nombre: "Coca Cola", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Coca Cola.jpg" },
            { _id: "bb2", nombre: "Fanta Naranja", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Naranja.jpg" },
            { _id: "bb3", nombre: "Fanta Limón", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Limon.png" },
            { _id: "bb4", nombre: "Aquarius Naranja", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Naranja.jpg" },
            { _id: "bb5", nombre: "Aquarius Limón", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Limon.jpg" },
            { _id: "bb6", nombre: "Nestea", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Nestea.jpg" },
            { _id: "bb7", nombre: "Cerveza", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza.jpg" },
            { _id: "bb8", nombre: "Cerrveza sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza sin alcohol.jpg" },
            { _id: "bb9", nombre: "Clara", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara.jpg" },
            { _id: "bb10", nombre: "Clara sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara sin alcohol.jpg" },
            { _id: "bb11", nombre: "Agua", decripcion: "Aguas", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua.jpg" },
            { _id: "bb12", nombre: "Agua con Gas", decripcion: "Aguas", precio: 1.75, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua con gas.jpg" }
        ],

        clientes: [
            { nombreCliente: "Pol", apellido1Cliente: "Rono", apellido2Cliente: "Sava", direccionCliente: "Calle Lima 89 3º1ª", cpCliente: "28001", telefonoCliente: "615245156" },
            { nombreCliente: "Lua", apellido1Cliente: "Nacor", apellido2Cliente: "Lujan", direccionCliente: "Paseo Castellón 123 1º2ª", cpCliente: "28003", telefonoCliente: "632525255" }
        ],

        pedidos: [{
            fechaCreacion: ISODate("2023-12-19T05:36:14.197Z"),
            cliente: { nombreCliente: "Pol", apellido1Cliente: "Rono", apellido2Cliente: "Sava", direccionCliente: "Calle Lima 89 3º1ª", cpCliente: "28001", telefonoCliente: "615245156" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "hb", product_id: "hb3" },
                { cantidad: 1, tipo: "bb", product_id: "bb3" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T06:36:14.197Z"),
            cliente: { nombreCliente: "Pol", apellido1Cliente: "Rono", apellido2Cliente: "Sava", direccionCliente: "Calle Lima 89 3º1ª", cpCliente: "28001", telefonoCliente: "615245156" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 1, tipo: "pz", product_id: "pz2" },
                { cantidad: 1, tipo: "pz", product_id: "pz3" },
                { cantidad: 1, tipo: "pz", product_id: "pz4" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T07:36:14.197Z"),
            cliente: { nombreCliente: "Lua", apellido1Cliente: "Nacor", apellido2Cliente: "Lujan", direccionCliente: "Paseo Castellón 123 1º2ª", cpCliente: "28003", telefonoCliente: "632525255" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "hb", product_id: "hb1" },
                { cantidad: 1, tipo: "bb", product_id: "bb1" }
            ]


        },
        {
            fechaCreacion: ISODate("2023-12-19T08:36:14.197Z"),
            cliente: { nombreCliente: "Lua", apellido1Cliente: "Nacor", apellido2Cliente: "Lujan", direccionCliente: "Paseo Castellón 123 1º2ª", cpCliente: "28003", telefonoCliente: "632525255" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 2, tipo: "pz", product_id: "pz2" }
            ]


        }

        ]
    },
    {
        nombreTienda: "pizza TU L'Hospitalet",
        cpTienda: "08901",
        direccionTienda: "Av Pintor Fortuny 10",
        empleadosTienda: [
            { nombreEmpleados: "Donato", apellido1Empleados: "Ona", apellido2Empleados: "Tona", nifEmpleados: "45876567U", funcionEmpleados: "Cocina" },
            { nombreEmpleados: "Antonio", apellido1Empleados: "Nio", apellido2Empleados: "Nat", nifEmpleados: "39142675R", funcionEmpleados: "Reparto" }
        ],

        productos: [
            { _id: "pz1", nombre: "Barbacoa", descripcion: "Carne", precio: 12.5, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Barbacoa.jpg" },
            { _id: "pz2", nombre: "Mexicana", descripcion: "Carne y picante", precio: 13.8, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Mexicana.jpg" },
            { _id: "pz3", nombre: "Carbonara", descripcion: "Bacon", precio: 14, categoria: "Clásica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Carbonara.jpg" },
            { _id: "pz4", nombre: "Funghi", descripcion: "Champiñones", precio: 11.2, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Funghi.jpg" },
            { _id: "pz5", nombre: "Escalivada", descripcion: "Berenjena y Pimiento Rojo", precio: 9, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Escalivada.jpg" },
            { _id: "pz6", nombre: "Calabresa", descripcion: "Tomate y Queso Buffala", precio: 11.5, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Calabresa.jpg" },
            { _id: "pz7", nombre: "Prosciutto", descripcion: "Tomate y York", precio: 9, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Prosciutto.jpg" },
            { _id: "pz8", nombre: "Margarita", descripcion: "Tomate y Queso", precio: 11.2, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Margarita.jpg" },
            { _id: "pz9", nombre: "4 Quesos", descripcion: "Queso Azul, Cheddar, Manchego y Brie", precio: 12.5, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza 4 Quesos.jpg" },
            { _id: "hb1", nombre: "Hamburguesa Classic", descripcion: "Hamburguesa y Queso", precio: 7.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Classic.jpg" },
            { _id: "hb2", nombre: "Hamburguesa Completa", descripcion: "Hamburguesa, Queso, Lechuga, Cebolla", precio: 9.8, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Completa.jpg" },
            { _id: "hb3", nombre: "Hamburguesa COW", descripcion: "	Hamburguesa 200gr, Queso y Lechuga", precio: 12, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa COW.jpg" },
            { _id: "bb1", nombre: "Coca Cola", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Coca Cola.jpg" },
            { _id: "bb2", nombre: "Fanta Naranja", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Naranja.jpg" },
            { _id: "bb3", nombre: "Fanta Limón", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Limon.png" },
            { _id: "bb4", nombre: "Aquarius Naranja", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Naranja.jpg" },
            { _id: "bb5", nombre: "Aquarius Limón", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Limon.jpg" },
            { _id: "bb6", nombre: "Nestea", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Nestea.jpg" },
            { _id: "bb7", nombre: "Cerveza", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza.jpg" },
            { _id: "bb8", nombre: "Cerrveza sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza sin alcohol.jpg" },
            { _id: "bb9", nombre: "Clara", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara.jpg" },
            { _id: "bb10", nombre: "Clara sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara sin alcohol.jpg" },
            { _id: "bb11", nombre: "Agua", decripcion: "Aguas", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua.jpg" },
            { _id: "bb12", nombre: "Agua con Gas", decripcion: "Aguas", precio: 1.75, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua con gas.jpg" }
        ],

        clientes: [
            { nombreCliente: "Eva", apellido1Cliente: "Prado", apellido2Cliente: "Gren", direccionCliente: "Av Republica Francesa 235 7º4ª", cpCliente: "08906", telefonoCliente: "654417451" },
            { nombreCliente: "Ada", apellido1Cliente: "Klos", apellido2Cliente: "Junco", direccionCliente: "Calle Azucar 9 Entlo1ª", cpCliente: "08905", telefonoCliente: "635789419" }


        ],
        pedidos: [{
            fechaCreacion: ISODate("2023-12-19T09:36:14.197Z"),
            cliente: { nombreCliente: "Eva", apellido1Cliente: "Prado", apellido2Cliente: "Gren", direccionCliente: "Av Republica Francesa 235 7º4ª", cpCliente: "08906", telefonoCliente: "654417451" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "pz", product_id: "pz1" },
                { cantidad: 1, tipo: "bb", product_id: "bb8" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T10:36:14.197Z"),
            cliente: { nombreCliente: "Eva", apellido1Cliente: "Prado", apellido2Cliente: "Gren", direccionCliente: "Av Republica Francesa 235 7º4ª", cpCliente: "08906", telefonoCliente: "654417451" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 2, tipo: "pz", product_id: "pz2" },
                { cantidad: 2, tipo: "pz", product_id: "pz7" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T11:36:14.197Z"),
            cliente: { nombreCliente: "Ada", apellido1Cliente: "Klos", apellido2Cliente: "Junco", direccionCliente: "Calle Azucar 9 Entlo1ª", cpCliente: "08905", telefonoCliente: "635789419" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "pz", product_id: "pz9" },
                { cantidad: 1, tipo: "bb", product_id: "bb5" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T12:36:14.197Z"),
            cliente: { nombreCliente: "Ada", apellido1Cliente: "Klos", apellido2Cliente: "Junco", direccionCliente: "Calle Azucar 9 Entlo1ª", cpCliente: "08905", telefonoCliente: "635789419" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 1, tipo: "pz", product_id: "pz1" },
                { cantidad: 1, tipo: "pz", product_id: "pz3" },
                { cantidad: 1, tipo: "pz", product_id: "pz5" }
            ]
        }
        ]
    },
    {
        nombreTienda: "pizza TU Alcorcon",
        cpTienda: "	28918",
        direccionTienda: "Paseo Maravillas 44",
        empleadosTienda: [
            { nombreEmpleados: "Maria", apellido1Empleados: "Andrade", apellido2Empleados: "Bisay", nifEmpleados: "45871159L", funcionEmpleados: "Cocina" },
            { nombreEmpleados: "Lola", apellido1Empleados: "Cartin", apellido2Empleados: "Roid", nifEmpleados: "41859654Q", funcionEmpleados: "Reparto" }
        ],

        productos: [
            { _id: "pz1", nombre: "Barbacoa", descripcion: "Carne", precio: 12.5, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Barbacoa.jpg" },
            { _id: "pz2", nombre: "Mexicana", descripcion: "Carne y picante", precio: 13.8, categoria: "Carne", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Mexicana.jpg" },
            { _id: "pz3", nombre: "Carbonara", descripcion: "Bacon", precio: 14, categoria: "Clásica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Carbonara.jpg" },
            { _id: "pz4", nombre: "Funghi", descripcion: "Champiñones", precio: 11.2, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Funghi.jpg" },
            { _id: "pz5", nombre: "Escalivada", descripcion: "Berenjena y Pimiento Rojo", precio: 9, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Escalivada.jpg" },
            { _id: "pz6", nombre: "Calabresa", descripcion: "Tomate y Queso Buffala", precio: 11.5, categoria: "Vegetal", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Calabresa.jpg" },
            { _id: "pz7", nombre: "Prosciutto", descripcion: "Tomate y York", precio: 9, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Prosciutto.jpg" },
            { _id: "pz8", nombre: "Margarita", descripcion: "Tomate y Queso", precio: 11.2, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza Margarita.jpg" },
            { _id: "pz9", nombre: "4 Quesos", descripcion: "Queso Azul, Cheddar, Manchego y Brie", precio: 12.5, categoria: "Clasica", ruta: "/MongoDB pizzeria/imagenesPizzeria/Pizza 4 Quesos.jpg" },
            { _id: "hb1", nombre: "Hamburguesa Classic", descripcion: "Hamburguesa y Queso", precio: 7.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Classic.jpg" },
            { _id: "hb2", nombre: "Hamburguesa Completa", descripcion: "Hamburguesa, Queso, Lechuga, Cebolla", precio: 9.8, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa Completa.jpg" },
            { _id: "hb3", nombre: "Hamburguesa COW", descripcion: "	Hamburguesa 200gr, Queso y Lechuga", precio: 12, ruta: "/MongoDB pizzeria/imagenesPizzeria/Hamburguesa COW.jpg" },
            { _id: "bb1", nombre: "Coca Cola", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Coca Cola.jpg" },
            { _id: "bb2", nombre: "Fanta Naranja", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Naranja.jpg" },
            { _id: "bb3", nombre: "Fanta Limón", decripcion: "Refresco", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Fanta Limon.png" },
            { _id: "bb4", nombre: "Aquarius Naranja", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Naranja.jpg" },
            { _id: "bb5", nombre: "Aquarius Limón", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Aquarius Limon.jpg" },
            { _id: "bb6", nombre: "Nestea", decripcion: "Refresco", precio: 1.5, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Nestea.jpg" },
            { _id: "bb7", nombre: "Cerveza", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza.jpg" },
            { _id: "bb8", nombre: "Cerrveza sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Cerveza sin alcohol.jpg" },
            { _id: "bb9", nombre: "Clara", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara.jpg" },
            { _id: "bb10", nombre: "Clara sin alcohol", decripcion: "Cervezas", precio: 1.7, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Clara sin alcohol.jpg" },
            { _id: "bb11", nombre: "Agua", decripcion: "Aguas", precio: 1.25, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua.jpg" },
            { _id: "bb12", nombre: "Agua con Gas", decripcion: "Aguas", precio: 1.75, ruta: "/MongoDB pizzeria/imagenesPizzeria/Bebida Agua con gas.jpg" }
        ],

        clientes: [

            { nombreCliente: "Luz", apellido1Cliente: "Bal", apellido2Cliente: "Zul", direccionCliente: "Calle Marte 34 4º2ª", cpCliente: "28918", telefonoCliente: "689898935" },
            { nombreCliente: "Alba", apellido1Cliente: "Ul", apellido2Cliente: "Lu", direccionCliente: "Paseo Roura 32 Bajos", cpCliente: "28918", telefonoCliente: "987412546" }


        ],


        pedidos: [{
            fechaCreacion: ISODate("2023-12-19T13:36:14.197Z"),
            cliente: { nombreCliente: "Luz", apellido1Cliente: "Bal", apellido2Cliente: "Zul", direccionCliente: "Calle Marte 34 4º2ª", cpCliente: "28918", telefonoCliente: "689898935" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "pz", product_id: "pz9" },
                { cantidad: 1, tipo: "bb", product_id: "bb9" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T14:36:14.197Z"),
            cliente: { nombreCliente: "Luz", apellido1Cliente: "Bal", apellido2Cliente: "Zul", direccionCliente: "Calle Marte 34 4º2ª", cpCliente: "28918", telefonoCliente: "689898935" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 1, tipo: "hb", product_id: "hb2" },
                { cantidad: 1, tipo: "pz", product_id: "pz5" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T15:36:14.197Z"),
            cliente: { nombreCliente: "Alba", apellido1Cliente: "Ul", apellido2Cliente: "Lu", direccionCliente: "Paseo Roura 32 Bajos", cpCliente: "28918", telefonoCliente: "987412546" },
            tipoEntrega: "Tienda",
            pedidoCliente: [
                { cantidad: 1, tipo: "pz", product_id: "pz4" },
                { cantidad: 1, tipo: "bb", product_id: "bb1" }
            ]
        },
        {
            fechaCreacion: ISODate("2023-12-19T16:36:14.197Z"),
            cliente: { nombreCliente: "Alba", apellido1Cliente: "Ul", apellido2Cliente: "Lu", direccionCliente: "Paseo Roura 32 Bajos", cpCliente: "28918", telefonoCliente: "987412546" },
            tipoEntrega: "Domicilio",
            pedidoCliente: [
                { cantidad: 2, tipo: "hb", product_id: "hb3" },
                { cantidad: 1, tipo: "pz", product_id: "pz9" }
            ]
        }

        ]
    }
]);


