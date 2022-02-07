
const User1 = 'ETANABIOTECH\\khairul.nasution'
const Password1 = ''
const Server1 ='10.131.69.88'

const User2 = 'huda'
const Password2 = '141297kaelaNN'
const Server2 ='127.0.0.1'

////// User1
// const config = {
//     "server": Server1,
//     "domain": 'EBISVR04',
//     "authentication": {
//         "type": "default",
//         "options": {
//             "userName": User1,
//             "password": Password1
//         }
//     },
//     "options": {
//         "port": 1433,
//         // "database": "DataDiri",
//         // "encrypt": true,
//         // "trustServerCertificate": true
//     }
// }

////// User2
const config = {
    "server": Server2,
    "authentication": {
        "type": "default",
        "options": {
            "userName": User2,
            "password": Password2
        }
    },
    "options": {
        "port": 1433,
        // "database": "DataDiri",
        "encrypt": true,
        "trustServerCertificate": true
    }
}

// const config = {
//     user: User2,
//     password: Password2,
//     server: 'localhost',
//     database: 'DataDiri',
//     options: {
//         trustedconnection: true,
//         enableArithAbort: true,
//         // instancename: 'SQLEXPRESS'
//     },
//     port: 1433
// }


module.exports = config