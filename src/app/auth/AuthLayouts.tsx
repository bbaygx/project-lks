import { getStatusAuth } from "@/api/api";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function AuthLayouts() {
  const navigate = useNavigate();
  useEffect(() => {
    async function getAuth() {
      try {
        const data = await getStatusAuth();
        // if (data?.statusCode === 200) return navigate("/");
        console.log(data);
      } catch (error) {}
    }
    getAuth();
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
}
