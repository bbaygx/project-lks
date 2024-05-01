import { getStatusAuth } from "@/api/api";
import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export default function RootLayouts() {
  const navigate = useNavigate();

  useEffect(() => {
    async function getAuth() {
      try {
        const data = await getStatusAuth();

        if (data?.statusCode !== 200) navigate("/auth/sign-in");
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
