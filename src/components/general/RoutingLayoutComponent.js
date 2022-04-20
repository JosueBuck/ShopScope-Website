import { Outlet } from "react-router-dom";
import NavigationComponent from "../navigation/NavigationComponent";

const RouterLayout = () => {
    return (
        <div>
            <NavigationComponent />
            <Outlet />
        </div>
    )
}

export default RouterLayout;