import { alumnos } from "../db/memory.js";

export const getAlumnosFromDb = () => {
    return alumnos;
}