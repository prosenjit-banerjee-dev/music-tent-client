import { useContext } from "react";
import useSecureAxios from "./UseSecureAxios";
import { AuthContext } from "../providers/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const UseInstructorStatus = () => {
  const { user } = useContext(AuthContext);
  const [secureAxios] = useSecureAxios();
  const { data: isInstructor, isLoading: instructorLoading } = useQuery({
    queryKey: ["isInstructor", user?.email],
    queryFn: async () => {
      const response = await secureAxios.get(
        `/users/instructor/${user?.email}`
      );
      return response.data.instructor;
    },
  });
  return [isInstructor, instructorLoading];
};
export default UseInstructorStatus;
