import { BrowserRouter,Routes,Route } from "react-router"
import Body from "./Components/Body"
import Profile from "./Components/Profile"
import Setting from "./Components/Setting"
import Login from "./Components/Login"
import Home from "./Components/Home"
import UserProfile from "./Components/UserProfile"
function App() {

  return (
      <>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Body/>}>
        <Route path="/home" element={<Home/>}/>
        <Route path="/home/:userid" element={<UserProfile/>}/>
        <Route path="/home/profile" element={<Profile/>}/>
        <Route path="/home/setting" element={<Setting/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
