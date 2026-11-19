import { useState } from "react";
import {
  IconArrowRight,
  IconEye,
  IconEyeOff,
  IconLock,
  IconMail,
  IconMessage,
  IconUser,
} from "@tabler/icons-react";

const LOGO_URL =
  "https://api.builder.io/api/v1/image/assets/TEMP/7cb8b07ac0038c77a7b1f2122470a95b6ade4355?width=522";

export default function Login({ onLogin }) {
  const [tab, setTab]           = useState("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="flex min-h-screen w-full justify-center bg-[#008AC6] px-[35px] pb-12 pt-10 font-sans">
      <div className="flex w-full max-w-[320px] flex-col items-center">

        {/* Logo */}
        <img
          src={LOGO_URL}
          alt=""
          className="-mb-2 aspect-square w-[261px] max-w-full rounded-[25px]"
        />

        {/* Card */}
        <div className="flex w-full flex-col gap-3 rounded-2xl border border-[#E2E7FF]/60 bg-white p-5 shadow-sm">

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

          {/* ── FORM LOGIN ── */}
          {tab === "login" && (
            <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-email" className="text-sm font-medium leading-5 text-[#131B2E]">
                  Email
                </label>
                <div className="relative">
                  <IconMail className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="login-email"
                    type="email"
                    placeholder="Contoh: nama@email.com"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] pl-11 pr-4 text-sm text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="login-password" className="text-sm font-medium leading-5 text-[#131B2E]">
                  Kata Sandi
                </label>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute left-[17px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="login-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Masukkan kata sandi Anda"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] px-11 text-sm text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
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
                    className="size-4 rounded-[2.5px] border border-[#767676] accent-[#0EA5E9]"
                  />
                  Ingat saya
                </label>
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  className="text-xs font-semibold leading-4 text-[#0EA5E9]"
                >
                  Lupa Kata Sandi?
                </a>
              </div>

              <div className="pt-1">
                <button
                  type="submit"
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#0EA5E9] text-[15px] font-semibold text-white shadow-sm"
                >
                  Masuk <IconArrowRight className="size-3" stroke={2.5} />
                </button>
              </div>
            </form>
          )}

          {/* ── FORM REGISTER ── */}
          {tab === "register" && (
            <form onSubmit={(e) => { e.preventDefault(); onLogin(); }} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-name" className="text-sm font-medium leading-5 text-[#131B2E]">
                  Nama Lengkap
                </label>
                <div className="relative">
                  <IconUser className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="reg-name"
                    type="text"
                    placeholder="Nama kamu"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] pl-11 pr-4 text-sm text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-email" className="text-sm font-medium leading-5 text-[#131B2E]">
                  Email
                </label>
                <div className="relative">
                  <IconMail className="pointer-events-none absolute left-[18px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="reg-email"
                    type="email"
                    placeholder="Contoh: nama@email.com"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] pl-11 pr-4 text-sm text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="reg-password" className="text-sm font-medium leading-5 text-[#131B2E]">
                  Kata Sandi
                </label>
                <div className="relative">
                  <IconLock className="pointer-events-none absolute left-[17px] top-1/2 size-[18px] -translate-y-1/2 text-[#3E4850]" />
                  <input
                    id="reg-password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Min. 6 karakter"
                    className="h-11 w-full rounded-xl bg-[#F2F3FF] px-11 text-sm text-[#131B2E] outline-none placeholder:text-[#006591]/50 focus:ring-2 focus:ring-[#0EA5E9]"
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
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#006591] text-[15px] font-semibold text-white shadow-sm"
                >
                  Buat Akun <IconArrowRight className="size-3" stroke={2.5} />
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social login */}
        <div className="relative flex w-full items-center justify-center py-5">
          <div className="absolute inset-x-0 top-1/2 h-px bg-[#E2E7FF]" />
          <span className="relative bg-[#008AC6] px-3 text-xs leading-4 text-[#C4E5FF]">
            atau masuk dengan
          </span>
        </div>

        <div className="flex w-full gap-2">
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-[#E2E7FF]/60 bg-white text-xs font-medium text-[#131B2E] shadow-sm"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M15.04 8.167c0-.52-.047-1.02-.134-1.5H8v2.84h3.947a3.37 3.37 0 0 1-1.474 2.213v1.847h2.38C14.24 12.28 15.04 10.4 15.04 8.167" fill="#4285F4"/>
              <path d="M8 15.333c1.98 0 3.64-.653 4.853-1.773l-2.38-1.847c-.653.44-1.487.707-2.473.707-1.907 0-3.527-1.287-4.107-3.02H1.453v1.893C2.66 13.687 5.133 15.333 8 15.333" fill="#34A853"/>
              <path d="M3.893 9.4A4.826 4.826 0 0 1 3.66 8c0-.487.087-.96.233-1.4V4.707H1.453A7.993 7.993 0 0 0 .667 8c0 1.187.287 2.3.786 3.293L3.893 9.4" fill="#FBBC05"/>
              <path d="M8 3.587c1.08 0 2.04.373 2.807 1.093l2.1-2.1C11.633 1.393 9.98.667 8 .667 5.133.667 2.66 2.313 1.453 4.707l2.44 1.893C4.473 4.867 6.093 3.587 8 3.587" fill="#EA4335"/>
            </svg>
            Google
          </button>
          <button
            type="button"
            className="flex h-11 flex-1 items-center justify-center gap-2 rounded-xl border border-[#E2E7FF]/60 bg-white text-xs font-medium text-[#131B2E] shadow-sm"
          >
            <span className="flex size-4 items-center justify-center rounded-full bg-[#00B351]">
              <IconMessage className="size-2.5 text-white" />
            </span>
            WhatsApp
          </button>
        </div>

        <p className="pt-[11px] text-center text-[11px] leading-[17.88px] text-[#3E4850]/80">
          Terlindungi enkripsi data aman TokoKu Security
        </p>
      </div>
    </main>
  );
}
