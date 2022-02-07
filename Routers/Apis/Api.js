const express = require('express')
const router = express.Router()

// router.get('/', async (req, res) => {
//     try {
//         return res.status(200).json({ msg: 'sukses' })
//     } catch (err) {
//         console.log(err)
//         return err
//     }
// })


// const sql = require('mssql')
// const dbconfig = require('../../Config/Db')

// router.get('/', async (req, res) => {
//     try {
//         let pool = await sql.connect(dbconfig)
//         let Responses = await pool.request().query(`
//         use coba;
//         SELECT * FROM DataDiri;
//         `)
//         // console.log(Responses.recordset)
//         return res.status(200)
//             .json({
//                 data: Responses.recordset
//             })

//     } catch (err) {
//         console.log(err)
//         return err
//     }
// })




const sql = require('mssql/msnodesqlv8')

router.get('/', async (req, res) => {
    try {
        const sqlconfig = {
            database: "RCA",
            server: "EBISVR04",
            driver: "msnodesqlv8",
            options: {
                trustedConnection: true
            }
        }
        // const conn = new sql.ConnectionPool(sqlconfig);


        let pool = await sql.connect(sqlconfig)
        const Responses = await pool.request().query(`
        use RCA;
        SELECT * FROM DataDiri;
        `)
        // console.log(Responses.recordset)
        return res.status(200)
            .json({
                data: Responses.recordset
            })

    } catch (err) {
        console.log(err)
        return err
    }
})

module.exports = router