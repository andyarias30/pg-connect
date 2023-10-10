// import tools from pg library
// import { Client } from 'pg' ERROR
import pg from 'pg'
const { Client } = pg

// import connnection string from credentials / secrets file
import { connectionURI } from './creds.js'


// create client connection whit data base  
const client = new Client({
    connectionString: connectionURI,
}) 

// open connection
await client.connect()

// run query
const time = await client.query('SELECT * FROM customers')
console.table(results.row)
// close connection 
client.end()