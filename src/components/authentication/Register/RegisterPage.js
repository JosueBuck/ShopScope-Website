import logo from '../../../assets/shopscopeLogo.png';
import RegisterFormComponent from './RegisterFormComponent';

import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="registerPage">
            <div className="wrapperRegister">

                <img className='logoImg' src={logo} alt="ShopeScope Logo" />

                <p className='loginText'>Register</p>
                <RegisterFormComponent />
                <div className='infoText'>
                    <p>
                        Already got an account? - then Login <Link to="/Login">here</Link>!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default RegisterPage
