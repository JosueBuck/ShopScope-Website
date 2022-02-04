import LoginPage from "./components/authentication/Login/LoginPage";
import RegisterPage from './components/authentication/Register/RegisterPage';
import ForgotPasswordPage from "./components/authentication/ForgotPassword/ForgotPasswordPage";
import './css/style.css';
import RecipeWidgetComponent from "./components/recipe/RecipeWidgetComponent";
import HomePage from "./components/general/HomePage";

function App() {

  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;
