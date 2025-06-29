import Link from "next/link";
import { Metadata } from "next";
import { SignUpForm } from "@/components/shared/features/auth/sign-up-form";

export const metadata: Metadata = {
  title: "Sign up | SoundZone",
  description: "Sign up new account",
};

export default function RegisterPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <Link href="/" className="absolute left-4 top-4 md:left-8 md:top-8">
        <span className="sr-only">Home page</span>
        <h1 className="text-xl font-bold">SoundZone</h1>
      </Link>
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <SignUpForm />
      </div>
    </div>
  );
}
