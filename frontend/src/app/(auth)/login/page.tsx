"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Bot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input, Label } from "@/components/ui/input";
import { GoogleSignIn } from "@/components/auth/google-sign-in";
import { authApi, setStoredTokens, setStoredUser } from "@/lib/api";

const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || "";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const finishLogin = async (
    loginFn: () => Promise<{ tokens: { access: string; refresh: string }; user: unknown }>
  ) => {
    setError("");
    setLoading(true);
    try {
      const { tokens, user } = await loginFn();
      setStoredTokens(tokens);
      setStoredUser(user as Parameters<typeof setStoredUser>[0]);
      
      const u = user as any;
      if (u && (!u.enrollment_number || !u.branch || !u.batch || !u.phone || !u.college)) {
        router.push("/register");
      } else {
        router.push("/dashboard");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    finishLogin(() => authApi.login(email, password));
  };

  const handleGoogle = (idToken: string) => {
    finishLogin(() => authApi.googleLogin(idToken));
  };

  return (
    <div className="min-h-screen flex w-full bg-background cyber-grid-bg relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="pointer-events-none absolute bottom-1/4 -right-32 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl" />

      {/* ── Left pane – branding ── */}
      <aside className="hidden lg:flex w-[46%] flex-col justify-between relative overflow-hidden p-10 border-r border-white/10">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
          style={{
            backgroundImage: "url('/robotimagelogin.jpg')",
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/60 to-primary/40 backdrop-blur-[2px]" />

        {/* Top logo */}
        <div className="relative z-10">
          <Link href="/portal" className="inline-flex items-center gap-3 group">
            <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary via-indigo-600 to-cyan-500 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-card rounded-[10px] flex items-center justify-center">
                <Bot className="h-6 w-6 text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-extrabold text-xl tracking-tight text-white block">HumorphicOS</span>
              <span className="text-[10px] font-mono text-cyan-300 tracking-wider">NEURAL ROBOTICS OS</span>
            </div>
          </Link>
        </div>

        {/* Middle telemetry card stub */}
        <div className="relative z-10 my-auto max-w-sm rounded-2xl border border-white/15 bg-black/40 backdrop-blur-xl p-5 shadow-2xl animate-float">
          <div className="flex items-center justify-between text-xs font-mono text-cyan-300 mb-3 pb-2 border-b border-white/10">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              SYSTEM NODE: ONLINE
            </span>
            <span className="text-white/60">v3.2</span>
          </div>
          <p className="text-sm font-semibold text-white">Autonomous Club Intelligence</p>
          <p className="text-xs text-white/70 mt-1 leading-relaxed">
            Real-time telemetry, hardware workbench scheduling, ROS2 pipelines, and AI copilot in a unified workspace.
          </p>
        </div>

        {/* Bottom tagline */}
        <div className="relative z-10 pb-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-2">
            Welcome back,<br />
            <span className="shimmer-text">Hardware Builder.</span>
          </h2>
          <p className="text-white/70 text-sm leading-relaxed max-w-sm">
            Access your lab workbench, review robot odometry, and sync with your engineering squad.
          </p>
          {/* decorative dots */}
          <div className="flex gap-2 mt-6 items-center">
            <span className="h-2 w-8 rounded-full bg-primary" />
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            <span className="h-2 w-2 rounded-full bg-white/30" />
            <span className="text-[11px] font-mono text-white/50 ml-2">ROBOTICS KERNEL ACTIVE</span>
          </div>
        </div>
      </aside>

      {/* ── Right pane – form ── */}
      <main className="flex-1 flex items-center justify-center px-6 sm:px-12 relative z-10">
        <div className="w-full max-w-md glass-panel p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/15">
          {/* Mobile-only logo */}
          <div className="flex lg:hidden items-center gap-3 mb-6">
            <div className="h-10 w-10 rounded-xl bg-primary flex items-center justify-center text-white">
              <Bot className="h-5 w-5" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight text-white">HumorphicOS</span>
              <span className="text-[10px] font-mono text-muted block">ROBOTICS OS</span>
            </div>
          </div>

          <h1 className="text-3xl font-extrabold text-white mb-1.5 tracking-tight">Sign In</h1>
          <p className="text-xs text-muted mb-6">
            Enter your club workspace credentials or{" "}
            <Link href="/register" className="text-cyan-400 font-semibold hover:underline">
              register new membership
            </Link>
          </p>

          {/* Quick Demo Credentials Pill */}
          <div className="mb-5 p-3 rounded-xl bg-primary/10 border border-primary/25 flex items-center justify-between text-xs">
            <div className="text-[11px] text-muted-foreground">
              <span className="font-semibold text-white">Demo President Account:</span>
              <div className="font-mono text-primary text-[10px]">president@humorphic.club</div>
            </div>
            <button
              type="button"
              onClick={() => {
                setEmail("president@humorphic.club");
                setPassword("Demo@12345");
              }}
              className="text-[11px] font-semibold text-cyan-400 bg-cyan-400/10 hover:bg-cyan-400/20 px-2.5 py-1 rounded-lg border border-cyan-400/30 transition-colors"
            >
              Fill Demo
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="rounded-xl bg-destructive/15 border border-destructive/30 px-4 py-2.5 text-xs text-red-400 font-medium">
                {error}
              </div>
            )}

            <div className="space-y-1">
              <Label htmlFor="email" className="text-xs font-semibold text-white/90">Club Email Address</Label>
              <Input
                id="email"
                type="email"
                placeholder="president@humorphic.club"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-black/40 border-white/10 text-white placeholder:text-muted/60 focus:border-primary text-sm h-11 rounded-xl"
              />
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between">
                <Label htmlFor="password" className="text-xs font-semibold text-white/90">Password</Label>
                <span className="text-[11px] text-muted font-mono">Demo@12345</span>
              </div>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="bg-black/40 border-white/10 text-white placeholder:text-muted/60 focus:border-primary text-sm h-11 rounded-xl"
              />
            </div>

            <Button type="submit" className="w-full h-11 text-sm font-bold rolling-shine-btn bg-gradient-to-r from-primary to-indigo-600 hover:from-primary-hover hover:to-indigo-500 shadow-lg shadow-primary/25 rounded-xl" disabled={loading}>
              {loading ? "Authenticating Neural Core…" : "Authenticate & Launch"}
            </Button>

            <div className="relative py-1">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/10" />
              </div>
              <div className="relative flex justify-center text-[11px]">
                <span className="bg-card px-3 text-muted">Or continue with</span>
              </div>
            </div>

            {GOOGLE_CLIENT_ID ? (
              <div className="flex items-center justify-center overflow-hidden h-11">
                <GoogleSignIn
                  clientId={GOOGLE_CLIENT_ID}
                  onSuccess={handleGoogle}
                  onError={() => setError("Google sign-in failed")}
                />
              </div>
            ) : (
              <Button
                type="button"
                variant="outline"
                className="w-full h-10 text-xs border-white/10 hover:border-white/20 text-muted hover:text-white rounded-xl"
                onClick={() =>
                  alert("Google Sign-In is optional. Use demo login or set NEXT_PUBLIC_GOOGLE_CLIENT_ID.")
                }
              >
                Google SSO (Optional)
              </Button>
            )}

            <div className="text-center pt-2">
              <Link href="/portal" className="text-xs text-muted hover:text-cyan-400 transition-colors">
                ← Return to Public Portal
              </Link>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
}
