import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IconArrowLeft,
  IconCheck,
  IconAlertTriangle,
  IconBox,
} from '@tabler/icons-react';
import Photo from '../components/Photo.jsx';
import Stepper from '../components/Stepper.jsx';
import { useStore } from '../store.jsx';

export default function CekStok() {
  const navigate = useNavigate();
  const { menu, updateStocks } = useStore();
  const [draft, setDraft] = useState(() =>
    Object.fromEntries(menu.map((m) => [m.id, m.stock]))
  );

  const change = (id, delta) =>
    setDraft((d) => ({ ...d, [id]: Math.max(0, (d[id] || 0) + delta) }));

  const setExact = (id, val) =>
    setDraft((d) => ({ ...d, [id]: Math.max(0, val) }));

  const handleSave = () => {
    updateStocks(draft);
    navigate('/menu/tersimpan');
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Top Backlink */}
      <Link
        to="/menu"
        className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#006591] bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition"
      >
        <IconArrowLeft size={16} />
        <span>Kembali ke Kelola Menu</span>
      </Link>

      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
            Cek & Ubah Stok Porsi Menu
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Sesuaikan jumlah porsi yang siap dimasak oleh dapur secara real-time.
          </p>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-[#006591] hover:bg-[#005175] text-white text-xs font-extrabold shadow-sm transition active:scale-95"
        >
          <IconCheck size={16} />
          <span>Simpan Perubahan Stok</span>
        </button>
      </div>

      {/* Warning Notice */}
      <div className="flex items-center gap-3 p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-medium">
        <IconAlertTriangle size={20} className="text-amber-600 shrink-0" />
        <p>
          <strong>Perhatian:</strong> Menu dengan jumlah porsi <strong>0</strong> otomatis ditandai
          sebagai <strong>HABIS</strong> di aplikasi pelanggan dan tidak dapat dipesan.
        </p>
      </div>

      {/* Stock Cards Grid (1 col on mobile, 2 on md, 3 on lg) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {menu.map((item) => {
          const currentStock = draft[item.id] ?? item.stock;
          const isOut = currentStock === 0;

          return (
            <div
              key={item.id}
              className={`bg-white rounded-2xl border p-5 shadow-2xs transition-all flex flex-col justify-between ${
                isOut ? 'border-rose-200 bg-rose-50/20' : 'border-slate-200/80'
              }`}
            >
              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <Photo
                    file={item.photo}
                    size={52}
                    className="rounded-xl border border-slate-100 shrink-0"
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="font-bold text-slate-900 text-sm truncate">{item.name}</h3>
                    <p className="text-xs text-slate-500 mt-0.5">
                      {item.category || 'Menu Makanan'}
                    </p>
                  </div>
                </div>

                {/* Stock Controls */}
                <div className="bg-slate-50 p-4 rounded-xl space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-600">Porsi Tersedia:</span>
                    <span
                      className={`text-xs font-extrabold px-2.5 py-0.5 rounded-full ${
                        isOut
                          ? 'bg-rose-100 text-rose-700'
                          : 'bg-emerald-100 text-emerald-800'
                      }`}
                    >
                      {isOut ? 'HABIS' : `${currentStock} Porsi`}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <Stepper
                      big
                      label={`stok ${item.name}`}
                      value={currentStock}
                      onDec={() => change(item.id, -1)}
                      onInc={() => change(item.id, 1)}
                      disableDec={currentStock <= 0}
                      unit="porsi"
                    />
                  </div>

                  {/* Quick Shortcut Buttons */}
                  <div className="flex items-center justify-center gap-1.5 pt-1">
                    <button
                      type="button"
                      onClick={() => change(item.id, 5)}
                      className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-slate-100 transition"
                    >
                      +5
                    </button>
                    <button
                      type="button"
                      onClick={() => change(item.id, 10)}
                      className="px-2 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-bold text-slate-600 hover:bg-slate-100 transition"
                    >
                      +10
                    </button>
                    <button
                      type="button"
                      onClick={() => setExact(item.id, 0)}
                      className="px-2 py-1 rounded-lg bg-rose-50 border border-rose-200 text-[11px] font-bold text-rose-700 hover:bg-rose-100 transition"
                    >
                      Set Habis
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom footer note */}
              <p className="text-[11px] text-slate-400 text-center mt-3">
                {isOut
                  ? '⚠️ Pelanggan tidak dapat memesan menu ini'
                  : '✓ Menu aktif dan siap dipesan'}
              </p>
            </div>
          );
        })}
      </div>

      {/* Floating Save Button on Mobile/Desktop */}
      <div className="flex justify-end pt-4">
        <button
          type="button"
          onClick={handleSave}
          className="flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-[#006591] hover:bg-[#005175] text-white text-sm font-extrabold shadow-md transition active:scale-95"
        >
          <IconCheck size={18} />
          <span>Simpan Perubahan Stok Semua Menu</span>
        </button>
      </div>
    </div>
  );
}
