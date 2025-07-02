import { ResetPasswordForm } from "@/components/page/(auth)/resetPassword/reset-password-form";

export default function ResetPasswordPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <ResetPasswordForm />
      </div>
    </div>
  );
}
