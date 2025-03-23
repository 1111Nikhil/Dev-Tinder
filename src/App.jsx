import { BrowserRouter,Routes,Route } from "react-router"
import Body from "./Body"
import Profile from "./Profile"
import Setting from "./Setting"
import Login from "./Login"

function App() {

  return (
      <>
      <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Body/>} >
        <Route path="/home/profile" element={<Profile/>}/>
        <Route path="/home/setting" element={<Setting/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
