import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
import {
  IconArrowLeft,
  IconReceipt,
  IconClock,
  IconUser,
  IconMapPin,
  IconCreditCard,
  IconNotes,
  IconChefHat,
  IconCheck,
} from '@tabler/icons-react';
import Photo from '../components/Photo.jsx';
import { formatRp, useStore } from '../store.jsx';

export default function DetailPesanan() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { orders, acceptOrder } = useStore();
  const order = orders.find((o) => o.id === id);

  if (!order || !order.detail) {
    return <Navigate to="/pesanan" replace />;
  }

  const { detail } = order;
  const isAccepted = order.status !== 'Baru';
  const total = detail.items.reduce((sum, i) => sum + i.qty * i.price, 0);

  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      {/* Back Button & Top Navigation */}
      <div className="flex items-center justify-between">
        <Link
          to="/pesanan"
          className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 hover:text-[#006591] bg-white px-3.5 py-2 rounded-xl border border-slate-200 shadow-2xs transition"
        >
          <IconArrowLeft size={16} />
          <span>Kembali ke Daftar Pesanan</span>
        </Link>

        <span
          className={`px-3 py-1 rounded-full text-xs font-bold ${
            isAccepted
              ? 'bg-blue-100 text-blue-800 border border-blue-200'
              : 'bg-amber-100 text-amber-800 border border-amber-200 animate-pulse'
          }`}
        >
          Status: {order.status}
        </span>
      </div>

      {/* Header Banner */}
      <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">#{order.id}</h1>
            <span className="text-xs text-slate-500 font-medium bg-slate-100 px-2.5 py-1 rounded-lg">
              {detail.date}
            </span>
          </div>
          <p className="text-xs text-slate-500 mt-1">
            Pesanan masuk atas nama <strong>{order.customer}</strong>
          </p>
        </div>

        {/* Action Button */}
        <div>
          {isAccepted ? (
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-blue-50 border border-blue-200 text-[#006591] font-bold text-xs">
              <IconCheck size={16} className="text-blue-600" />
              <span>Pesanan Sedang Dimasak di Dapur</span>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => acceptOrder(order.id)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-sm shadow-md transition active:scale-95"
            >
              <IconChefHat size={18} />
              <span>Terima & Proses Pesanan</span>
            </button>
          )}
        </div>
      </div>

      {/* 2-Column Layout (7 cols Left / 5 cols Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (Items Breakdown) */}
        <div className="lg:col-span-7 space-y-6">
          {/* Status Alert Banner */}
          <div
            className={`p-4 rounded-2xl border ${
              isAccepted
                ? 'bg-emerald-50 border-emerald-200 text-emerald-900'
                : 'bg-amber-50 border-amber-200 text-amber-950'
            }`}
          >
            <p className="font-extrabold text-sm">
              {isAccepted ? '🍳 Pesanan Telah Diteruskan ke Dapur' : '🔔 Pesanan Baru Masuk!'}
            </p>
            <p className="text-xs mt-0.5 opacity-90">
              {isAccepted
                ? 'Dapur sedang memasak & menyiapkan pesanan (Estimasi waktu ±20 menit).'
                : 'Periksa ketersediaan bahan, lalu tekan tombol "Terima & Proses Pesanan" di atas.'}
            </p>
          </div>

          {/* Items Table Card */}
          <div className="bg-white rounded-2xl border border-slate-200/80 shadow-2xs overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
              <h2 className="font-bold text-slate-900 text-sm">Rincian Menu Dipesan</h2>
              <span className="text-xs text-slate-500 font-medium">
                {detail.items.length} Menu
              </span>
            </div>

            <div className="divide-y divide-slate-100">
              {detail.items.map((item) => (
                <div key={item.name} className="p-4 sm:p-5 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3.5">
                    <Photo
                      file={item.photo}
                      size={52}
                      className="rounded-xl border border-slate-100 shrink-0"
                    />
                    <div>
                      <p className="font-bold text-slate-900 text-sm">{item.name}</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {item.qty} Porsi × {formatRp(item.price)}
                      </p>
                    </div>
                  </div>

                  <span className="font-extrabold text-slate-900 text-sm shrink-0">
                    {formatRp(item.qty * item.price)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total Calculation Footer */}
            <div className="bg-slate-50/70 p-5 border-t border-slate-100 space-y-2 text-xs">
              <div className="flex justify-between text-slate-500">
                <span>Subtotal Menu</span>
                <span className="font-semibold text-slate-800">{formatRp(total)}</span>
              </div>
              <div className="flex justify-between text-slate-500">
                <span>Biaya Pengantaran / Kemasan</span>
                <span className="font-semibold text-slate-800">{formatRp(order.total - total > 0 ? order.total - total : 0)}</span>
              </div>
              <div className="pt-2 border-t border-slate-200 flex justify-between items-center text-sm">
                <span className="font-bold text-slate-900">Total Pembayaran</span>
                <span className="text-lg font-black text-[#006591]">{formatRp(order.total)}</span>
              </div>
            </div>
          </div>

          {/* Customer Note */}
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
              <IconNotes size={16} />
              <span>Catatan Khusus Pelanggan</span>
            </div>
            <p className="text-xs font-medium text-slate-800 bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60 italic">
              "{detail.note || 'Tidak ada catatan tambahan.'}"
            </p>
          </div>
        </div>

        {/* Right Column (Customer & Delivery Info) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-5">
            <h2 className="font-bold text-slate-900 text-sm pb-3 border-b border-slate-100">
              Informasi Pelanggan & Pengantaran
            </h2>

            {/* Customer Name */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-[#006591] shrink-0">
                <IconUser size={18} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Nama Pelanggan
                </span>
                <p className="font-bold text-slate-900 text-sm mt-0.5">{order.customer}</p>
              </div>
            </div>

            {/* Delivery Address */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 shrink-0">
                <IconMapPin size={18} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Alamat Pengantaran
                </span>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed font-medium">
                  {detail.address}
                </p>
              </div>
            </div>

            {/* Payment Info */}
            <div className="flex items-start gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-purple-50 text-purple-700 shrink-0">
                <IconCreditCard size={18} />
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                  Metode Pembayaran
                </span>
                <p className="text-xs font-bold text-emerald-700 mt-0.5">
                  ✓ {detail.payment}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Action Box */}
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-3">
            <h3 className="font-bold text-xs text-slate-900 uppercase tracking-wider">
              Bantuan Pengelolaan
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              Jika pesanan sudah siap dikirim atau diambil, hubungi kurir resto atau informasikan
              pelanggan melalui aplikasi.
            </p>
            <button
              type="button"
              onClick={() => navigate('/pesanan')}
              className="w-full py-2.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-100 transition"
            >
              Selesai & Tutup Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
