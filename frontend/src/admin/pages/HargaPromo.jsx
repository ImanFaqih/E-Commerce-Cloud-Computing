import { useState, useEffect } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import {
  IconArrowLeft,
  IconCheck,
  IconPercentage,
  IconTag,
  IconAlertCircle,
} from '@tabler/icons-react';
import Photo from '../components/Photo.jsx';
import Stepper from '../components/Stepper.jsx';
import { formatRp, useStore } from '../store.jsx';

export default function HargaPromo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { menu, updateMenu } = useStore();

  const item = menu.find((m) => m.id === id) || menu[0];

  const [selectedId, setSelectedId] = useState(item?.id || '');
  const currentItem = menu.find((m) => m.id === selectedId) || item;

  const [price, setPrice] = useState(currentItem?.basePrice ?? 0);
  const [discount, setDiscount] = useState(currentItem?.discount ?? 0);

  useEffect(() => {
    if (currentItem) {
      setPrice(currentItem.basePrice);
      setDiscount(currentItem.discount);
    }
  }, [selectedId]);

  if (!currentItem) {
    return <Navigate to="/menu" replace />;
  }

  const discountAmount = Math.round((price * discount) / 100);
  const finalPrice = price - discountAmount;

  const handleSave = () => {
    updateMenu(currentItem.id, { basePrice: price, discount });
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
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
        <h1 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">
          Pengaturan Harga & Diskon Promo
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Sesuaikan harga dasar dan pasang promosi diskon untuk menarik lebih banyak pembeli.
        </p>
      </div>

      {/* 2-Column Responsive Layout (7 cols Left / 5 cols Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Form & Steppers */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-6">
          <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
            Pilih Menu & Atur Nilai
          </h2>

          {/* Menu Selector Dropdown */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">Pilih Menu Resto</label>
            <select
              value={selectedId}
              onChange={(e) => setSelectedId(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-800 focus:outline-hidden focus:border-[#006591] focus:bg-white transition cursor-pointer"
            >
              {menu.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.name} ({formatRp(m.basePrice)})
                </option>
              ))}
            </select>
          </div>

          {/* Stepper Harga Normal */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-bold text-slate-800 block">Harga Normal (Rp)</label>
                <span className="text-[11px] text-slate-400">Kelipatan Rp 1.000 per ketukan</span>
              </div>
              <span className="font-extrabold text-[#006591] text-base">{formatRp(price)}</span>
            </div>

            <div className="flex justify-center pt-2">
              <Stepper
                big
                label="harga normal"
                value={price}
                onDec={() => setPrice((p) => Math.max(1000, p - 1000))}
                onInc={() => setPrice((p) => p + 1000)}
                disableDec={price <= 1000}
                unit="Rp"
              />
            </div>
          </div>

          {/* Stepper Diskon Promo */}
          <div className="space-y-2 bg-slate-50 p-4 rounded-xl">
            <div className="flex items-center justify-between">
              <div>
                <label className="text-xs font-bold text-slate-800 block">Diskon Promosi (%)</label>
                <span className="text-[11px] text-slate-400">
                  Kelipatan 5% (Maksimal diskon 90%)
                </span>
              </div>
              <span className="font-extrabold text-amber-600 text-base">{discount}%</span>
            </div>

            <div className="flex justify-center pt-2">
              <Stepper
                big
                label="diskon promo"
                value={discount}
                onDec={() => setDiscount((d) => Math.max(0, d - 5))}
                onInc={() => setDiscount((d) => Math.min(90, d + 5))}
                disableDec={discount <= 0}
                disableInc={discount >= 90}
                unit="%"
              />
            </div>

            <div className="flex justify-center gap-2 pt-2">
              {[0, 10, 20, 30, 50].map((disc) => (
                <button
                  key={disc}
                  type="button"
                  onClick={() => setDiscount(disc)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-bold transition ${
                    discount === disc
                      ? 'bg-amber-500 text-white'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {disc === 0 ? 'Tanpa Diskon' : `${disc}%`}
                </button>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleSave}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#006591] hover:bg-[#005175] text-white text-sm font-extrabold shadow-sm transition active:scale-95"
            >
              <IconCheck size={18} />
              <span>Simpan Harga & Promo Menu</span>
            </button>
          </div>
        </div>

        {/* Right Column: Live Price Calculator & Preview */}
        <div className="lg:col-span-5 space-y-5">
          {/* Chosen Menu Preview Card */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Menu Yang Sedang Diatur
            </h3>

            <div className="flex items-center gap-3.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <Photo
                file={currentItem.photo}
                size={56}
                className="rounded-xl border border-slate-200 shrink-0"
              />
              <div className="min-w-0 flex-1">
                <h4 className="font-extrabold text-slate-900 text-sm truncate">
                  {currentItem.name}
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  {currentItem.category || 'Menu Makanan'}
                </p>
              </div>
            </div>

            {/* Price Breakdown Calculation */}
            <div className="bg-gradient-to-br from-[#E4F4FC]/60 to-white p-5 rounded-2xl border border-[#006591]/20 space-y-3">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#006591] block">
                Harga Yang Dilihat Pelanggan
              </span>

              <div className="flex justify-between text-xs text-slate-600">
                <span>Harga Normal Asli:</span>
                <span className="font-semibold">{formatRp(price)}</span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-xs text-amber-700">
                  <span>Potongan Diskon ({discount}%):</span>
                  <span className="font-bold">- {formatRp(discountAmount)}</span>
                </div>
              )}

              <div className="pt-2 border-t border-slate-200 flex justify-between items-baseline">
                <span className="text-xs font-bold text-slate-900">Harga Akhir:</span>
                <span className="text-2xl font-black text-[#006591]">{formatRp(finalPrice)}</span>
              </div>

              <p className="text-[11px] text-slate-500 leading-relaxed pt-1">
                {discount > 0
                  ? `Pelanggan akan melihat badge "Diskon ${discount}%" dan harga coret ${formatRp(price)}.`
                  : 'Menu ini dijual dengan harga normal tanpa potongan promo.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
