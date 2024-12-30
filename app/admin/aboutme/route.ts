'use server'

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

// const PORT = process.env.PORT || 3001;

  // app.post('/', async (req, res) => {
    // res.json({data:result})
    // try{
      // const createdUser = prisma.$queryRaw`INSERT INTO "userinfo" ("name", "password") VALUES (${name}, ${password}) RETURNING *`;
      // console.log('Created User:', createdUser);\
// const result = {}
export async function POST(request: NextRequest, response: NextResponse) 
{
  try{
  var result
  var app = express()
  var aboutme
  var dob
  // app.use(bodyParser.json({ type: '*/*'}))
    // if (request.method === "POST") 
      // app.use(bodyParser.json({ type: '*/*'}))

      app.post('/admin/aboutme', bodyParser.json({ type: '*/*'}), async (req, res) => {
        // let userinfo: Prisma.UserCreateInput

        aboutme = req.body.aboutme
        dob = req.body.dob
        console.log(aboutme, dob)
             result = prisma.userinfo.create({
              data: {
                about_me : aboutme,
                dob: dob,
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

// const handler = nextConnect()

// const prisma = new PrismaClient() 

// export async function POST(request: NextApiRequest, response: NextApiResponse) 
// {
//   handler.use(bodyParser.json())  // This will parse JSON bodies
//   handler.post(async (req, res) => {
//     try {
//       const { address, dob } = req.body;

//       if (!address || !dob) {
//         return res.status(400).json({ message: 'Name and email are required' });
//       }

//       // Your database insertion logic here
//       const user = await prisma.user.create({
//         data: {
//             address,
//             dob,
//         },
//       });

//       return res.status(201).json(user);  // Return the created user object
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: 'Server error' });
//     }
//   });

// // export default handler;