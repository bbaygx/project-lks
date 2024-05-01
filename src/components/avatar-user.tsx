import { useNavigate } from "react-router-dom";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth } from "@/hooks/useAuth";
import { BACKEND_BASE_URL, LogOutUser } from "@/api/api";
import { Button } from "./ui/button";

export function AvatarUser() {
  const navigate = useNavigate();
  const { data, isSuccess } = useAuth();

  const handleLogout = async () => {
    try {
      const result = await LogOutUser();

      if (result?.statusCode === 200) {
        navigate("/auth/sign-in");
      }
    } catch (error) {}
  };

  if (isSuccess) {
    return (
      <div className="">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarFallback>UI</AvatarFallback>
              <AvatarImage
                src={`${BACKEND_BASE_URL}${data.data?.profilePic}`}
              />
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              <Button variant="ghost" onClick={handleLogout}>
                Log Out
              </Button>
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  }
}
