import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
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
import { useLoading } from "./Page/LoadingContext/LoadingContext";


const App = () => {
  const location = useLocation();
  const { loading, setLoading } = useLoading();

 
  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 700); 
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  const isAuthPage = location.pathname.startsWith("/auth");

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-spin rounded-full h-25 w-25 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <UserProvider>
      {isAuthPage ? (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<SignUp />} />
          </Routes>
        </div>
      ) : (
        <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900 container">
          <div className="hidden md:block">
            <Sidebar />
          </div>

          <div className="flex flex-col flex-1 w-full">
            <Topbar />
            <main className="flex-1 overflow-y-auto p-4 sm:p-6 md:p-8">
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
              </Routes>
            </main>
          </div>
        </div>
      )}
    </UserProvider>
  );
};

export default App;
