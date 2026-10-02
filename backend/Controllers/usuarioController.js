
import { insertUsuario } from '../Services/usuarioService.js';
import bcrypt from 'bcrypt';

export async function crearUsuario(req, res) {

    const user = req.body;

    if(!user.nombre || !user.apellido || !user.mail || !user.telefono || !user.password)
        return res.status(400).json({message:"Debes completar todos los campos"})

    const hashedPwd = await bcrypt.hash(user.password,10);

    try {
        const result = await insertUsuario(
            user.nombre,
            user.apellido,
            user.mail,
            user.telefono,
            hashedPwd
        )

        console.log("result.rows", result.rows)

        res.status(201).json({
            message:"Usuario creado!",
            id: result.rows[0].id_usuario
        })
    }
    catch (err) {
        console.log("Error:", err)
        return res.status(500).json({message: err.message})
    }
}
