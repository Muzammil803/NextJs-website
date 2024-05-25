import Webbanner from '@/Components/MainComponents/Webbanner'
import React from 'react'
import loginimg from "../../../public/Images/login.jpeg"

const Login = () => {
    return (
        <>
            <Webbanner tittle={"Login"} subtop={"Get In Touch"} image={loginimg} />
        </>
    )
}

export default Login