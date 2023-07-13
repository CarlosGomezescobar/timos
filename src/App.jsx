//import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/globals.css";
import {MyRoutes} from "./routers/routes"
import Login from "./components/Login"
import Header from "./components/Header"

export default function Home() {


  return (
   <div className="App">
  <Header />
    <div className="connect">
       <Login />
    </div>
    
   <MyRoutes />
  
   </div>
  );
}
