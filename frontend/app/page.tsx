"use client"

import { useState } from "react";
import AuthForm from "@/componenets/auth/AuthForm";

export default function AuthPage() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white">
          Planner
        </h1>

        <p className="mt-3 text-lg text-slate-400">
          Plan your day. Stay organized. Get things done.
        </p>

        <button
          type="button"
          onClick={() => setIsAuthOpen(true)}
          className="mt-8 w-full max-w-sm rounded-md bg-blue-600 px-6 py-3 text-lg font-semibold text-white transition hover:bg-blue-500"
        >
          Login / Sign up
        </button>
      </div>

      {isAuthOpen && (
        <AuthForm onClose={() => setIsAuthOpen(false)} />
      )}
    </main>
  );
}