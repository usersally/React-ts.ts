import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  return (
    <header className="h-16 border-b border-gray-300/90 backdrop-blur ">
      <div className="flex justify-between items-center px-6 h-full">
        <SidebarTrigger />

        <div className="flex items-center gap-4">
          {/* toggle theme*/}
          {/*notification dropdown*/}
          {/*profile dropdown*/}
          <ProfileDropdown />
        </div>
      </div>
    </header>
  );
}
