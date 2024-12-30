'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import NavBar from '@/app/components/navbar'

import axios from '@/node_modules/axios/index';

// import { useNavigate } from 'react-router-dom'

    const Address = () => {
        const [street, setStreet] = useState('')
        const [city, setCity] = useState('')
        const [state, setState] = useState('')
        const [Zip, setZipCode] = useState('')
    // {

        const handleSubmit = async() =>
        {  
                //       const fetchRequest = await fetch("/admin/address/useraddress", {
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
                //           body: JSON.stringify({street, city, state, Zip})
                //       });
                //   const result = await fetchRequest.json();
                //   console.log(result)

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
                    data: {street, city, state, Zip},
                    url: "http://localhost:3001/admin/address/useraddress"
              }).then((res) => console.log(res))
        }
      
    return (
        <>
        <div className={'mainContainer'}>
            {/* <NavBar></NavBar> */}
            <div className={'titleContainer'}>
            <div>Address Info</div>
            </div>
            <br />
            <div className={'inputContainer'}>
            <textarea
                value={street}
                placeholder="Street Address"
                onChange={(ev) => setStreet(ev.target.value)}
                className={'street-input'}
                // type="textarea"
            />
            </div>
            <br />
            <div className={'inputContainer'}>
            <input
                value={city}
                placeholder="City Name"
                onChange={(ev) => setCity(ev.target.value)}
                className={'city-input'}
            />
            </div>
            <br/>
            <div className={'inputContainer'}>
            <input
                value={state}
                placeholder="State Name"
                onChange={(ev) => setState(ev.target.value)}
                className={'state-input'}
            />
            </div>
            <br/>
            <div className={'inputContainer'}>
            <input
                value={Zip}
                placeholder="Zip Code"
                onChange={(ev) => setZipCode(ev.target.value)}
                className={'ZipCode-input'}
            />
            </div>
            <br/>

            <div className= {'inputContainer'}>
            <Link href="/">
                <input className={'inputButton'} type="button" onClick={handleSubmit} value={'Log-Out'} />
            </Link>
            </div>
            <br/>
        </div>
        </>
        )
    }
// }
export default Address