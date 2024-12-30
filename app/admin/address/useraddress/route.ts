

import { NextResponse, NextRequest } from "next/server";
import { PrismaClient, Prisma } from '@prisma/client'
// import { db } from '@/lib/prisma'
import bodyParser  from 'body-parser'
import { useForm } from "react-hook-form";
import express from "express"
// import DATA from '../constants';

import userinfo from '@prisma/client';

import type { NextApiRequest, NextApiResponse } from 'next';
import { PassThrough } from "stream";
// import { NextRequest, NextResponse } from "@/node_modules/next/server";


const prisma = new PrismaClient() 


export async function POST(request: NextRequest, response: NextResponse) 
{
  try{
  var result
  var app = express()
  var street
  var city
  var state
  var Zip

      app.post('/admin/address/useraddress', bodyParser.json({ type: '*/*'}), async (req, res) => {
        // let userinfo: Prisma.UserCreateInput

        street = req.body.street
        city = req.body.city
        state = req.body.state
        Zip = req.body.Zip
        console.log(street, city, state, Zip)
        result = prisma.userinfo.create({
              data: {
                street_add : street,
                city: city,
                state: state,
                zip_code: Zip,
              }
            })
            // console.log(useremail, userpassword)
          })
        }catch(error) {
          console.log(error)}
        return NextResponse.json({message: 'POST'}, { status: 201 })
    }

// import { NextResponse, NextRequest } from "next/server";
// import { PrismaClient, Prisma } from '@prisma/client'
// import bodyParser  from 'body-parser'
// import express from "express"
// import nextConnect from 'next-connect';


// import type { NextApiRequest, NextApiResponse } from 'next';

// // const handler = nextConnect()
// const app = express()
// const prisma = new PrismaClient() 

// export async function POST(request: NextApiRequest, response: NextApiResponse) 
// {
//   // app.use(bodyParser.json())  // This will parse JSON bodies
//   app.post('/', bodyParser.json({ type: '*/*'}),  async (req, res) => {

//     try {
//       const { street, city, state, zip } = req.body;

//       if (!street || !city || !state || !zip ) {
//         return res.status(400).json({ message: 'Name and email are required' });
//       }

//       // Your database insertion logic here
//       const user = await prisma.user.create({
//         data: {
//           street,
//           city,
//           state,
//           zip,
//         },
//       });

//       return res.status(201).json(user);  // Return the created user object
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Server error' });
//     }
//   })
// }

// // export default handler;