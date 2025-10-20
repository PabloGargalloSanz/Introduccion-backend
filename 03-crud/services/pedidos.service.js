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

export const updatePedidoService = async (id, data) => {
    const {descripcion, cantidad } = data;
    const result = await pool.query(
        'UPDATE pedidos Set descripcion = $1, cantidad = $2 WHERE id_cliente =$3 RETURNING *',
        [descripcion, cantidad, id]
    )
    if(result.rows.length === 0 ) {
        throw new Error('Id_cliente no encontrado');
    }
    return result.rows[0];
}