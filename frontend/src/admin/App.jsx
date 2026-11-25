import { useEffect, useRef, useState } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar.jsx';
import TopNav from './components/TopNav.jsx';
import BottomNav from './components/BottomNav.jsx';
import Ringkasan from './pages/Ringkasan.jsx';
import Pesanan from './pages/Pesanan.jsx';
import DetailPesanan from './pages/DetailPesanan.jsx';
import KelolaMenu from './pages/KelolaMenu.jsx';
import TambahMenu from './pages/TambahMenu.jsx';
import CekStok from './pages/CekStok.jsx';
import HargaPromo from './pages/HargaPromo.jsx';
import Tersimpan from './pages/Tersimpan.jsx';

export default function App({ onBackToStore, onLogout, currentUser }) {
  const { pathname } = useLocation();
  const mainRef = useRef(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    mainRef.current?.scrollTo(0, 0);
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#131B2E] flex flex-col md:flex-row font-sans">
      {/* Responsive Sidebar */}
      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onBackToStore={onBackToStore}
        onLogout={onLogout}
        currentUser={currentUser}
      />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 min-h-screen">
        {/* Top Header Navbar */}
        <TopNav
          onToggleSidebar={() => setSidebarOpen((v) => !v)}
          onBackToStore={onBackToStore}
          onLogout={onLogout}
          currentUser={currentUser}
        />

        {/* Scrollable Main Canvas */}
        <main
          ref={mainRef}
          className="flex-1 p-4 sm:p-6 md:p-8 max-w-7xl w-full mx-auto pb-24 md:pb-12"
        >
          <Routes>
            <Route path="/" element={<Ringkasan />} />
            <Route path="/pesanan" element={<Pesanan />} />
            <Route path="/pesanan/:id" element={<DetailPesanan />} />
            <Route path="/menu" element={<KelolaMenu />} />
            <Route path="/menu/tambah" element={<TambahMenu />} />
            <Route path="/menu/stok" element={<CekStok />} />
            <Route path="/menu/promo/:id" element={<HargaPromo />} />
            <Route path="/menu/tersimpan" element={<Tersimpan />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Bottom Nav for Mobile Only */}
        <BottomNav />
      </div>
    </div>
  );
}
