use('pizzeria');
db.createCollection('tiendas', {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: [
        "nombreTienda",
        "cpTienda",
        "direccionTienda",
        "empleadosTienda",
        "productos",
        "clientes",
        "pedidos"
      ],
      properties: {
        cpTienda: { bsonType: "string" },
        direccionTienda: { bsonType: "string" },
        empleadosTienda: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["nombreEmpleados", "apellido1Empleados", "apellido2Empleados", "nifEmpleados", "funcionEmpleados"],
            properties: {
              apellido1Empleados: { bsonType: "string" },
              funcionEmpleados: { bsonType: "string" },
              nifEmpleados: { bsonType: "string" },
              apellido2Empleados: { bsonType: "string" },
              nombreEmpleados: { bsonType: "string" }
            }
          }
        },
        nombreTienda: { bsonType: "string" },
        pedidos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["fechaCreacion", "cliente", "tipoEntrega", "pedidoCliente"],
            properties: {
              cliente: {
                bsonType: "object",
                required: ["nombreCliente", "apellido1Cliente", "apellido2Cliente", "direccionCliente", "cpCliente", "telefonoCliente"],
                properties: {
                  apellido2Cliente: { bsonType: "string" },
                  cpCliente: { bsonType: "string" },
                  nombreCliente: { bsonType: "string" },
                  apellido1Cliente: { bsonType: "string" },
                  direccionCliente: { bsonType: "string" },
                  telefonoCliente: { bsonType: "string" }
                }
              },
              pedidoCliente: {
                bsonType: "array",
                items: {
                  bsonType: "object",
                  required: ["cantidad", "tipo", "product_id"],
                  properties: {
                    tipo: { bsonType: "string" },
                    product_id: { bsonType: "string" },
                    cantidad: { bsonType: "number" }
                  }
                }
              },
              fechaCreacion: { bsonType: "date" },
              tipoEntrega: { bsonType: "string" }
            }
          }
        },
        clientes: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["nombreCliente", "apellido1Cliente", "apellido2Cliente", "direccionCliente", "cpCliente", "telefonoCliente"],
            properties: {
              apellido2Cliente: { bsonType: "string" },
              cpCliente: { bsonType: "string" },
              nombreCliente: { bsonType: "string" },
              apellido1Cliente: { bsonType: "string" },
              direccionCliente: { bsonType: "string" },
              telefonoCliente: { bsonType: "string" }
            }
          }
        },
        productos: {
          bsonType: "array",
          items: {
            bsonType: "object",
            required: ["nombre", "precio", "ruta"],
            properties: {
              descripcion: { bsonType: "string" },
              precio: { bsonType: "number" },
              ruta: { bsonType: "string" },
              categoria: { bsonType: "string" },
              nombre: { bsonType: "string" }
            }
          }
        }
      }
    }
  }
});

