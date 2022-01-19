import ForgotPasswordFormComponent from "./ForgotPasswordFormComponent"

const ForgotPasswordPage = () => {
    return (
        <div className='forgotPasswordPage'>
            <div className='wrapperForgotPassword'>

                <p className='loginText'>Forgot password</p>
                <ForgotPasswordFormComponent />

                <div className='infoText'>
                    <p>
                        If you cant access you emails, 
                        <br></br>
                        please contact our support team:
                        <br></br>
                        -
                        <br></br>
                        support@shopscope.com
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForgotPasswordPage
