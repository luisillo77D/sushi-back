//importar la funcion Router de express
import {Router} from 'express';
//importar los metodos del controlador carrito.controller
import {agregarProductoCarrito,crearCarrito} from '../controllers/carrito.controller.js';
//importar el middleware de autenticacion
import { authRequired } from '../middleware/validateToken.js';

//crear una instancia de Router
const router = Router()
//definir la ruta para agregar un producto al carrito
router.post('/agregar/:idUsuario',authRequired,agregarProductoCarrito)
//definir la ruta para crear un carrito
router.post('/crear',authRequired,crearCarrito)
//exportar el router
export default router