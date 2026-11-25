import { NavLink } from 'react-router-dom';
import {
  IconLayoutDashboard,
  IconReceipt,
  IconTools,
  IconBox,
} from '@tabler/icons-react';
import { useStore } from '../store.jsx';

export default function BottomNav() {
  const { stats } = useStore();

  const tabs = [
    { to: '/', label: 'Ringkasan', icon: IconLayoutDashboard, end: true },
    { to: '/pesanan', label: 'Pesanan', icon: IconReceipt, badge: stats.active },
    { to: '/menu', label: 'Menu', icon: IconTools },
    { to: '/menu/stok', label: 'Stok', icon: IconBox },
  ];

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex h-16 items-center justify-around border-t border-slate-200/80 bg-white/95 px-2 backdrop-blur-md md:hidden shadow-lg">
      {tabs.map((t) => {
        const Icon = t.icon;
        return (
          <NavLink
            key={t.to}
            to={t.to}
            end={t.end}
            className={({ isActive }) =>
              `relative flex flex-col items-center justify-center py-1 px-3 text-[11px] font-bold transition ${
                isActive ? 'text-[#006591]' : 'text-slate-500 hover:text-slate-800'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="relative">
                  <Icon size={20} className={isActive ? 'text-[#006591]' : 'text-slate-500'} />
                  {t.badge > 0 && (
                    <span className="absolute -top-1 -right-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-amber-500 px-1 text-[9px] font-bold text-white">
                      {t.badge}
                    </span>
                  )}
                </div>
                <span className="mt-1">{t.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 h-0.5 w-6 rounded-full bg-[#006591]" />
                )}
              </>
            )}
          </NavLink>
        );
      })}
    </nav>
  );
}
