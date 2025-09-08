"use client";
import { useState } from "react";
import axios from "axios";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Mars, Venus } from "lucide-react";

export default function RegisterForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/wp-json/store/v1/register`,
        {
          first_name: firstName,
          last_name: lastName,
          email,
          password,
          gender,
          dob,
        }
      );

      if (!res.data.success) {
        setError(res.data.error || "Registration failed");
        setLoading(false);
        return;
      }
      window.location.href = "/";
    } catch (err: any) {
      setError(err?.response?.data?.error || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#E6F0FA] w-full">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md border-0 px-8 py-4">
        <div className="flex flex-col items-center mb-8">
          <h2 className="mt-4 text-2xl font-bold text-black">
            Create your account
          </h2>
          <p className="text-black mt-2 text-sm">Sign up to get started</p>
        </div>

        <form onSubmit={handleSubmit} className="w-full">
          <InputField label="First Name" value={firstName} setValue={setFirstName} />
          <InputField label="Last Name" value={lastName} setValue={setLastName} />
          <InputField label="Email" value={email} setValue={setEmail} type="email" />
          <InputField label="Password" value={password} setValue={setPassword} type="password" />
          <div className="mb-4">
            <label className="block text-black font-medium mb-2">Gender</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setGender("Male")}
                className={`flex items-center px-4 py-2 border rounded cursor-pointer ${
                  gender === "Male" ? "bg-[#0058A3] text-white" : "bg-[#E6F0FA] text-black"
                }`}
              >
                <Mars className="mr-2" /> Male
              </button>
              <button
                type="button"
                onClick={() => setGender("Female")}
                className={`flex items-center px-4 py-2 border rounded cursor-pointer ${
                  gender === "Female" ? "bg-[#0058A3] text-white" : "bg-[#E6F0FA] text-black"
                }`}
              >
                <Venus className="mr-2" /> Female
              </button>
            </div>
          </div>
          <div className="mb-6">
            <label className="block text-black font-medium mb-2">Date of Birth</label>
            <Input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              required
              className="bg-[#E6F0FA] text-black border border-[#0058A3] focus:border-[#0058A3] focus:ring-0"
            />
          </div>

          {error && <p className="text-red-600 mb-4">{error}</p>}

          <Button
            type="submit"
            disabled={loading || !firstName || !email || !password || !gender || !dob}
            className="w-full bg-[#0058A3] text-white hover:bg-[#003B64] rounded-full py-2 font-semibold transition-all duration-200"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </Button>

          <div className="mt-6 text-center">
            Already have an account?{" "}
            <Link href="/login" className="text-black hover:text-[#0058A3] font-medium transition-colors">
              Sign In
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
function InputField({ label, value, setValue, type = "text" }: any) {
  return (
    <div className="mb-4">
      <label className="block text-black font-medium mb-2">{label}</label>
      <Input
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        className="bg-[#E6F0FA] text-black border border-green-100 focus:border-[## ] focus:ring-0"
      />
    </div>
  );
}
