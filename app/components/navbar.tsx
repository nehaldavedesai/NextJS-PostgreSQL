import Link from 'next/link'
import '../styles/NavBar.modules.css'

export default function NavBar() {
    return (
        <>
        <div className= 'styles.NavBar'>
            <link href='/admin'> 
                <h1>Log In</h1>
            </link>
            <link href='/admin'> 
                <h1>About Me</h1>
            </link>
            <link href='/admin/address'>
                <h1>Address</h1>
            </link>
        </div>
        </>
    );
  }