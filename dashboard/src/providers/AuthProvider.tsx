import { AuthContext } from "@/context/AuthContext";
import React from "react";

export default function AuthProvider({children} : {
    children: React.ReactNode
}) {
  return <AuthContext.Provider value={{}}> {children} </AuthContext.Provider>>
}
