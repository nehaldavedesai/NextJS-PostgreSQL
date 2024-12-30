// import getRawBody from 'raw-body';

// export async function getServerSideProps(context) {
//   if (context.req.method === 'POST') {
//     const body = await getRawBody(context.req);

//     // Handle body as required (for example, parse JSON)
//     const data = JSON.parse(body.toString());

//     return {
//       props: {
//         receivedData: data, // Send the parsed data as props to your page
//       },
//     };
//   }

//   return { props: {} };
// }


// export default function MyPage({ receivedData }) {
//   return JSON.stringify(receivedData)
// }
// middleware.js
// export async function POST(req) {
//     if (req.method === 'POST') {
//       req.body = await req.json(); // Parse JSON body
//     //   req.body = body;
//     }
  
//     return req; // Return the modified request
//   }
  
