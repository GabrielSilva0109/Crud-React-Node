import { db } from "../db.js"

export const getUsers = ( _, res) =>{
    const q = "SELECT * from usuarios";

    db.query(q, (erro, data) => {
        if(erro) return res.json(erro)

        return res.status(200).json(data)
    })
}