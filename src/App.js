import LoginPage from "./components/authentication/Login/LoginPage";
import RegisterPage from './components/authentication/Register/RegisterPage';
import ForgotPasswordPage from "./components/authentication/ForgotPassword/ForgotPasswordPage";
import './css/style.css';
import RecipeWidgetComponent from "./components/recipe/RecipeWidgetComponent";

function App() {

  return (
    <div className="App">
      <ForgotPasswordPage />
    </div>
  );
}

export default App;
