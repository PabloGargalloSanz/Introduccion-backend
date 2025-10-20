import pool from '../db/db.js';

export const getAllPedidos = async () => {
    const result = await pool.query('SELECT * FROM pedidos');
    console.log(result.rows);
    return result.rows;
}

