import AppSidebar from "@/components/AppSidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider, SidebarRail } from "@/components/ui/sidebar";
import React from "react";
import { Outlet } from "react-router";

export default function AppLayout() {
  return (
    <SidebarProvider className="flex h-screen">
      <AppSidebar />
      <div className="flex-1 flex-col overflow-hidden">
        <Navbar />
        <main className="flex overflow-x-hidden overflow-y-auto">
          <Outlet />
        </main>
      </div>
      <SidebarRail />
    </SidebarProvider>
  );
}
