import Carrito from "../models/carrito.model.js";
import Product from "../models/product.model.js";
import Compra from "../models/compras.model.js";
//METODO POST PARA AGREGAR UN PRODUCTO AL CARRITO
export const agregarProductoCarrito = async (req, res) => {
    //try catch para manejar errores
    try {
        //obtener el id del producto y la cantidad del body
        const { idproduct, quantity } = req.body;
        //obtener el id del usuario
        const user = req.user.id;
        //buscar el carrito del usuario
        const carrito = await Carrito.findOne({ user });
        //si el carrito existe
        if (carrito) {
            //buscar si el producto ya esta en el carrito
            const item = carrito.items.find((item) => item.idproduct == idproduct);
            const product = await Product.findById(idproduct);
            //si el producto ya esta en el carrito
            if (item) {
                //actualizar la quantity del producto
                item.quantity += quantity;
                console.log(quantity);
                console.log(product.price);
                //actualizar el total del carrito con el nuevo precio del producto buscando el precio del producto en la base de datos
                carrito.total += quantity * product.price;
                console.log(carrito.total);
                //guardar el carrito
                await carrito.save();
                //retornar el carrito
                res.status(200).json(carrito);
            } else {
                //si el producto no esta en el carrito
                //agregar el producto al carrito
                carrito.items.push({ idproduct, quantity });
                carrito.total += quantity * product.price;
                //guardar el carrito
                await carrito.save();
                //retornar el carrito
                res.status(200).json(carrito);
            }
        } else {
            res.status(400).json({ message: "Carrito no encontrado" });
        }
    } catch (error) {
        //retornar un error si hay un error
        res.status(500).json({ message: "Error adding product to carrito", error });
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

//metodo para vaciar el carrito de compras
export const vaciarCarrito = async (req, res) => {
    try {
        const { idUsuario } = req.params;
        const carrito = await Carrito.findOne({ idUsuario });
        if (carrito) {
            carrito.items = [];
            carrito.total = 0;
            await carrito.save();
            res.status(200).json({ message: "Carrito vaciado" });
        } else {
            res.status(400).json({ message: "Carrito no encontrado" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error deleting carrito", error });
    }
}
//metodo para obtener el carrito de compras de un usuario
export const obtenerCarrito = async (req, res) => {
    try {
        const carrito = await Carrito.findOne({user:req.user.id});
        if (carrito) {
            res.status(200).json(carrito);
        } else {
            res.status(400).json({ message: "Carrito no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error getting carrito", error });
    }
};

//funcion para pagar el carrito
export const pagarCarrito = async (req, res) => {
    try {
        const carrito = await Carrito.findOne({ user:req.user.id });
        if (carrito) {
            //agregar los items y el total del carrito a la coleccion de compras
            const compra = new Compra({ user: req.user.id, items: carrito.items, total: carrito.total });
            await compra.save();
            carrito.items = [];
            carrito.total = 0;
            await carrito.save();
            res.status(200).json({ message: "Carrito pagado", compra});
        } else {
            res.status(400).json({ message: "Carrito no encontrado" });
        }
    }
    catch (error) {
        res.status(500).json({ message: "Error paying carrito", error });
    }
}