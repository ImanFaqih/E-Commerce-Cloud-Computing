import { useState } from "react";
import {
  IconArrowRight,
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
  IconMessage,
  IconShieldLock,
  IconUser,
} from "@tabler/icons-react";
import { adminApi } from "../lib/adminApi";

const LOGO_URL =
  "https://api.builder.io/api/v1/image/assets/TEMP/7cb8b07ac0038c77a7b1f2122470a95b6ade4355?width=522";

export default function Login({ onLogin }) {
  const [tab, setTab] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmitLogin = async (e) => {
    if (e) e.preventDefault();
    setLoading(true);
    setErrorMsg("");

    const targetEmail = email.trim() || "customer@ecommerce.com";
    const targetPassword = password || "Customer123!";

    const res = await adminApi.login(targetEmail, targetPassword);
    setLoading(false);

    if (res.success) {
      onLogin(res.user);
    } else {
      setErrorMsg("Email atau kata sandi tidak sesuai.");
    }
  };

  const handleQuickAdminLogin = async () => {
    setEmail("admin@ecommerce.com");
    setPassword("Admin123!");
    setLoading(true);
    const res = await adminApi.login("admin@ecommerce.com", "Admin123!");
    setLoading(false);
    if (res.success) {
      onLogin(res.user);
    }
  };

  const handleQuickCustomerLogin = async () => {
    setEmail("customer@ecommerce.com");
    setPassword("Customer123!");
    setLoading(true);
    const res = await adminApi.login("customer@ecommerce.com", "Customer123!");
    setLoading(false);
    if (res.success) {
      onLogin(res.user);
    }
  };

  return (
    <main className="flex min-h-screen w-full justify-center bg-[#008AC6] px-[20px] pb-12 pt-10 font-sans">
      <div className="flex w-full max-w-[340px] flex-col items-center">
        {/* Logo */}
        <img
          src={LOGO_URL}
          alt="TokoKu Logo"
          className="-mb-2 aspect-square w-[220px] max-w-full rounded-[25px]"
        />

        {/* Card */}
        <div className="flex w-full flex-col gap-3 rounded-2xl border border-[#E2E7FF]/60 bg-white p-5 shadow-lg">
          {/* Quick Demo Role Selector */}
          <div className="rounded-xl bg-[#F0F5FF] p-2 border border-[#C9E6FF]">
            <p className="text-[10px] font-extrabold uppercase tracking-wider text-[#006591] text-center mb-1.5">
              ⚡ Akses Cepat Demo &amp; Pengujian
            </p>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                type="button"
                onClick={handleQuickAdminLogin}
                className="flex items-center justify-center gap-1 rounded-lg bg-[#006591] py-1.5 px-2 text-[11px] font-bold text-white shadow-sm transition hover:bg-[#005175]"
              >
                <IconShieldLock size={13} />
                <span>Masuk Admin</span>
              </button>
              <button
                type="button"
                onClick={handleQuickCustomerLogin}
                className="flex items-center justify-center gap-1 rounded-lg bg-white py-1.5 px-2 text-[11px] font-bold text-[#006591] border border-[#006591]/30 shadow-sm transition hover:bg-slate-50"
              >
                <IconUser size={13} />
                <span>Pelanggan</span>
              </button>
            </div>
          </div>

          {/* Tab switcher */}
          <div className="flex rounded-xl bg-[#F2F3FF] p-1">
            {["login", "register"].map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setTab(t)}
                className={`flex-1 rounded-lg py-1.5 text-xs font-semibold transition-all ${
                  tab === t
                    ? "bg-white text-[#006591] shadow-sm"
                    : "text-[#6E7881]"
                }`}
              >
                {t === "login" ? "Masuk" : "Daftar"}
              </button>
            ))}
          </div>

          {errorMsg && (
            <div className="rounded-lg bg-rose-50 p-2 text-center text-xs font-semibold text-rose-600">
              {errorMsg}
            </div>
          )}

          {/* ── FORM LOGIN ── */}
          {tab === "login" && (
            <form onSubmit={handleSubmitLogin} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-email" className="text-xs font-bold leading-5 text-[#131B2E]">
                  Email Akun
                </label>
                <div className="relative">
                  <IconMail className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="login-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@ecommerce.com / email kamu"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] pl-11 pr-4 text-xs text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-password" className="text-xs font-bold leading-5 text-[#131B2E]">
                  Kata Sandi
                </label>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute left-[17px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Masukkan kata sandi"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] px-11 text-xs text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                  <button
                    type="button"
                    aria-label="Tampilkan kata sandi"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center text-[#3E4850]"
                  >
                    {showPassword
                      ? <IconEyeOff className="size-[18px]" />
                      : <IconEye   className="size-[18px]" />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between pt-0.5">
                <label className="flex items-center gap-2 text-xs leading-4 text-[#3E4850]">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="size-4 rounded-[2.5px] border border-[#767676] accent-[#0EA5E9]"
                  />
                  Ingat saya
                </label>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-semibold leading-4 text-[#0EA5E9]"
                >
                  Lupa Sandi?
                </a>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] text-[14px] font-bold text-white shadow-sm transition hover:bg-[#0284C7]"
                >
                  {loading ? "Memproses..." : "Masuk ke Aplikasi"}
                  <IconArrowRight className="size-3.5" stroke={2.5} />
                </button>
              </div>
            </form>
          )}

          {/* ── FORM REGISTER ── */}
          {tab === "register" && (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmitLogin(e);
              }}
              className="flex flex-col gap-3"
            >
              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-name" className="text-xs font-bold leading-5 text-[#131B2E]">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <IconUser className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="reg-name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Nama kamu"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] pl-11 pr-4 text-xs text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-email" className="text-xs font-bold leading-5 text-[#131B2E]">
                  Email
                </label>
                <div className="relative">
                  <IconMail className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="reg-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Contoh: nama@email.com"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] pl-11 pr-4 text-xs text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-password" className="text-xs font-bold leading-5 text-[#131B2E]">
                  Kata Sandi
                </label>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute left-[17px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Min. 6 karakter"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] px-11 text-xs text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                  <button
                    type="button"
                    aria-label="Tampilkan kata sandi"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3.5 top-1/2 flex size-7 -translate-y-1/2 items-center justify-center text-[#3E4850]"
                  >
                    {showPassword
                      ? <IconEyeOff className="size-[18px]" />
                      : <IconEye   className="size-[18px]" />}
                  </button>
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#006591] text-[14px] font-bold text-white shadow-sm"
                >
                  {loading ? "Mendaftarkan..." : "Daftar Akun Baru"}
                  <IconArrowRight className="size-3.5" stroke={2.5} />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social login */}
        <div className="relative flex w-full items-center justify-center py-4">
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#E2E7FF]/40" />
          <span className="relative bg-[#008AC6] px-3 text-xs leading-4 text-[#C4E5FF]">
            atau masuk dengan
          </span>
        </div>

        <div className="flex w-full gap-2">
          <button
            type="button"
            onClick={handleQuickCustomerLogin}
            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-[#E2E7FF]/60 bg-white text-xs font-semibold text-[#131B2E] shadow-sm hover:bg-slate-50"
          >
            Google
          </button>
          <button
            type="button"
            onClick={handleQuickCustomerLogin}
            className="flex h-10 flex-1 items-center justify-center gap-2 rounded-xl border border-[#E2E7FF]/60 bg-white text-xs font-semibold text-[#131B2E] shadow-sm hover:bg-slate-50"
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-[#00B351]">
              <IconMessage className="size-2.5 text-white" />
            </span>
            WhatsApp
          </button>
        </div>

        <p className="pt-3 text-center text-[10px] leading-4 text-white/80">
          TokoKu E-Commerce Cloud Computing • v1.0.0
        </p>
      </div>
    </main>
  );
}
