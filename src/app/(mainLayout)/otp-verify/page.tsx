import { OtpVerifyForm } from "@/components/page/(auth)/otpVerify/otp-verify-form";

export default function OtpVerifyPage() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-2xl flex-col gap-6">
        <OtpVerifyForm />
      </div>
    </div>
  );
}
