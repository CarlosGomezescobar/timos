import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "../pages/Home"
import {Feed} from "../pages/Feed"
import {Perfil} from "../pages/Perfil"
import { Online } from "../pages/Online";
import { Chat } from "../pages/Chat";
import { Notificaciones } from "../pages/Notificaciones";
import { Romies } from "../pages/Romies";




export function MyRoutes () {
    return (
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Feed" element={<Feed /> }/>
        
        <Route path="/Perfil" element={<Perfil />} />
        <Route path="/Romies" element={<Romies />} />
        <Route path="/Notificaciones" element={<Notificaciones />} />
        <Route path="/Chat" element={<Chat />} />
        <Route path="/Online" element={<Online />} />
        </Routes>
        </BrowserRouter>
    );
       
}


