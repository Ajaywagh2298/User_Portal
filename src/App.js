import './App.css';
import LoginComponents from "./Components/LoginComponents";
import {useRoutes} from "react-router-dom"
import RegisterComponents from "./Components/RegisterComponents";
import TableComponents from "./Components/TableComponents";
import AddMemberComponents from "./Components/AddMemberComponents";
import ErrorComponents from "./Components/ErrorComponents";
const App =() =>{
  return useRoutes([
    {
      path: "/",
      element: <LoginComponents/>,
    },
    {
      path: "/login",
      element: <LoginComponents/>,
    },
    {
      path: "/register",
      element: <RegisterComponents/>,
    },
    {
      path: "/table",
      element: <TableComponents/>
    },
    {
      path: "/addMember",
      element: <AddMemberComponents/>
    },
    {
      path :"/*",
      element: <ErrorComponents/>
    }
  ]);
}

export default App;
