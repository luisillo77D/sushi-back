import Carrito from "../models/carrito.model.js";
//METODO POST PARA AGREGAR UN PRODUCTO AL CARRITO
export const agregarProductoCarrito = async (req, res) => {
    const { idproduct, quantity } = req.body;
    const { idUsuario } = req.params;
    const carrito = await Carrito.findOne({ idUsuario});
    if (carrito) {
        const producto = await Producto.findById(idproduct);
        if (producto) {
            const productoCarrito = {
                idproduct,
                quantity
            };
            carrito.items.push(productoCarrito);
            await carrito.save();
            res.status(200).json({ message: "Producto agregado al carrito" });
        } else {
            res.status(400).json({ message: "Producto no encontrado" });
        }
    } else {
        res.status(400).json({ message: "Carrito no encontrado" });
    }
};

//metodo para crear un carrito de compras para un usuario
export const crearCarrito = async (req, res) => {
    try {
        //const { user } = req.user.id;
        console.log(req.user.id)
        const carrito = new Carrito({user:req.user.id});
        await carrito.save();
        res.status(201).json(carrito);
    } catch (error) {
        res.status(500).json({ message: "Error creating carrito", error });
    }
};