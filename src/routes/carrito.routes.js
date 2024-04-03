//importar la funcion Router de express
import {Router} from 'express';
//importar los metodos del controlador carrito.controller
import {agregarProductoCarrito,crearCarrito,vaciarCarrito,obtenerCarrito, pagarCarrito} from '../controllers/carrito.controller.js';
//importar el middleware de autenticacion
import { authRequired } from '../middleware/validateToken.js';

//crear una instancia de Router
const router = Router()
//definir la ruta para agregar un producto al carrito
router.post('/agregar',authRequired,agregarProductoCarrito)
//definir la ruta para crear un carrito
router.post('/crear',authRequired,crearCarrito)
router.post('/vaciar',authRequired,vaciarCarrito)
router.get('/carrito',authRequired,obtenerCarrito)
router.post('/pay',authRequired,pagarCarrito)
//exportar el router
export default router