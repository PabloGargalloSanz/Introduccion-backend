import pool from '../db/db.js';

const newLog = async (data) => {
    const {fecha_log, metodo, ip} = data;

    const result = await pool.query(
        'INSERT INTO logs (fecha_log, metodo, ip) VALUES ($1, $2, $3) RETURNING *'
    [fecha_log, metodo, ip]
    );
    return result.rows[0];
}

export default newLog;