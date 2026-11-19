import { useState } from "react";
import {
  IconArrowLeft,
  IconChevronDown,
  IconChevronRight,
  IconChefHat,
  IconCircleCheck,
  IconCreditCard,
  IconCrown,
  IconFileText,
  IconHeart,
  IconHelpCircle,
  IconHome,
  IconLogout,
  IconMail,
  IconMapPin,
  IconMessageDots,
  IconMotorbike,
  IconNavigation,
  IconPencil,
  IconPhone,
  IconShieldLock,
  IconShoppingBag,
  IconStarFilled,
  IconTicket,
  IconTools,
  IconTruckDelivery,
  IconUser,
} from "@tabler/icons-react";

export default function Akun({ onBackToDashboard, onOpenExplorer, onOpenCart, onLogout }) {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const cartCount = 3;

  return (
    <div className="min-h-screen bg-[#FAF8FF] text-[#131B2E] font-sans antialiased">
      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-20 bg-white/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToDashboard}
              aria-label="Kembali"
              className="flex size-9 items-center justify-center rounded-xl bg-[#F2F3FF] text-[#006591] transition hover:bg-[#EAEDFF]"
            >
              <IconArrowLeft size={18} />
            </button>
            <div className="flex flex-col">
              <img
                src="/logo.jpg"
                alt="My Food Buy And Eat"
                className="h-9 w-auto object-contain object-left"
              />
              <button className="flex items-center gap-0.5 py-0.5 text-xs text-[#3E4850]">
                <span className="font-medium">Antar ke:</span>
                <span className="max-w-[130px] truncate font-bold text-[#131B2E]">
                  Jl. Sudirman No. 45
                </span>
                <IconChevronDown size={10} className="text-[#0EA5E9]" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCart}
              className="relative flex size-11 items-center justify-center text-[#3E4850] transition hover:text-[#0EA5E9]"
              aria-label="Keranjang"
            >
              <IconShoppingBag size={20} />
              <span className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#BB0112] px-1 text-[10px] font-bold text-white">
                {cartCount}
              </span>
            </button>

            <div className="flex size-8 items-center justify-center rounded-full bg-[#006591] text-sm font-bold text-white shadow-sm ring-2 ring-[#0EA5E9]/30">
              B
            </div>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-3xl pb-24 pt-20 px-4">
        {/* ── Profil Card ── */}
        <section className="relative overflow-hidden rounded-2xl bg-white p-4 shadow-sm border border-[#E2E7FF]/60">
          <div className="absolute -right-8 -top-8 size-28 rounded-full bg-[#C9E6FF]/40 blur-2xl pointer-events-none" />

          <div className="relative flex items-center gap-3.5">
            <div className="relative shrink-0">
              <div className="size-16 overflow-hidden rounded-full bg-gradient-to-tr from-[#0EA5E9] to-[#006591] p-0.5 shadow-sm">
                <div className="flex h-full w-full items-center justify-center rounded-full bg-[#006591] text-xl font-extrabold text-white">
                  BS
                </div>
              </div>
              <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-[#006E2F] text-white shadow">
                <IconCircleCheck size={12} stroke={3} />
              </span>
            </div>

            <div className="flex flex-1 flex-col items-start min-w-0">
              <h1 className="text-base font-bold text-[#131B2E] tracking-tight truncate">
                Budi Santoso
              </h1>
              <span className="mt-0.5 inline-flex items-center gap-1 rounded-full bg-[#C9E6FF] px-2 py-0.5 text-[10px] font-extrabold text-[#001E2F] tracking-wide">
                <IconCrown size={11} className="text-[#006591]" />
                VIP MEMBER
              </span>
              <p className="mt-1 flex items-center gap-1 text-[11px] text-[#6E7881] truncate">
                <IconPhone size={11} /> +62 812-3456-7890
              </p>
              <p className="flex items-center gap-1 text-[11px] text-[#6E7881] truncate">
                <IconMail size={11} /> budi.santoso@email.com
              </p>
            </div>

            <button
              type="button"
              className="flex size-8 shrink-0 items-center justify-center rounded-full bg-[#EAEDFF] text-[#006591] transition hover:bg-[#C9E6FF]"
              aria-label="Edit profil"
            >
              <IconPencil size={15} />
            </button>
          </div>

          <div className="mt-3.5 flex items-center justify-between border-t border-slate-100 pt-2.5 px-0.5">
            <div className="flex items-center gap-2 text-xs font-medium text-[#131B2E]">
              <span className="text-[#0EA5E9]">
                <IconTicket size={16} />
              </span>
              <span>3 Voucher Diskon Siap Dipakai</span>
            </div>
            <button className="flex items-center gap-0.5 text-xs font-semibold text-[#006591] hover:underline">
              Lihat <IconChevronRight size={12} />
            </button>
          </div>
        </section>

        {/* ── Pesanan Aktif ── */}
        <section className="mt-3.5">
          <div className="flex flex-col gap-2 rounded-2xl bg-gradient-to-r from-[#C9E6FF]/80 to-white p-3.5 shadow-sm border border-[#0EA5E9]/20">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-extrabold tracking-wide text-[#006E2F] shadow-sm">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00B351] opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-[#006E2F]" />
                </span>
                PESANAN AKTIF
              </span>
              <span className="text-xs font-semibold text-[#6E7881]">
                No. #TKF-89214
              </span>
            </div>

            <div className="mt-1 flex items-center gap-3">
              <div className="size-12 shrink-0 overflow-hidden rounded-xl bg-[#EAEDFF] border border-white">
                <img
                  src="/assets/menu-ayam.png"
                  alt="Ayam Bakar Madu"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="min-w-0">
                <h2 className="truncate text-xs font-bold text-[#131B2E]">
                  Ayam Bakar Madu + Es Kopi
                </h2>
                <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#3E4850] truncate">
                  <IconMotorbike size={14} className="text-[#0EA5E9]" />
                  <span className="font-medium text-[#006591]">Driver sedang antar •</span>
                  <b className="font-bold">Tiba ~8 mnt</b>
                </p>
              </div>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <button
                type="button"
                onClick={() => alert("Lacak pesanan: #TKF-89214 (Driver sedang di Jl. Rasuna Said)")}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#006591] py-2 text-xs font-bold text-white shadow-sm transition hover:bg-[#005175]"
              >
                <IconNavigation size={14} />
                Lacak Pesanan Live
              </button>
              <button
                type="button"
                onClick={() => alert("Membuka obrolan dengan Driver...")}
                className="flex size-9 items-center justify-center rounded-xl bg-white text-[#006591] shadow-sm hover:bg-[#F2F3FF]"
                aria-label="Hubungi driver"
              >
                <IconMessageDots size={18} />
              </button>
            </div>
          </div>
        </section>

        {/* ── Status Pesanan Kuliner Saya ── */}
        <section className="mt-3.5 rounded-2xl bg-white p-3.5 shadow-sm border border-[#E2E7FF]/60">
          <div className="flex items-center justify-between pb-2.5">
            <h2 className="text-xs font-bold text-[#131B2E]">
              Pesanan Kuliner Saya
            </h2>
            <button className="flex items-center gap-0.5 text-xs font-semibold text-[#006591] hover:underline">
              Riwayat <IconChevronRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {[
              { label: "Dapur", sub: "0 antrean", Icon: IconChefHat, subColor: "text-[#6E7881]" },
              { label: "Dimasak", sub: "1 proses", badge: 1, Icon: IconTools, subColor: "text-[#B45309]" },
              { label: "Diantar", sub: "1 jalan", badge: 1, Icon: IconTruckDelivery, subColor: "text-[#006591]" },
              { label: "Ulasan", sub: "2 pesanan", badge: 2, badgeColor: "bg-[#006591]", Icon: IconStarFilled, subColor: "text-[#3E4850]" },
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center rounded-xl bg-[#FAF8FF] py-2.5 px-1 text-center transition hover:bg-[#F2F3FF] cursor-pointer"
              >
                <div className="relative flex size-10 items-center justify-center rounded-full bg-[#E2E7FF] text-[#006591]">
                  <step.Icon size={18} />
                  {step.badge && (
                    <span
                      className={`absolute -right-1 -top-1 flex size-4 items-center justify-center rounded-full text-[9px] font-bold text-white shadow-sm ${
                        step.badgeColor || "bg-[#BB0112]"
                      }`}
                    >
                      {step.badge}
                    </span>
                  )}
                </div>
                <span className="mt-1.5 text-xs font-semibold text-[#131B2E]">
                  {step.label}
                </span>
                <span className={`text-[10px] font-bold ${step.subColor}`}>
                  {step.sub}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* ── Aktivitas & Preferensi ── */}
        <section className="mt-3.5 rounded-2xl bg-white p-2 shadow-sm border border-[#E2E7FF]/60">
          <h3 className="px-3 pt-2 text-[10px] font-extrabold uppercase tracking-wider text-[#6E7881]">
            Aktivitas &amp; Preferensi
          </h3>

          <div className="mt-1 flex flex-col">
            {[
              {
                title: "Daftar Alamat Tersimpan",
                desc: "Rumah, Kantor, Kost (3 Alamat)",
                Icon: IconMapPin,
              },
              {
                title: "Metode Pembayaran & E-Wallet",
                desc: "TokoKu Pay, GoPay, Kartu Debit Mandiri",
                Icon: IconCreditCard,
              },
              {
                title: "Riwayat Pesanan & Resto Favorit",
                desc: "12 Restoran tersimpan di bookmark",
                Icon: IconHeart,
              },
              {
                title: "Voucher & Kupon Saya",
                desc: "3 kupon hemat tersedia",
                pill: "Baru",
                Icon: IconTicket,
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-[#F2F3FF] cursor-pointer"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#F2F3FF] text-[#006591]">
                  <row.Icon size={18} />
                </div>
                <div className="flex flex-1 items-center justify-between min-w-0 pr-1">
                  <div className="min-w-0">
                    <p className="truncate text-xs font-bold text-[#131B2E]">
                      {row.title}
                    </p>
                    <p className="truncate text-[11px] text-[#6E7881]">
                      {row.desc}
                    </p>
                  </div>
                  {row.pill && (
                    <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-extrabold text-rose-800 shrink-0 ml-2">
                      {row.pill}
                    </span>
                  )}
                </div>
                <IconChevronRight size={14} className="text-[#6E7881]" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Pusat Bantuan & Keamanan ── */}
        <section className="mt-3.5 rounded-2xl bg-white p-2 shadow-sm border border-[#E2E7FF]/60">
          <h3 className="px-3 pt-2 text-[10px] font-extrabold uppercase tracking-wider text-[#6E7881]">
            Pusat Bantuan &amp; Keamanan
          </h3>

          <div className="mt-1 flex flex-col">
            {[
              {
                title: "Pusat Bantuan & Live Chat",
                desc: "Respon kilat 24 Jam via WhatsApp / CS",
                Icon: IconHelpCircle,
              },
              {
                title: "Pengaturan Privasi & Keamanan",
                desc: "PIN Transaksi, Biometrik, Ganti Sandi",
                Icon: IconShieldLock,
              },
              {
                title: "Tentang TokoKu Food & Lisensi",
                desc: "Versi v3.14.0 (Build 2024)",
                Icon: IconFileText,
              },
            ].map((row, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl p-2.5 transition hover:bg-[#F2F3FF] cursor-pointer"
              >
                <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#F2F3FF] text-[#006591]">
                  <row.Icon size={18} />
                </div>
                <div className="flex flex-1 flex-col min-w-0">
                  <p className="truncate text-xs font-bold text-[#131B2E]">
                    {row.title}
                  </p>
                  <p className="truncate text-[11px] text-[#6E7881]">
                    {row.desc}
                  </p>
                </div>
                <IconChevronRight size={14} className="text-[#6E7881]" />
              </div>
            ))}
          </div>
        </section>

        {/* ── Tombol Keluar ── */}
        <section className="mt-5 pb-6">
          <button
            type="button"
            onClick={() => setShowLogoutDialog(true)}
            className="flex w-full items-center justify-center gap-2 rounded-2xl bg-white py-3 px-4 font-bold text-xs text-[#BB0112] shadow-sm border border-[#E2E7FF]/60 transition hover:bg-rose-50/50 active:scale-[0.99]"
          >
            <IconLogout size={16} />
            Keluar dari Akun
          </button>
        </section>
      </main>

      {/* ── Modal Dialog Konfirmasi Keluar ── */}
      {showLogoutDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-sm rounded-2xl bg-white p-5 shadow-2xl">
            <h4 className="text-base font-bold text-[#131B2E]">
              Keluar dari akun?
            </h4>
            <p className="mt-1.5 text-xs text-[#6E7881]">
              Kamu perlu masuk lagi untuk melacak pesanan dan menikmati promo.
            </p>
            <div className="mt-5 flex gap-2.5">
              <button
                type="button"
                onClick={() => setShowLogoutDialog(false)}
                className="flex-1 rounded-xl bg-[#EAEDFF] py-2.5 text-xs font-bold text-[#3E4850] transition hover:bg-[#E2E7FF]"
              >
                Batal
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowLogoutDialog(false);
                  onLogout();
                }}
                className="flex-1 rounded-xl bg-[#BB0112] py-2.5 text-xs font-bold text-white shadow transition hover:bg-red-700"
              >
                Keluar
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ── Bottom Nav ── */}
      <nav className="fixed inset-x-0 bottom-0 z-20 bg-white/95 shadow-[0_-2px_10px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-around px-2">
          <button
            onClick={onBackToDashboard}
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <IconHome size={18} />
            Beranda
          </button>

          <button
            onClick={onOpenExplorer}
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <IconTools size={18} />
            Kategori
          </button>

          <button
            onClick={onOpenCart}
            className="relative flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <span className="relative">
              <IconShoppingBag size={18} />
              <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#BB0112] px-1 text-[9px] font-bold text-white">
                {cartCount}
              </span>
            </span>
            Keranjang
          </button>

          <button className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#0EA5E9] font-bold">
            <IconUser size={18} />
            Akun
          </button>
        </div>
      </nav>
    </div>
  );
}
