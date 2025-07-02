
import { AuthProvider } from "@/contexts/AuthContext";
import { cookies } from "next/headers";
import { Toaster } from "react-hot-toast";

const Providers = async ({ children }: { children: React.ReactNode }) => {
  const token = (await cookies()).get("token")?.value || null; // Read token from cookies
  const user = (await cookies()).get("user")?.value || null; // Read user from cookies

  return (
    <>
      <AuthProvider initialToken={token} initialUser={user}>
        {children}
      </AuthProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{ duration: 5000 }}
      />
    </>
  );
};

export default Providers;
