"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/store/v1/login`,
        { login, password }
      );

      if (!res.data.success) {
        setError(res.data.error || "Login failed");
        setLoading(false);
        return;
      }
      window.location.href = "/";
    } catch (err: any) {
      setError(err?.response?.data?.error || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F3FFF2] w-full">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md border-0 px-8 py-10">
        <div className="flex flex-col items-center mb-8">
          <Image src="/logo.svg" alt="FreshMart Logo" width={48} height={48} />
          <h2 className="mt-4 text-2xl font-bold text-black">
            Welcome to FreshMart
          </h2>
          <p className="text-black mt-2 text-sm">Sign in to your account</p>
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">
              Username or Email
            </label>
            <Input
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              required
              className="bg-[#F3FFF2] text-black border border-green-100 focus:border-[#43B581] focus:ring-0"
            />
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="bg-[#F3FFF2] text-black border border-green-100 focus:border-[#43B581] focus:ring-0"
            />
          </div>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <Button
            type="submit"
            disabled={loading || !login || !password}
            className="w-full bg-[#43B581] text-white hover:bg-[#36996B] rounded-full py-2 font-semibold transition-all duration-200"
          >
            {loading ? "Signing in..." : "Sign In"}
          </Button>
          <div className="mt-6 text-center">
            <Link
              href="/lost-pass"
              className="text-black hover:text-[#43B581] font-medium transition-colors"
            >
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
