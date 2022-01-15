import logo from '../../assets/shopscopeLogo.png'
import LoginFormComponent from './LoginFormComponent'
import '../../css/style.css'

const LoginPage = () => {
    return (
        <div className='loginPage'>
            <div className='wrapperLogin'>

                {<img className='logoImg' src={logo} alt="ShopeScope Logo" />}

                <p className='loginText'>Login</p>
                <LoginFormComponent />
                <div>
                <p>
                    New here ? - then <a href="#">register</a>!
                </p>
            </div>
            </div>
        </div>
    )
}

export default LoginPage