import pool from '../db/db.js';

export const getAllClientes = async () => {
    const result = await pool.query('SELECT * FROM clientes');
    console.log(result.rows);
    return result.rows;
}
