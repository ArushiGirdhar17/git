const {Pool,Client}= require('pg')
const connectionString='postgressql://postgres:password@localhost:5432/postgres'



const client= new Client({
    connectionString:connectionString
})

client.connect()
const qr="Insert into Form Values('Name','mail',6712)";
client.query(qr,(err,res)=> {
    console.log(err,res)
    client.end()
})
