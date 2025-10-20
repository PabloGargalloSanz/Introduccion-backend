import pool from '../db/db.js';

export const getAllPedidos = async () => {
    const result = await pool.query('SELECT * FROM pedidos');
    console.log(result.rows);
    return result.rows;
}

export const newPedidoService = async (data) => {
    const {id_cliente, descripcion, cantidad} = data;
    const result = await pool.query (
        'INSERT INTO pedidos (id_cliente, descripcion, cantidad) VALUES ($1, $2, $3) RETURNING *',
        [id_cliente, descripcion, cantidad]
    );
    return result.rows[0];
}

