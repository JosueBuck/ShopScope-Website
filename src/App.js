import LoginPage from "./components/authentication/Login/LoginPage";
import RegisterPage from "./components/authentication/Register/RegisterPage";
import ForgotPasswordPage from "./components/authentication/ForgotPassword/ForgotPasswordPage";
import "./css/style.css";
import RecipeWidgetComponent from "./components/recipe/RecipeWidgetComponent";
import HomePage from "./components/pages/HomePage";
import NavigationComponent from "./components/navigation/NavigationComponent";
import RecipeOverviewPage from "./components/recipe/RecipeOverviewPage";
import RecipePage from "./components/recipe/RecipePage";
import ListOverviewPage from "./components/list/ListOverviewPage";
import ListPage from "./components/list/ListPage";

import * as React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RouterLayout from "./components/general/RoutingLayoutComponent";
import RequireAuth from "./routing/RequireAuth";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Register" element={<RegisterPage />} />
          <Route element={<RequireAuth />}>
            <Route path="/" element={<RouterLayout />}>
              <Route path="/Home" element={<HomePage />} />
              <Route path="/Receipts" element={<RecipeOverviewPage />} />
              <Route path="/Lists" element={<ListOverviewPage />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
