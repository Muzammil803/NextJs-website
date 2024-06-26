import Webbanner from '@/Components/MainComponents/Webbanner'
import React from 'react'
import loginimg from "../../../public/Images/login2.png"
import CredentailForm from '@/Components/Forms/credentialForm'

const Login = () => {
    return (
        <>
            <Webbanner tittle={"Sign up"} subtop={"Create your account"} image={loginimg} />
            <div className='max-w-screen-2xl mx-auto w-full h-full flex justify-center items-center  my-20'>
                <CredentailForm title={"signup"} />
            </div>
        </>
    )
}

export default Login