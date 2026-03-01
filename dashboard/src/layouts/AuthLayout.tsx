import Logo from "@/components/Logo";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <main>
      <Card className="w-full max-w-lg shadow-2xl bg-base-100 z-10 my-auto">
        <CardHeader className="flex flex-col items-center justify-center gap-2">
          <Logo className="w-32" />
          <CardTitle className="text-2xl font-bold">
            Library managment
          </CardTitle>
          <CardContent>
            <Outlet />
          </CardContent>
        </CardHeader>
      </Card>
    </main>
  );
}
