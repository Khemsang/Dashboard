import { Route, Routes } from "react-router-dom";
import {
  Analytics,
  Calendar,
  Chat,
  Contact,
  Dashboard,
  Inbox,
  Login,
  OrderList,
  ProfilePage,
  Settings,
  Sidebar,
  SignUp,
  Topbar,
} from "./Components";
import { UserProvider } from "./Page/ProfilePage/ProfileContext/ProfileContext";
import MainECommerce from "./Page/Main_eCommerce/MainECommerce ";


const App = () => {
  return (
    <UserProvider>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />

        <div className="flex flex-col flex-1 w-full">
          <Topbar />

          <main className="flex-1 overflow-y-auto p-4">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/orders" element={<OrderList />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/inbox" element={<Inbox />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/ecommerce" element={<MainECommerce />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<SignUp />} />
            </Routes>
          </main>
        </div>
      </div>
    </UserProvider>
  );
};

export default App;
