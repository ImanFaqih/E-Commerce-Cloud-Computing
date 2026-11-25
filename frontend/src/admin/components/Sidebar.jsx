import { NavLink } from 'react-router-dom';
import {
  IconLayoutDashboard,
  IconReceipt,
  IconTools,
  IconBox,
  IconPlus,
  IconArrowLeft,
  IconLogout,
  IconX,
  IconBuildingStore,
  IconPercentage,
} from '@tabler/icons-react';
import { img, useStore } from '../store.jsx';

export default function Sidebar({ isOpen, onClose, onBackToStore, onLogout, currentUser }) {
  const { stats, orders } = useStore();
  const activeOrdersCount = orders.filter((o) => o.status !== 'Selesai').length;

  const navItems = [
    { to: '/', label: 'Ringkasan', icon: IconLayoutDashboard, end: true },
    { to: '/pesanan', label: 'Pesanan Aktif', icon: IconReceipt, badge: activeOrdersCount },
    { to: '/menu', label: 'Kelola Menu', icon: IconTools },
    { to: '/menu/stok', label: 'Cek & Ubah Stok', icon: IconBox },
    { to: '/menu/promo/ayam-bakar', label: 'Harga & Promo', icon: IconPercentage },
  ];

  return (
    <>
      {/* Backdrop for Mobile Drawer */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-xs md:hidden"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white border-r border-slate-200/80 shadow-lg md:shadow-none transition-transform duration-300 md:static md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand & Logo Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 overflow-hidden rounded-xl bg-[#006591]/10 p-1 flex items-center justify-center">
              <img
                src={img('logo.png')}
                alt="My Food Logo"
                className="h-full w-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextSibling.style.display = 'block';
                }}
              />
              <span className="hidden font-black text-xs text-[#006591]">MF</span>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold tracking-tight text-slate-900 text-base">MY FOOD</span>
                <span className="rounded-full bg-[#E4F4FC] px-2 py-0.5 text-[10px] font-bold text-[#006591]">
                  ADMIN
                </span>
              </div>
              <p className="text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                Pusat Pengelolaan Toko
              </p>
            </div>
          </div>

          {/* Close button for mobile */}
          <button
            type="button"
            onClick={onClose}
            className="md:hidden rounded-lg p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-600"
            aria-label="Tutup menu"
          >
            <IconX size={20} />
          </button>
        </div>

        {/* Navigation Section */}
        <div className="flex-1 overflow-y-auto px-4 py-5 space-y-6">
          <div>
            <p className="px-3 mb-2 text-[11px] font-bold tracking-wider text-slate-600 uppercase">
              Menu Utama
            </p>
            <nav className="space-y-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.end}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center justify-between px-3.5 py-2.5 rounded-xl font-medium text-sm transition-all duration-150 ${
                        isActive
                          ? 'bg-[#006591] text-white shadow-sm font-semibold'
                          : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <div className="flex items-center gap-3">
                          <Icon size={19} className={isActive ? 'text-white' : 'text-slate-600'} />
                          <span>{item.label}</span>
                        </div>
                        {item.badge !== undefined && (
                          <span
                            className={`rounded-full px-2 py-0.5 text-xs font-bold ${
                              isActive
                                ? 'bg-white/20 text-white'
                                : 'bg-amber-100 text-amber-800'
                            }`}
                          >
                            {item.badge}
                          </span>
                        )}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </div>

          {/* Quick Action Button */}
          <div>
            <p className="px-3 mb-2 text-[11px] font-bold tracking-wider text-slate-600 uppercase">
              Tindakan Cepat
            </p>
            <NavLink
              to="/menu/tambah"
              onClick={onClose}
              className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-dashed border-[#006591]/40 bg-[#E4F4FC]/40 text-[#006591] font-semibold text-sm hover:bg-[#E4F4FC] hover:border-[#006591] transition"
            >
              <IconPlus size={16} />
              <span>+ Tambah Menu Baru</span>
            </NavLink>
          </div>
        </div>

        {/* User Card & Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-3">
          <div className="flex items-center gap-3 px-2 py-1">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#006591] text-white font-bold text-sm shadow-xs">
              {(currentUser?.name || 'A')[0].toUpperCase()}
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-xs font-bold text-slate-900">
                {currentUser?.name || 'Admin Toko'}
              </p>
              <div className="flex items-center gap-1.5 text-[11px] text-emerald-600 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>Online · Toko Buka</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-1">
            {onBackToStore && (
              <button
                type="button"
                onClick={onBackToStore}
                className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white border border-slate-200 text-slate-700 text-xs font-semibold hover:bg-slate-100 hover:text-slate-900 transition shadow-2xs"
                title="Kembali ke tampilan e-commerce"
              >
                <IconArrowLeft size={14} />
                <span>Ke Toko</span>
              </button>
            )}
            {onLogout && (
              <button
                type="button"
                onClick={onLogout}
                className="flex items-center justify-center p-2 rounded-lg bg-rose-50 border border-rose-200/80 text-rose-700 hover:bg-rose-100 transition shadow-2xs"
                title="Keluar dari akun admin"
              >
                <IconLogout size={16} />
              </button>
            )}
          </div>
        </div>
      </aside>
    </>
  );
}
