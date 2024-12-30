'use server'

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient, Prisma } from '@prisma/client'
// // import { db } from '@/lib/prisma'
import bodyParser  from 'body-parser'
import express from "express"
import connection from '../../lib/connection';

// import { NextApiRequest, NextApiResponse } from 'next'

// import formidable from 'formidable';

// This is required to disable Next.js's default body parser for this API route
// export const config = {
//   api: {
//     bodyParser: false, // Disable Next.js's body parser to use formidable
//   },
// };
// import userinfo from '@prisma/client';

// import type { NextApiRequest, NextApiResponse } from 'next';
import { PassThrough } from "stream";
// import { NextApiRequest, NextApiResponse } from "@/node_modules/next/types";

// const port = 3001

const prisma = new PrismaClient() 

const prismaClient = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],  // Enable query logging
});
// // const PORT = process.env.PORT || 3001;

//   // app.post('/', async (req, res) => {
//     // res.json({data:result})
//     // try{
//       // const createdUser = prisma.$queryRaw`INSERT INTO "userinfo" ("name", "password") VALUES (${name}, ${password}) RETURNING *`;
//       // console.log('Created User:', createdUser);\
// // const result = {}
// export async function POST ( request: Request, response: Response) 
// {
//   try{
//   var result
//   var app = express()
//   var useremail
//   var userpassword

  // const data = await request.body()
  // app.use(bodyParser.json({ type: '*/*'}))
    // if (request.method === "POST") 
      // app.use(bodyParser.json({ type: '*/*'}))

      // app.post('/', data.bodyParser.text({ type: '*/*'}), async (req, res) => {
      //   // app.post('/api/login', bodyParser.json(), async (req, res) => {
      // // let userinfo: Prisma.UserCreateInput
      //   // const data = await req.body()
      //   useremail = data.email
      //   userpassword = data.password
      //   // console.log(useremail, userpassword)
      //        result = prisma.userinfo.create({
      //         data: {
      //           email : useremail,
      //           pass: userpassword,
      //         }
      //       })
      //       console.log(result)
      //     // res.send("hello world")
      //     })
      //   }catch(error) {
      //     console.log(error)}
        // return NextResponse.json({message: 'POST'}, {data: useremail, userpassword}, {status: 201})
        // return NextResponse({data: {useremail, userpassword}},{ headers: 'application/json'}, {message: "POST message"})
        // return response.status(201).json({useremail, userpassword},{message: "POST method"})
        // return NextResponse.json({message: "POST method"},{data: {useremail, userpassword}}, { status: 201 })
      // }


        //   const result =await prisma.userinfo.create({
        //   data: {
        //     name : data.email,
        //     password: data.password,
        //   }
        // })
        // console.log(result)
        // return NextResponse.json({data: result}, { status: 201 })

        // })
        // return response.status(201).json(createdUser)
      // }
    // })

  // app.listen(PORT, () => {
  //   console.log(`Server is running on http://localhost:${PORT}`);
  // });
// }


    // const bodyParserData = request.bodyParser.text({type: '*/*'})
    //         const response = await request.bodyParser.json()
    //         const data:FormData = await request.formData()
    //         const data = request.json()
    //         JSON.parse(data)

    //         const bodyParserData = bodyParser.json()
    //         const data = request.body
    //         console.log(bodyParserData)
    //         const email = data.get('email')
    //         const password = data.get('password')
    //         // const data = (response)
    //         console.log({email, password})
    //         const responseJson = await response.json()
    //         JSON.stringify(body)
    //         console.log({responseJson})
    //         const result = await prisma.userinfo.create({
    //             data: {
    //               // data
    //               name: email,
    //               password: password,
    //             },
    //             // select: {
    //             //   name:true,
    //             //   password:true
    //             // }
    //           })
    //           // resp.json(result);
    //           return NextResponse.json({data: result})
    //         }
    //     }
    //   }

    // export async function POST ( request: NextRequest, response: NextResponse) 
    // {
    // var useremail
    // var userpassword
    // const app = express()
    // app.post('/api/login', bodyParser.json({ type: '*/*'}), async (req, res) => {
    //   useremail = req.body.email
    //   userpassword = req.body.password
    //   console.log(useremail, userpassword)
    //        const result = prismaClient.userinfo.create({
    //         data: {
    //           email : useremail,
    //           pass: userpassword,
    //         }
    //       })
    //       const firstUser = await prisma.user.findUnique({
    //         where: { id: 1 },
    //       });
    //       console.log(result)
    //       console.log(firstUser)
    //     // res.send("hello world")
    //     })
    //   return NextResponse.json({message: "POST method"} ,{ status: 201 })
    // }
    
// API route to handle user creation and fetching users
export async function POST(req, res) {
    var useremail
    var userpassword
    const app = express()

    app.post('/api/login', bodyParser.json({ type: '*/*'}), async (req, res) => {
  // if (req.method === 'POST') {
    // Insert a new user
    const { email, pass } = req.body();

    try {
      const result = await connection.query(
        'INSERT INTO userinfo (email, pass) VALUES ($1, $2)',
        [email, pass]
      );
      // const newUser = result.rows[0];
      // res.status(201).json(newUser);
    } catch (error) {
      console.error('Error inserting user:', error);
      // res.status(500).json({ error: 'Failed to insert user' });
    }
  })
  return NextResponse.json({message: "POST method"} ,{ status: 201 })

}

