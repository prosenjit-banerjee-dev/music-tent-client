import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
const useUser = () => {
  const { user } = useContext(AuthContext);
  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/users?email=${user?.email}`
      );

      return res.json();
    },
  });
  return [users, refetch];
};

export default useUser;
