import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./Components/Home/NavBar";
import { Login, Register } from "./Components/Reg-Login";
import Buy from "./Components/Buy/Buy";
import ScrollToTop from "./ScrollToTop";
import { Profile } from "./Components/Admin/Profile/Profile";
import { Support } from "./Components/Admin/Support/Support";
import { Analytic } from "./Components/Admin/Analytic/Analytic";
import { Booking } from "./Components/Admin/Booking/Booking";
function App() {
  return (
    <>
      <Router>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<NavBar />} />
            <Route path="Register" element={<Register />} />
            <Route path="Login" element={<Login />} />
            <Route path="Buy" element={<Buy />} />
            <Route path="admin/profile" element={<Profile />} />
            <Route path="admin/support" element={<Support/>}/>
            <Route path="admin/analytics" element={<Analytic/>}/>
            <Route path="admin/calendar" element={<Booking/>}/>
          </Routes>
        </ScrollToTop>
      </Router>
    </>
  );
}

export default App;
