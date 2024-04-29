import { NavigationTop } from "@/components/navigation-top";
import { Outlet } from "react-router-dom";

export default function RootLayouts() {
  return (
    <div>
      <NavigationTop />
      <Outlet />
    </div>
  );
}
