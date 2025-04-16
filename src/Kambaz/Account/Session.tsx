import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // ⬅️ ADD useLocation
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";

export default function Session({ children }: { children: any }) {
  const [pending, setPending] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const fetchProfile = async () => {
    try {
      const currentUser = await client.profile();
      dispatch(setCurrentUser(currentUser));
    } catch (err: any) {
      const publicRoutes = ["/Kambaz/Account/Signin", "/Kambaz/Account/Signup"];
      if (!publicRoutes.includes(location.pathname)) {
        navigate("/Kambaz/Account/Signin"); 
      }
    } finally {
      setPending(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (pending) return null;

  return children;
}
