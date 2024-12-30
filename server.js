import express from "express"
import bodyParser  from 'body-parser'
import { PrismaClient, Prisma } from '@prisma/client'


const prisma = new PrismaClient() 

const app = express();

app.use(bodyParser.json())
// Define a simple route
// app.post('/', (req, res) => {
//   res.send('Hello, World!');
// })

// Set the port
const PORT = 3002;

app.get('/', (req, res) => {
  res.send("Hello World From Get method")
})
// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

// app.post('/api/login', bodyParser.json({ type: '*/*'}), async (req, res) => {
//   useremail = req.body.email
//   userpassword = req.body.password
//   console.log(useremail, userpassword)
//        result = prisma.userinfo.create({
//         data: {
//           email : useremail,
//           pass: userpassword,
//         }
//       })
//       console.log(result)
//     // res.send("hello world")
//     })
