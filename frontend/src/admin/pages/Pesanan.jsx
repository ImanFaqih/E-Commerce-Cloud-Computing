import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconSearch,
  IconReceipt,
  IconClock,
  IconCheck,
  IconArrowRight,
  IconFilter,
} from '@tabler/icons-react';
import Photo from '../components/Photo.jsx';
import { formatRp, useStore } from '../store.jsx';

export default function Pesanan() {
  const { orders, stats, acceptOrder } = useStore();
  const [filterStatus, setFilterStatus] = useState('Semua');
  const [query, setQuery] = useState('');

  const filteredOrders = orders.filter((o) => {
    const matchStatus = filterStatus === 'Semua' || o.status === filterStatus;
    const matchQuery =
      o.customer.toLowerCase().includes(query.toLowerCase()) ||
      o.id.toLowerCase().includes(query.toLowerCase());
    return matchStatus && matchQuery;
  });

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            Kelola Pesanan Pelanggan
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            {stats.active} pesanan aktif dalam sistem · Pantau status memasak & pengantaran
          </p>
        </div>

        {/* Status Count Badge */}
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 text-xs font-bold">
            <span className="h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
            <span>{orders.filter((o) => o.status === 'Baru').length} Pesanan Baru</span>
          </span>
          <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 text-xs font-bold">
            <span>{orders.filter((o) => o.status === 'Dimasak').length} Dimasak</span>
          </span>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        {/* Status Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {['Semua', 'Baru', 'Dimasak', 'Diantar'].map((st) => {
            const count =
              st === 'Semua' ? orders.length : orders.filter((o) => o.status === st).length;
            const active = filterStatus === st;
            return (
              <button
                key={st}
                type="button"
                onClick={() => setFilterStatus(st)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  active
                    ? 'bg-[#006591] text-white shadow-2xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <span>{st}</span>
                <span
                  className={`px-1.5 py-0.2 rounded-full text-[10px] ${
                    active ? 'bg-white/25 text-white' : 'bg-slate-200 text-slate-700'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Search Input */}
        <div className="relative w-full md:w-72">
          <IconSearch
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama pelanggan / #ID..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#006591] focus:bg-white transition"
          />
        </div>
      </div>

      {/* Orders Grid (1 col on mobile, 2 cols on lg, 3 cols on 2xl) */}
      {filteredOrders.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200/80 shadow-2xs">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-slate-400 mb-3">
            <IconReceipt size={24} />
          </div>
          <h3 className="text-base font-bold text-slate-900">Tidak ada pesanan ditemukan</h3>
          <p className="text-xs text-slate-500 mt-1">
            Coba ubah kata kunci pencarian atau ganti filter status di atas.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-5">
          {filteredOrders.map((order) => {
            const isNew = order.status === 'Baru';
            const isCooking = order.status === 'Dimasak';

            return (
              <div
                key={order.id}
                className="bg-white rounded-2xl border border-slate-200/80 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Header of Card */}
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900">#{order.id}</span>
                      <span className="text-xs text-slate-400 font-medium flex items-center gap-1">
                        <IconClock size={12} />
                        {order.time} WIB
                      </span>
                    </div>
                    <span
                      className={`px-2.5 py-0.5 rounded-full text-xs font-bold ${
                        isNew
                          ? 'bg-amber-100 text-amber-800 border border-amber-200'
                          : isCooking
                          ? 'bg-blue-100 text-blue-800 border border-blue-200'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-200'
                      }`}
                    >
                      {order.status}
                    </span>
                  </div>

                  {/* Customer & Photo Details */}
                  <div className="flex items-center gap-3.5 my-4">
                    <Photo
                      file={order.photo}
                      size={60}
                      className="rounded-xl border border-slate-100 shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <p className="font-bold text-slate-900 text-sm truncate">{order.customer}</p>
                      <p className="text-xs text-slate-500 mt-0.5">
                        {order.menus} Macam Menu · {order.portions} Porsi Makanan
                      </p>
                      {order.detail?.address && (
                        <p className="text-[11px] text-slate-400 truncate mt-1">
                          📍 {order.detail.address}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Items list preview */}
                  {order.detail?.items && (
                    <div className="bg-slate-50 rounded-xl p-3 space-y-1.5 text-xs text-slate-600 mb-4">
                      {order.detail.items.map((item) => (
                        <div key={item.name} className="flex justify-between">
                          <span className="truncate pr-2">
                            {item.qty}x {item.name}
                          </span>
                          <span className="font-semibold text-slate-800 shrink-0">
                            {formatRp(item.qty * item.price)}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Card Footer */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 block">
                      Total Bayar
                    </span>
                    <span className="text-base font-extrabold text-[#006591]">
                      {formatRp(order.total)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    {isNew && (
                      <button
                        type="button"
                        onClick={() => acceptOrder(order.id)}
                        className="px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold transition shadow-xs"
                        title="Terima pesanan dan teruskan ke dapur"
                      >
                        Terima Dapur
                      </button>
                    )}
                    <Link
                      to={`/pesanan/${order.id}`}
                      className="flex items-center gap-1 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#006591] text-slate-700 hover:text-white text-xs font-bold transition"
                    >
                      <span>Detail</span>
                      <IconArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
