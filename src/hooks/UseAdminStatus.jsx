import { useContext } from "react";
import useSecureAxios from "./UseSecureAxios";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseAdminStatus = () => {
  const { user } = useContext(AuthContext);
  const [secureAxios] = useSecureAxios();
  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    queryFn: async () => {
      const response = await secureAxios.get(`/users/admin/${user?.email}`);
      return response.data.admin;
    },
  });
  return [isAdmin, adminLoading];
};
export default UseAdminStatus;
