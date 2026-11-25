import { Link } from 'react-router-dom';
import {
  IconTrendingUp,
  IconReceipt,
  IconClock,
  IconBuildingStore,
  IconFlame,
  IconTools,
  IconBox,
  IconPlus,
  IconArrowRight,
  IconAlertTriangle,
} from '@tabler/icons-react';
import { formatRp, useStore } from '../store.jsx';
import Photo from '../components/Photo.jsx';

// Aktivitas pesanan per jam
const activity = [
  { hour: '08:00', val: 28, count: 6 },
  { hour: '09:00', val: 46, count: 9 },
  { hour: '10:00', val: 37, count: 7 },
  { hour: '11:00', val: 65, count: 12 },
  { hour: '12:00', val: 54, count: 11 },
  { hour: '13:00', val: 84, count: 18 },
  { hour: '14:00', val: 68, count: 14 },
];
const peakVal = Math.max(...activity.map((a) => a.val));

function greeting() {
  const h = new Date().getHours();
  if (h < 11) return 'Selamat pagi';
  if (h < 15) return 'Selamat siang';
  if (h < 18) return 'Selamat sore';
  return 'Selamat malam';
}

export default function Ringkasan() {
  const { stats, orders, menu } = useStore();
  const today = new Date().toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <div className="space-y-6">
      {/* Top Welcome Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
              {greeting()}, Admin TokoKu Food!
            </h1>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Toko Buka
            </span>
          </div>
          <p className="text-slate-500 text-sm mt-1">
            Pantau arus dapur, percepat penanganan pesanan, dan perbarui stok menu secara langsung.
          </p>
        </div>
        <div className="text-xs text-slate-500 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200/80 font-medium self-start md:self-auto">
          📅 {today}
        </div>
      </div>

      {/* 4 KPI Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {/* Metric 1: Pendapatan Hari Ini */}
        <div className="bg-gradient-to-br from-[#006591] to-[#004e70] text-white p-5 rounded-2xl shadow-sm relative overflow-hidden">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-white/80">
              Pendapatan Hari Ini
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white">
              <IconTrendingUp size={18} />
            </span>
          </div>
          <p className="text-2xl font-black mt-3 tracking-tight">{formatRp(stats.revenue)}</p>
          <div className="flex items-center gap-1.5 mt-2 text-xs font-semibold text-emerald-300">
            <span>{stats.growth}</span>
            <span className="text-white/70">dibanding kemarin</span>
          </div>
        </div>

        {/* Metric 2: Pesanan Hari Ini */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Total Pesanan
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#006591]">
              <IconReceipt size={18} />
            </span>
          </div>
          <p className="text-2xl font-black mt-3 text-slate-900 tracking-tight">
            {stats.ordersToday}{' '}
            <span className="text-sm font-semibold text-slate-500">pesanan</span>
          </p>
          <p className="mt-2 text-xs text-slate-500 font-medium">Tercatat masuk hari ini</p>
        </div>

        {/* Metric 3: Pesanan Aktif */}
        <div className="bg-white p-5 rounded-2xl border border-amber-200/90 shadow-2xs relative">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
              Pesanan Aktif
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-100 text-amber-700">
              <IconClock size={18} />
            </span>
          </div>
          <p className="text-2xl font-black mt-3 text-amber-900 tracking-tight">
            {stats.active}{' '}
            <span className="text-sm font-semibold text-amber-700">pesanan</span>
          </p>
          <div className="mt-2 flex items-center gap-1 text-xs font-bold text-amber-800">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-ping" />
            <span>Perlu segera ditangani dapur</span>
          </div>
        </div>

        {/* Metric 4: Menu Aktif & Stok */}
        <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Katalog Menu
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
              <IconBuildingStore size={18} />
            </span>
          </div>
          <p className="text-2xl font-black mt-3 text-slate-900 tracking-tight">
            {menu.length}{' '}
            <span className="text-sm font-semibold text-slate-500">menu aktif</span>
          </p>
          <p className="mt-2 text-xs text-slate-500 font-medium">
            {menu.filter((m) => m.stock === 0).length > 0 ? (
              <span className="text-rose-600 font-semibold">
                ⚠️ {menu.filter((m) => m.stock === 0).length} menu stok habis
              </span>
            ) : (
              'Semua menu tersedia'
            )}
          </p>
        </div>
      </div>

      {/* Main Grid: 8 Cols Chart/Recent + 4 Cols Actions/Alerts */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Chart & Recent Queue (8 cols) */}
        <div className="lg:col-span-8 space-y-6">
          {/* Activity Chart Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pb-4 border-b border-slate-100 gap-2">
              <div>
                <h2 className="text-base font-bold text-slate-900">Aktivitas Pesanan per Jam</h2>
                <p className="text-xs text-slate-500">
                  Grafik volume transaksi hari ini berdasarkan waktu sibuk dapur.
                </p>
              </div>
              <span className="self-start sm:self-auto text-xs font-bold px-2.5 py-1 bg-[#E4F4FC] text-[#006591] rounded-lg">
                Puncak: 13:00 (18 pesanan)
              </span>
            </div>

            {/* Visual Bar Chart */}
            <div className="pt-8 pb-4">
              <div className="flex items-end justify-between gap-2 sm:gap-6 h-48 px-2 sm:px-6">
                {activity.map((item) => {
                  const isPeak = item.val === peakVal;
                  return (
                    <div
                      key={item.hour}
                      className="flex-1 flex flex-col items-center gap-2 group relative"
                    >
                      {/* Tooltip on hover */}
                      <div className="absolute -top-9 opacity-0 group-hover:opacity-100 transition-opacity bg-slate-800 text-white text-[11px] font-bold py-1 px-2 rounded-md pointer-events-none whitespace-nowrap z-10">
                        {item.count} pesanan
                      </div>

                      {/* Bar Container */}
                      <div className="w-full max-w-[48px] h-36 bg-slate-100 rounded-t-xl overflow-hidden flex items-end">
                        <div
                          className={`w-full rounded-t-xl transition-all duration-300 ${
                            isPeak
                              ? 'bg-gradient-to-t from-[#006591] to-[#0EA5E9] shadow-md'
                              : 'bg-slate-300 group-hover:bg-[#0EA5E9]'
                          }`}
                          style={{ height: `${(item.val / peakVal) * 100}%` }}
                        />
                      </div>

                      {/* Hour Label */}
                      <span
                        className={`text-xs font-bold ${
                          isPeak ? 'text-[#006591]' : 'text-slate-500'
                        }`}
                      >
                        {item.hour}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Recent Orders Queue Card */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100">
              <div>
                <h2 className="text-base font-bold text-slate-900">Antrean Pesanan Terbaru</h2>
                <p className="text-xs text-slate-500">
                  Daftar pesanan aktif yang perlu diproses oleh staf dapur.
                </p>
              </div>
              <Link
                to="/pesanan"
                className="text-xs font-bold text-[#006591] hover:underline flex items-center gap-1"
              >
                <span>Lihat Semua</span>
                <IconArrowRight size={14} />
              </Link>
            </div>

            {/* List */}
            <div className="divide-y divide-slate-100 mt-2">
              {orders.slice(0, 3).map((order) => {
                const isNew = order.status === 'Baru';
                return (
                  <div
                    key={order.id}
                    className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-slate-50/70 p-2 rounded-xl transition"
                  >
                    <div className="flex items-center gap-3">
                      <Photo
                        file={order.photo}
                        size={48}
                        className="rounded-xl border border-slate-100 shrink-0"
                      />
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-sm">#{order.id}</span>
                          <span className="text-xs text-slate-400 font-medium">· {order.time}</span>
                          <span
                            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                              isNew
                                ? 'bg-amber-100 text-amber-800'
                                : order.status === 'Dimasak'
                                ? 'bg-blue-100 text-blue-800'
                                : 'bg-emerald-100 text-emerald-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 mt-0.5">
                          <strong>{order.customer}</strong> · {order.menus} menu ({order.portions}{' '}
                          porsi)
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 self-end sm:self-auto w-full sm:w-auto">
                      <span className="font-bold text-slate-900 text-sm">
                        {formatRp(order.total)}
                      </span>
                      <Link
                        to={`/pesanan/${order.id}`}
                        className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-[#006591] hover:text-white transition"
                      >
                        Detail →
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Alert & Quick Actions (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          {/* Kitchen Busy Priority Card */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-200 p-6 rounded-2xl shadow-2xs">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 text-white shadow-xs">
                <IconFlame size={22} />
              </span>
              <div>
                <h3 className="font-extrabold text-amber-950 text-base">Dapur Sedang Sibuk</h3>
                <p className="text-xs text-amber-800">
                  {stats.active} pesanan aktif menunggu ditangani.
                </p>
              </div>
            </div>
            <p className="text-xs text-amber-800/80 mt-3 leading-relaxed">
              Pastikan tim dapur segera memperbarui status pesanan menjadi <strong>Dimasak</strong>{' '}
              agar estimasi waktu pelanggan akurat.
            </p>
            <Link
              to="/pesanan"
              className="mt-4 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-white font-bold text-xs transition shadow-xs"
            >
              <span>Buka & Proses Pesanan</span>
              <IconArrowRight size={15} />
            </Link>
          </div>

          {/* Quick Management Shortcuts */}
          <div className="bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
              Aksi Cepat Admin
            </h3>
            <div className="space-y-2">
              <Link
                to="/menu/tambah"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-[#006591] hover:bg-[#E4F4FC]/30 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-[#006591]">
                    <IconPlus size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#006591]">
                      Tambah Menu Baru
                    </p>
                    <p className="text-[11px] text-slate-500">Input foto, harga, dan porsi</p>
                  </div>
                </div>
                <IconArrowRight size={14} className="text-slate-400 group-hover:text-[#006591]" />
              </Link>

              <Link
                to="/menu/stok"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-[#006591] hover:bg-[#E4F4FC]/30 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                    <IconBox size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#006591]">
                      Cek & Ubah Stok
                    </p>
                    <p className="text-[11px] text-slate-500">Perbarui jumlah porsi siap jual</p>
                  </div>
                </div>
                <IconArrowRight size={14} className="text-slate-400 group-hover:text-[#006591]" />
              </Link>

              <Link
                to="/menu/promo/ayam-bakar"
                className="flex items-center justify-between p-3 rounded-xl border border-slate-200 hover:border-[#006591] hover:bg-[#E4F4FC]/30 transition group"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-50 text-purple-700">
                    <IconTools size={18} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-900 group-hover:text-[#006591]">
                      Atur Harga & Promo
                    </p>
                    <p className="text-[11px] text-slate-500">Pasang diskon dan promo menarik</p>
                  </div>
                </div>
                <IconArrowRight size={14} className="text-slate-400 group-hover:text-[#006591]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
