import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  IconArrowLeft,
  IconPlus,
  IconCheck,
  IconAlertCircle,
} from '@tabler/icons-react';
import Photo from '../components/Photo.jsx';
import Stepper from '../components/Stepper.jsx';
import { formatRp, useStore } from '../store.jsx';

export default function TambahMenu() {
  const navigate = useNavigate();
  const { addMenu } = useStore();

  const [name, setName] = useState('Dimsum Mentai Panggang');
  const [category, setCategory] = useState('Cemilan & Snack');
  const [description, setDescription] = useState('Dimsum hangat dengan saus mentai gurih lezat, isi 4 pcs.');
  const [price, setPrice] = useState(26000);
  const [stock, setStock] = useState(12);
  const [error, setError] = useState('');

  const handleSave = () => {
    if (!name.trim()) {
      setError('Nama menu wajib diisi.');
      return;
    }

    addMenu({
      id: `${name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`,
      name: name.trim(),
      category: category.trim() || 'Menu Baru',
      description: description.trim(),
      basePrice: price,
      discount: 0,
      stock,
      photo: 'dimsum.png',
    });

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
          Tambah Menu Baru
        </h1>
        <p className="text-slate-500 text-sm mt-1">
          Lengkapi data menu untuk diterbitkan ke katalog pelanggan TokoKu Food.
        </p>
      </div>

      {/* 2-Column Responsive Layout (7 cols Form / 5 cols Live Preview) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Form Column (Left) */}
        <div className="lg:col-span-7 bg-white p-6 rounded-2xl border border-slate-200/80 shadow-2xs space-y-5">
          <h2 className="text-base font-bold text-slate-900 pb-3 border-b border-slate-100">
            Form Informasi Menu
          </h2>

          {/* Nama Menu */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">Nama Menu *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
                setError('');
              }}
              placeholder="Contoh: Ayam Bakar Madu Spesial"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#006591] focus:bg-white transition"
            />
            {error && (
              <p className="text-xs text-rose-600 font-bold flex items-center gap-1 mt-1">
                <IconAlertCircle size={14} />
                <span>{error}</span>
              </p>
            )}
          </div>

          {/* Kategori */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">Kategori Menu</label>
            <input
              type="text"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="Contoh: Cemilan, Nasi & Olahan Ayam, Minuman"
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#006591] focus:bg-white transition"
            />
          </div>

          {/* Deskripsi */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-slate-700 block">Deskripsi Singkat</label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Jelaskan cita rasa, bumbu, atau porsi menu..."
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm font-medium text-slate-800 focus:outline-hidden focus:border-[#006591] focus:bg-white transition resize-none"
            />
          </div>

          {/* Steppers in 2 Columns */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Harga Normal (Rp)</label>
              <Stepper
                label="harga"
                value={price}
                onDec={() => setPrice((p) => Math.max(1000, p - 1000))}
                onInc={() => setPrice((p) => p + 1000)}
                disableDec={price <= 1000}
                unit="Rp"
              />
              <span className="text-[11px] text-slate-400 block">Kelipatan Rp 1.000</span>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-700 block">Stok Awal (Porsi)</label>
              <Stepper
                label="stok"
                value={stock}
                onDec={() => setStock((s) => Math.max(0, s - 1))}
                onInc={() => setStock((s) => s + 1)}
                disableDec={stock <= 0}
                unit="porsi"
              />
              <span className="text-[11px] text-slate-400 block">Jumlah porsi siap masak</span>
            </div>
          </div>

          {/* Buttons */}
          <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate('/menu')}
              className="px-4 py-2.5 rounded-xl border border-slate-200 text-slate-600 hover:bg-slate-100 text-xs font-bold transition"
            >
              Batal
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#006591] hover:bg-[#005175] text-white text-xs font-extrabold shadow-sm transition active:scale-95"
            >
              <IconCheck size={16} />
              <span>Simpan & Publikasikan Menu</span>
            </button>
          </div>
        </div>

        {/* Live Card Preview (Right) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-2xs space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
              Pratinjau Tampilan Menu (Live Preview)
            </h3>
            <p className="text-xs text-slate-400">
              Beginilah tampilan kartu menu yang akan dilihat pelanggan di aplikasi:
            </p>

            <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-xs max-w-sm mx-auto">
              <div className="relative h-44 w-full bg-slate-100">
                <Photo
                  file="dimsum.png"
                  className="h-full w-full object-cover rounded-none"
                  alt="Foto preview"
                />
                <span className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-extrabold bg-white/95 text-slate-800 shadow-2xs">
                  Stok: {stock} porsi
                </span>
              </div>

              <div className="p-4 space-y-1.5">
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  {category || 'Kategori Baru'}
                </span>
                <h4 className="font-extrabold text-slate-900 text-base">
                  {name.trim() || 'Nama Menu Baru'}
                </h4>
                <p className="text-xs text-slate-500 line-clamp-2">
                  {description.trim() || 'Deskripsi menu belum diisi.'}
                </p>
                <div className="pt-2 text-lg font-black text-[#006591]">
                  {formatRp(price)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
