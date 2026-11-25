import { Link } from 'react-router-dom';
import { IconCheck, IconArrowRight, IconTools, IconReceipt } from '@tabler/icons-react';

export default function Tersimpan() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-10 px-4">
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-md p-8 sm:p-10 max-w-lg w-full text-center space-y-6">
        {/* Animated Check Icon */}
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shadow-inner">
          <IconCheck size={42} strokeWidth={3} />
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl font-black text-slate-900 tracking-tight">
            Perubahan Berhasil Disimpan!
          </h1>
          <p className="text-slate-500 text-sm leading-relaxed">
            Data menu, harga promo, atau stok terbaru telah berhasil diperbarui dan langsung aktif
            di katalog pelanggan TokoKu Food.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/menu"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#006591] hover:bg-[#005175] text-white text-xs font-bold transition shadow-xs"
          >
            <IconTools size={16} />
            <span>Kembali ke Kelola Menu</span>
          </Link>
          <Link
            to="/pesanan"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition"
          >
            <IconReceipt size={16} />
            <span>Lihat Antrean Pesanan</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
