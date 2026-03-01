import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { loginShema } from "@/validations/auth";
import { useForm } from "@tanstack/react-form";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const form = useForm({
    defaultValues: { email: "", password: "", rememberMe: false },
    onSubmit: (value) => {
      console.log(value);
      navigate("/", { replace: true });
    },
  });
  type FormMeta = {
    submitAction: "continue" | "backToMenu" | null;
  };
  const defaultMeta: FormMeta = {
    submitAction: null,
  };

  return (
    <>
      <div className="text-center my-6">
        <h2 className="text-xl">Welcome back !</h2>
        <p className="text-gray-400">Sign in to continue</p>
      </div>

      {/*form*/}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          form.handleSubmit();
        }}
      >
        <form.Field
          name="email"
          validators={{
            onChange: loginShema.shape.email,
          }}
        >
          {(field) => (
            <div>
              <Label htmlFor="password">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                autoComplete="email"
              ></Input>
              {field.state.meta.errors.length > 0 &&
                field.state.meta.isTouched && (
                  <p className="text-sm text-destructive">
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        <form.Field
          name="password"
          validators={{ onChange: loginShema.shape.password }}
        >
          {(field) => (
            <div className="relative">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                value={field.state.value}
                onChange={(e) => field.handleChange(e.target.value)}
                onBlur={field.handleBlur}
                autoComplete="current-password"
              />
              <Button
                type="button"
                variant={"ghost"}
                size={"icon-sm"}
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-1/2 -translate-y-1/2 h-full px-2 hover:bg-transparent "
              >
                {showPassword ? (
                  <EyeOff className="h-4 w4" />
                ) : (
                  <Eye className="h-4 w4" />
                )}
              </Button>
              {field.state.meta.errors.length > 0 &&
                field.state.meta.isTouched && (
                  <p className="text-sm text-destructive">
                    {field.state.meta.errors[0]?.message}
                  </p>
                )}
            </div>
          )}
        </form.Field>

        <form.Field name="rememberMe">
          {(field) => (
            <div>
              <div>
                <Checkbox
                  id="rememberMe"
                  checked={field.state.value}
                  onCheckedChange={(checked: boolean) =>
                    field.handleChange(checked === true)
                  }
                ></Checkbox>
                <Label htmlFor="password">Password</Label>
              </div>
              <Link to={"/auth/forgot-password"}>Forgot password</Link>
            </div>
          )}
        </form.Field>

        <form.Subscribe
          selector={(state) => [state.submissionAttempts, state.isSubmitting]}
        >
          {([canSubmit, isSubmitting]) => (
            <Button
              type="submit"
              className="w-full"
              disabled={!canSubmit || isSubmitting}
            >
              Sign in
            </Button>
          )}
        </form.Subscribe>
      </form>
    </>
  );
}
