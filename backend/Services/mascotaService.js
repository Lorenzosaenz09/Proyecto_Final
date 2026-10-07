import pkg from 'pg'
import dbconfig from '../db.js'

const {Pool} = pkg;
const pool = new Pool(dbconfig)

export async function insertMascota(nombre, especie, raza, sexo, nacimiento, tamaño, color, ubicacion, id_usuario) {
    return await pool.query(
        "insert into mascota(nombre, especie, raza, sexo, nacimiento, tamaño, color, ubicacion, id_usuario) values ($1,$2,$3,$4,$5,$6,$7,$8,$9) returning id_mascota",
        [nombre, especie, raza, sexo, nacimiento, tamaño, color, ubicacion, id_usuario]
    )
}