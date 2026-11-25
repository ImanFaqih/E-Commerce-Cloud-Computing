import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  IconPlus,
  IconBox,
  IconPercentage,
  IconSearch,
  IconTag,
  IconAlertTriangle,
} from '@tabler/icons-react';
import Photo from '../components/Photo.jsx';
import { finalPrice, formatRp, useStore } from '../store.jsx';

export default function KelolaMenu() {
  const { menu } = useStore();
  const [query, setQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Semua');

  const categories = ['Semua', ...new Set(menu.map((m) => m.category || 'Lainnya'))];

  const filteredMenu = menu.filter((item) => {
    const matchCat =
      selectedCategory === 'Semua' || (item.category || 'Lainnya') === selectedCategory;
    const matchQuery = item.name.toLowerCase().includes(query.toLowerCase());
    return matchCat && matchQuery;
  });

  return (
    <div className="space-y-6">
      {/* Top Header Banner */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs">
        <div>
          <h1 className="text-xl md:text-2xl font-extrabold text-slate-900 tracking-tight">
            Katalog & Pengelolaan Menu
          </h1>
          <p className="text-slate-500 text-sm mt-1">
            Total <strong>{menu.length}</strong> menu terdaftar · Atur ketersediaan porsi dan harga
            promo diskon
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-2.5">
          <Link
            to="/menu/tambah"
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#006591] hover:bg-[#005175] text-white text-xs font-bold transition shadow-xs"
          >
            <IconPlus size={16} />
            <span>Tambah Menu</span>
          </Link>
          <Link
            to="/menu/stok"
            className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-[#E4F4FC] hover:bg-[#DDEFF9] text-[#006591] text-xs font-bold transition"
          >
            <IconBox size={16} />
            <span>Cek & Ubah Stok</span>
          </Link>
          {menu[0] && (
            <Link
              to={`/menu/promo/${menu[0].id}`}
              className="flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 text-purple-700 text-xs font-bold transition border border-purple-200"
            >
              <IconPercentage size={16} />
              <span>Harga & Promo</span>
            </Link>
          )}
        </div>
      </div>

      {/* Filter Toolbar & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200/80 shadow-2xs">
        {/* Category Filter Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition whitespace-nowrap ${
                  active
                    ? 'bg-[#006591] text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <IconSearch
            size={16}
            className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama menu..."
            className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium text-slate-800 placeholder-slate-400 focus:outline-hidden focus:border-[#006591] focus:bg-white transition"
          />
        </div>
      </div>

      {/* Menu Cards Responsive Grid (1 col on mobile, 2 on sm, 3 on lg, 4 on xl) */}
      {filteredMenu.length === 0 ? (
        <div className="bg-white p-12 text-center rounded-2xl border border-slate-200/80 shadow-2xs">
          <p className="text-sm font-bold text-slate-700">Tidak ada menu yang sesuai pencarian.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {filteredMenu.map((item) => {
            const isSoldOut = item.stock === 0;
            const hasDiscount = item.discount > 0;
            const priceFinal = finalPrice(item);

            return (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo with Overlay Badge */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <Photo
                      file={item.photo}
                      className="h-full w-full object-cover rounded-none"
                      alt={item.name}
                    />

                    {/* Discount badge */}
                    {hasDiscount && (
                      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-black bg-amber-500 text-white shadow-xs">
                        Diskon {item.discount}%
                      </span>
                    )}

                    {/* Stock status overlay pill */}
                    <span
                      className={`absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-extrabold backdrop-blur-md ${
                        isSoldOut
                          ? 'bg-rose-500/90 text-white'
                          : 'bg-white/90 text-slate-800 shadow-2xs'
                      }`}
                    >
                      {isSoldOut ? 'HABIS' : `Stok: ${item.stock} porsi`}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-4 space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-600 block">
                      {item.category || 'Menu Makanan'}
                    </span>
                    <h3 className="font-extrabold text-slate-900 text-base line-clamp-1">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-600 line-clamp-2">
                      {item.description || 'Pilihan lezat favorit pelanggan.'}
                    </p>

                    {/* Price display */}
                    <div className="pt-2 flex items-baseline gap-2">
                      <span className="text-lg font-black text-[#006591]">
                        {formatRp(priceFinal)}
                      </span>
                      {hasDiscount && (
                        <span className="text-xs text-slate-600 line-through">
                          {formatRp(item.basePrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-4 pt-2 border-t border-slate-100 grid grid-cols-2 gap-2">
                  <Link
                    to={`/menu/promo/${item.id}`}
                    className="flex items-center justify-center py-2 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition text-center"
                  >
                    Atur Promo
                  </Link>
                  <Link
                    to="/menu/stok"
                    className="flex items-center justify-center py-2 px-3 rounded-xl bg-[#E4F4FC] hover:bg-[#DDEFF9] text-[#006591] text-xs font-bold transition text-center"
                  >
                    Ubah Stok
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
