"use client";

import { useState } from "react";

type AuthFormProps = {
  onClose: () => void;
};

export default function AuthForm({ onClose }: AuthFormProps) {
  const [isLogin, setIsLogin] = useState(true);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isLogin) {
      console.log({
        email,
        password,
      });

      return;
    }

    if (password !== confirmPassword) {
      console.log("Passwords do not match");
      return;
    }

    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  };

  const switchMode = () => {
    setIsLogin((previous) => !previous);

    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-6 backdrop-blur-sm">
      <div className="w-full max-w-md overflow-hidden rounded-2xl border border-slate-700 bg-slate-800 shadow-2xl">
        {/* Header */}
        <div className="relative border-b border-slate-700 px-6 py-6">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="absolute right-5 top-5 text-2xl leading-none text-slate-400 transition hover:text-white"
          >
            ×
          </button>

          <h1 className="text-2xl font-bold text-slate-100">
            {isLogin ? "Welcome back" : "Create your account"}
          </h1>

          <p className="mt-2 text-base text-slate-400">
            {isLogin
              ? "Login to continue"
              : "Create an account to get started"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5 px-6 py-6">
          {/* First + Last Name */}
          {!isLogin && (
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label
                  htmlFor="firstName"
                  className="mb-2 block text-base text-slate-300"
                >
                  First name
                </label>

                <input
                  id="firstName"
                  type="text"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  placeholder="John"
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div>
                <label
                  htmlFor="lastName"
                  className="mb-2 block text-base text-slate-300"
                >
                  Last name
                </label>

                <input
                  id="lastName"
                  type="text"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  placeholder="Doe"
                  required
                  className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          )}

          {/* Email / Username - Login */}
          {isLogin && (
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-base text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Email - Register */}
          {!isLogin && (
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-base text-slate-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="you@example.com"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-base text-slate-300"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="••••••••"
              required
              className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Confirm Password */}
          {!isLogin && (
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-base text-slate-300"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(event) => setConfirmPassword(event.target.value)}
                placeholder="••••••••"
                required
                className="w-full rounded-lg border border-slate-600 bg-slate-700 px-3 py-3 text-base text-white outline-none placeholder:text-slate-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-3 text-lg font-semibold text-white transition hover:bg-blue-500"
          >
            {isLogin ? "Login" : "Create account"}
          </button>
        </form>

        {/* Switch */}
        <div className="pb-7 text-center text-base text-slate-400">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}

          <button
            type="button"
            onClick={switchMode}
            className="ml-1 text-blue-500 transition hover:text-blue-400 hover:underline"
          >
            {isLogin ? "Sign up" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
}