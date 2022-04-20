import logo from '../../../assets/shopscopeLogo.png';
import LoginFormComponent from './LoginFormComponent';

import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className='loginPage'>
            <div className='wrapperLogin'>

                <img className='logoImg' src={logo} alt="ShopeScope Logo" />

                <p className='loginText'>Login</p>
                <LoginFormComponent />
                <div className='infoText'>
                    <p>
                        New here ? - then <Link to="/Register">Register</Link>!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default LoginPage
