"use client";

import { MyUserContextProvider } from "@/hooks/useUser";

interface UserProvierProps {
  children: React.ReactNode;
};

const UserProvier: React.FC<UserProvierProps> = ({
  children
}) => {
  return (
    <MyUserContextProvider>
      {children}
    </MyUserContextProvider>
  )
};

export default UserProvier;