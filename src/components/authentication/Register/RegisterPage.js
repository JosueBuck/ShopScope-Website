import logo from '../../../assets/shopscopeLogo.png';
import RegisterFormComponent from './RegisterFormComponent';

const RegisterPage = () => {
    return (
        <div className="registerPage">
            <div className="wrapperRegister">

                <img className='logoImg' src={logo} alt="ShopeScope Logo" />

                <p className='loginText'>Register</p>
                <RegisterFormComponent />
                <div className='infoText'>
                    <p>
                        Already got an account? - then Login <a href="#">here</a>!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
