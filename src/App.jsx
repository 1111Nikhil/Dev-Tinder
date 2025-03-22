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
        <Route path="/" element={<Body/>}>
        <Route path="/profile" element={<Profile/>}/>
        <Route path="/setting" element={<Setting/>}/>
        <Route path="/login" element={<Login/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
      </>
  )
}

export default App
