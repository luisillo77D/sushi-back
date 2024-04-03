import Compra from '../models/compras.model';

//funcion para obtener todas las compras de un usuario
export const obtenerCompras = async (req, res) => {
    try {
        const compras = await Compra.find({ user: req.user.id });
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ message: "Error getting compras", error });
    }
};

//funcion para obtener todas las compras
export const obtenerTodasCompras = async (req, res) => {
    try {
        const compras = await Compra.find();
        res.status(200).json(compras);
    } catch (error) {
        res.status(500).json({ message: "Error getting compras", error });
    }
};

//funcion para obtener una compra por id
export const obtenerCompra = async (req, res) => {
    try {
        const compra = await Compra.findById(req.params.id);
        if (compra) {
            res.status(200).json(compra);
        } else {
            res.status(400).json({ message: "Compra no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error getting compra", error });
    }
};

