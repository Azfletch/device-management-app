import express from 'express'

import { getConnection } from './db'

const app = express()
const db = getConnection()
const port = parseInt(process.env.PORT || '3001')

app.get('/', async (req, res) => {
  const connection = getConnection()

  const imports = await connection.select('*').from('imports')

  res.send(JSON.stringify(imports))
})

app.post('/imports', async () => {
  // 1. Post to the server to create a new import

  // 2. Insert a row into the imports table (pending etc...)

  // 3. Return an ID back to the client

  // 4. Post request to /imports/:id/file

  // 5. Write the CSV file to temp file (/tmp/...)

  // 6. Bull to create background job to process import. 
  // 6a. Parse and validate CSV (validate each row using zod)
  // 6b. Insert each valid device row into devices table

  // 7. Mark import status as complete
})

db.migrate.latest().then(() => {
  return db.destroy()
}).then(async () => {
  await app.listen({ port })

  console.log(`🚀  Server ready at on port: ${port}`)
})