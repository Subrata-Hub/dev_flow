// import { NextResponse } from "next/server";



// export const POST = async (request: Request) => {
//     const {question} = await request.json();

//     try {
//         const responce = await fetch(`https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?`,{
//             method: 'POST',
//             headers: {
//                 "Content-Type": 'application/json',
//                 Authorization: `Bearer ${process.env.GEMINI_API_KEY}`
//             },

//             body: JSON.stringify({
//                 // model: 'gemini-1.5-flash',
//                 message: [
//                    {
//                      role: 'system',
//                     content: 'You are a Knowlegeable assistant that provides quality information'
//                    },
//                    {
//                     role: 'user',
//                     content: `Tell me ${question}`
//                    }
//                 ]
//             })
//         })

//         const responseData = await responce.json()
//         console.log(responseData)
//         const reply = responseData.text()

//         return NextResponse.json({reply})
//     } catch (error: any) {
//         return NextResponse.json({error: error.message})
//     }
// }