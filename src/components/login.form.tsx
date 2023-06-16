import Image from 'next/image'
import loginImage from '../../public/img/login-image.png'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faLock, faUser } from '@fortawesome/free-solid-svg-icons'

export default function () {


    return <div className={styles.loginForm}>
        <div className={styles.container}>
            <label htmlFor='username' className={styles.inputBox}>
                <FontAwesomeIcon icon={faUser} width={18} height={18}/>
                <input placeholder='Username' type="text" id="username"/>


            </label>
            <label htmlFor='password' className={styles.inputBox}>
            <FontAwesomeIcon icon={faLock} width={18} height={18}/>

                <input placeholder='Password' type="password" id='password'/>
            </label>

            <div className={styles.containerTwo}>

                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me </label><Link href="/"><span> Forgot Password</span></Link>

            </div>
            <div className={styles.containerTree}>
                <button>Log in</button>
                <span>Or <Link href="/">register now!</Link></span>

            </div>
        </div>
        <div className={styles.container}>
            <Image src={loginImage} alt="loginImage" width={240} height={240} />
        </div>
    </div>
}