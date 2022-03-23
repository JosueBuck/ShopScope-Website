import LoginPage from "./components/authentication/Login/LoginPage";
import RegisterPage from './components/authentication/Register/RegisterPage';
import ForgotPasswordPage from "./components/authentication/ForgotPassword/ForgotPasswordPage";
import './css/style.css';
import RecipeWidgetComponent from "./components/recipe/RecipeWidgetComponent";
import HomePage from "./components/general/HomePage";
import NavigationComponent from "./components/navigation/NavigationComponent";
import RecipeOverviewPage from "./components/recipe/RecipeOverviewPage";
import RecipePage from "./components/recipe/RecipePage";
import ListOverviewPage from "./components/list/ListOverviewPage";

function App() {

  return (
    <div className="App">
      <NavigationComponent />
      <ListOverviewPage />
    </div>
  );
}

export default App;
