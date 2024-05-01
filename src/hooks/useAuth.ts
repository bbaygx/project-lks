import { getStatusAuth } from "@/api/api";
import { useQuery } from "@tanstack/react-query";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => getStatusAuth(),
  });
};
