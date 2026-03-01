declare type roleT = "admin" | "user";

declare interface UserI{
    id: string;
    email: string;
    name: string;
    avatar?: string;
    role: roleT;
}

declare interface LoginCredentialI {
    email: string;
    password: string;
    rememberMe?: boolean;
}

declare interface AuthContextI{
    user: UserI;
    isAuthenticated: boolean;
    isAdmin: boolean;
    isLoading:boolean;
    error: string | null;
    login:(credential: LoginCredentialI)=> boolean;
    logout:()=> void;
}