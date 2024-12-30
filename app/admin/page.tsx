// import NavBar from '@/app/components/navbar'

'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import NavBar from '@/app/components/navbar'
import axios from '@/node_modules/axios/index';

// import { useNavigate } from 'react-router-dom'

    const Admin = () => {
        const [AboutMe, setAboutMe] = useState('')
        const [BirthDate, setBirthDate] = useState('')
    // {

        const handleSubmit = async() =>
        {  
                // const fetchRequest = await fetch("/admin/aboutme", {
                //           method:"POST", 
                //           headers: {
                //           // 'Accept': 'application/json',
                //           'Access-Control-Allow-Origin': '*',
                //           'Content-Type': 'application/json'},
                //           // 'Content-Type':'multipart/form-data; boundary=---011000010111000001101001'
                //           // 'Content-Type': 'text/html; charset=UTF-8'
                //           // },
                //           // 'Content-Type': 'application/x-www-form-urlencoded'},
                //           // body: {data}
                //           // body: {formData}
                //           body: JSON.stringify({AboutMe, BirthDate})
                //       });
                //   // router.Refresh()
                //   const result = await fetchRequest.json();
                //   console.log(result)
                // return fetchRequest.json();
                // return fetchRequest
                axios({
                    method:"POST", 
                    // headers: {
                    // // 'Accept': 'application/json',
                    // 'Access-Control-Allow-Origin': '*',
                    // // 'Content-Type': 'application/json'},
                    // 'Content-Type':'multipart/form-data; boundary=---011000010111000001101001'},
                    // // 'Content-Type': 'text/html; charset=UTF-8'
                    // // },
                    // // 'Content-Type': 'application/x-www-form-urlencoded'},
                    // body: {data}
                    // body: {formData}
                    data: {AboutMe, BirthDate},
                    url: "http://localhost:3001/admin/aboutme/"
              }).then((res) => console.log(res))
                
            
        }
      
    return (
        <>
        <div className={'mainContainer'}>
            {/* <NavBar></NavBar> */}
            <div className={'titleContainer'}>
            <div>Admin Dashboard</div>
            </div>
            <br />
            {/* <div className={'inputContainer'}> */}
            <textarea
                value={AboutMe}
                placeholder="About-Me"
                onChange={(ev) => setAboutMe(ev.target.value)}
                className={'textarea-input'}
                // type="textarea"
            />
            {/* </div> */}
            <br />
            <div className={'inputContainer'}>
            <input
                type="date"
                value={BirthDate}
                placeholder="Date of Birth"
                onChange={(ev) => setBirthDate(ev.target.value)}
                className={'date-of-birth-input'}
            />
            </div>
            <br/>
            <div className= {'inputContainer'}>
            <Link href="/admin/address">
                <input className={'inputButton'} type="button" onClick={handleSubmit} value={'Next'} />
            </Link>
            </div>
            <br/>
        </div>
        </>
        )
    }
// }
export default Admin