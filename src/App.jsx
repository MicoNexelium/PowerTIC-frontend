import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import NotFound from './pages/NotFound';
import MainLayout from './layout/MainLayout';
import LoadCenter from './pages/loadCenter';
import Dashboard from './pages/dashboard';
import Downloads from './pages/downloads';
import Users from './pages/users';
import UserForm from './pages/users/components/UserForm';
import Locations from './pages/locations';
import Calendar from './pages/calendar';
import Substations from './pages/substations';
import FAQ from './pages/faq';
import UserManual from './pages/user-manual';
import AddMeter from './pages/add-meter';
import Footer from './components/ui/Footer';

//Test
import SidebarMenuTest from './pages/test/SidebarMenuTest';
import MUIComponentsTest from './pages/test/MUIComponentsTest';




function App() {
  return (
    <Routes>
      {/* Routes without Navbar and Sidebar */}
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      

      {/* Routes with Navbar (and Sidebar in the future) */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/downloads" element={<Downloads />} />
        <Route path="/load-center" element={<LoadCenter />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users-new" element={<UserForm />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/substations" element={<Substations />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/user-manual" element={<UserManual />} />
        <Route path="/add-meter" element={<AddMeter />} />

        <Route path="/mui-components-test" element={<MUIComponentsTest />} />
      </Route>

      {/* Test Routes */}
      <Route path="/sidebar-menu-test" element={<SidebarMenuTest />} />
      <Route path="/footer" element={<Footer />} />
    </Routes>
  );
}

export default App;