import { Link, useLocation } from "react-router";
import Logo from "./Logo";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import {
  BarChart3,
  Book,
  FileText,
  LayoutDashboard,
  Settings,
  ShoppingCart,
  Tags,
  UserCircle,
} from "lucide-react";
import Users from "@/pages/Users";

const mainNavItems = [
  { label: "Dashboard", href: "/", Icon: LayoutDashboard },
  { label: "Books", href: "/books", Icon: Book },
  { label: "Borrowing", href: "/borrowing", Icon: FileText },
  { label: "Orders", href: "/orders", Icon: ShoppingCart },
];

const managmentNavItems = [
  { label: "Categories", href: "/", Icon: Tags },
  { label: "Authors", href: "/books", Icon: UserCircle },
  { label: "Users", href: "/users", Icon: Users },
];

const otherNavItems = [
  { label: "Reports", href: "/reports", Icon: BarChart3 },
  { label: "Settings", href: "/settings", Icon: Settings },
];
export default function AppSidebar() {
  const location = useLocation();

  const isActive = (href: string) => {
    if (href === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(href);
  };
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <Logo />
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Main</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavItems.map((item) => (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive(item.href)}>
                    <Link to={item.href}>
                      <item.Icon className="w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Management</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {managmentNavItems.map((item) => (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive(item.href)}>
                    <Link to={item.href}>
                      <item.Icon className="w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Others</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {otherNavItems.map((item) => (
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive(item.href)}>
                    <Link to={item.href}>
                      <item.Icon className="w-4" />
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
