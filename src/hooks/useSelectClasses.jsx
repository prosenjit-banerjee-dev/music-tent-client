import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import useSecureAxios from "./UseSecureAxios";
const useSelectClasses = () => {
  const [secureAxios] = useSecureAxios();
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("access-token");
  const { refetch, data: selectedClasses = [] } = useQuery({
    queryKey: ["selectedClasses", user?.email],
    queryFn: async () => {
      const response = await secureAxios(
        `https://music-tent-server.vercel.app/selectedclasses?email=${user?.email}`
      );
      return response.data;
    },
  });
  return [selectedClasses, refetch];
};

export default useSelectClasses;
