import { Link, useLocation } from 'react-router-dom';
import {
  IconMenu2,
  IconBuildingStore,
  IconArrowLeft,
  IconLogout,
  IconReceipt,
  IconClock,
} from '@tabler/icons-react';
import { formatRp, useStore } from '../store.jsx';

export default function TopNav({ onToggleSidebar, onBackToStore, onLogout, currentUser }) {
  const { pathname } = useLocation();
  const { stats, orders } = useStore();

  const getBreadcrumb = () => {
    if (pathname === '/') return 'Ringkasan Dashboard';
    if (pathname.startsWith('/pesanan/')) return 'Detail Pesanan Pelanggan';
    if (pathname === '/pesanan') return 'Kelola Pesanan Aktif';
    if (pathname === '/menu/tambah') return 'Tambah Menu Baru';
    if (pathname === '/menu/stok') return 'Cek & Ubah Stok Menu';
    if (pathname.startsWith('/menu/promo')) return 'Pengaturan Harga & Diskon Promo';
    if (pathname === '/menu/tersimpan') return 'Status Perubahan Menu';
    if (pathname.startsWith('/menu')) return 'Katalog Kelola Menu';
    return 'Panel Administrasi';
  };

  return (
    <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b border-slate-200/80 bg-white/95 px-4 md:px-8 backdrop-blur-md">
      {/* Left side: Hamburger button + Breadcrumbs */}
      <div className="flex items-center gap-3 md:gap-4">
        <button
          type="button"
          onClick={onToggleSidebar}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100 hover:text-slate-900 md:hidden"
          aria-label="Buka navigasi"
        >
          <IconMenu2 size={20} />
        </button>

        <div>
          <h1 className="text-base md:text-lg font-bold text-slate-900 tracking-tight">
            {getBreadcrumb()}
          </h1>
          <p className="hidden md:flex items-center gap-2 text-xs text-slate-500">
            <span>TokoKu Food Admin</span>
            <span>•</span>
            <span className="text-emerald-600 font-semibold flex items-center gap-1">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Sistem Aktif Realtime
            </span>
          </p>
        </div>
      </div>

      {/* Right side: Live stats pills & quick action buttons */}
      <div className="flex items-center gap-3">
        {/* Quick Mini Revenue (Desktop only) */}
        <div className="hidden lg:flex items-center gap-2.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs">
          <span className="text-slate-500 font-medium">Omset Hari Ini:</span>
          <span className="font-bold text-[#006591]">{formatRp(stats.revenue)}</span>
        </div>

        {/* Active orders pill */}
        <Link
          to="/pesanan"
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200/70 text-amber-800 text-xs font-bold hover:bg-amber-100 transition"
          title="Klik untuk lihat pesanan aktif"
        >
          <IconClock size={15} className="text-amber-600" />
          <span>{stats.active} Pesanan Aktif</span>
        </Link>

        {/* Back to store shortcut */}
        {onBackToStore && (
          <button
            type="button"
            onClick={onBackToStore}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-[#E4F4FC] text-[#006591] hover:bg-[#DDEFF9] font-bold text-xs transition"
          >
            <IconBuildingStore size={15} />
            <span>Ke Toko</span>
          </button>
        )}

        {/* Logout button */}
        {onLogout && (
          <button
            type="button"
            onClick={onLogout}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-rose-50 text-rose-700 hover:bg-rose-100 font-bold text-xs transition border border-rose-200/70"
            title="Keluar dari akun admin"
          >
            <IconLogout size={15} />
            <span>Keluar</span>
          </button>
        )}
      </div>
    </header>
  );
}
