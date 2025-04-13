import { Routes, Route, Navigate } from "react-router";
import { useSelector } from "react-redux";

import Profile from "./Profile";
import Signup from "./Signup";
import Signin from "./Signin";
import AccountNavigation from "./Navigation";
import Users from "./Users";

export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div id="wd-account-screen">
      <h2 className="mb-3">Account</h2>

      <div className="d-flex gap-4">
        {/* Sidebar */}
        <div className="d-none d-md-block">
          <AccountNavigation />
        </div>

        {/* Main View */}
        <div className="flex-fill">
          <Routes>
            <Route
              path="/"
              element={
                currentUser
                  ? <Navigate to="Profile" />
                  : <Navigate to="Signin" />
              }
            />
            <Route path="Signin" element={<Signin />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Profile" element={<Profile />} />
            <Route path="Users" element={<Users />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}
