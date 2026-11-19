import { useState } from "react";
import {
  IconArrowLeft,
  IconChevronDown,
  IconChevronRight,
  IconHome,
  IconMapPin,
  IconMinus,
  IconNotes,
  IconPencil,
  IconPlus,
  IconShoppingBag,
  IconTag,
  IconTicket,
  IconTools,
  IconTrash,
  IconUser,
  IconX,
  IconAlertTriangle,
  IconCircleCheck,
  IconInfoCircle,
} from "@tabler/icons-react";

const KUPON = { kode: "MAKANPUAS", minBelanja: 50000, diskon: 15000, freeOngkir: true };
const ONGKIR = 10000;
const LAYANAN = 2000;

const initialItems = [
  {
    id: 1,
    nama: "Ayam Bakar Madu Komplit",
    catatan: "Sambal dipisah, paha",
    harga: 28000,
    hargaCoret: 35000,
    diskon: "-20%",
    qty: 1,
    max: 99,
    stok: "Stok Dapur Aman",
    img: "/assets/menu-ayam.png",
    pilih: true,
  },
  {
    id: 2,
    nama: "Es Kopi Susu Gula Aren",
    catatan: "Less sugar, normal ice",
    harga: 18000,
    satuan: "cup",
    qty: 2,
    max: 40,
    stok: "Sisa 40 porsi",
    img: "/assets/menu-kopi.png",
    pilih: true,
  },
  {
    id: 3,
    nama: "Dimsum Mentai Panggang…",
    catatan: "Ekstra saus mentai bakar",
    harga: 26000,
    qty: 1,
    max: 2,
    urgent: true,
    img: "/assets/cat-cemilan.png",
    pilih: true,
  },
];

const ADDONS = [
  { id: 101, nama: "Es Teh Manis", desk: "Segar melati", harga: 5000, img: "/assets/cat-kopi.png" },
  { id: 102, nama: "Kerupuk Putih", desk: "Garing renyah", harga: 3000, img: "/assets/cat-paket.png" },
];

const rp = (n) => "Rp " + n.toLocaleString("id-ID");

export default function Keranjang({ onBackToDashboard, onOpenExplorer, onOpenAccount, onLogout }) {
  const [items, setItems] = useState(initialItems);

  // Kalkulasi
  const dipilih = items.filter((i) => i.pilih);
  const subtotal = dipilih.reduce((s, i) => s + i.harga * i.qty, 0);
  const kuponOk = subtotal >= KUPON.minBelanja;
  const diskon = kuponOk ? KUPON.diskon : 0;
  const gratisOngkir = kuponOk && KUPON.freeOngkir;
  const ongkir = gratisOngkir || subtotal === 0 ? 0 : ONGKIR;
  const layanan = subtotal > 0 ? LAYANAN : 0;
  const total = subtotal - diskon + ongkir + layanan;

  const semuaDipilih = items.length > 0 && dipilih.length === items.length;

  // Actions
  const handleTogglePick = (id) => {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, pilih: !i.pilih } : i))
    );
  };

  const handleToggleSelectAll = () => {
    const target = !semuaDipilih;
    setItems((prev) => prev.map((i) => ({ ...i, pilih: target })));
  };

  const handleQtyChange = (id, delta) => {
    setItems((prev) =>
      prev.map((i) => {
        if (i.id !== id) return i;
        const newQty = i.qty + delta;
        if (newQty < 1 || newQty > i.max) return i;
        return { ...i, qty: newQty };
      })
    );
  };

  const handleDeleteItem = (id) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  };

  const handleClearAll = () => {
    if (window.confirm("Kosongkan semua keranjang?")) {
      setItems([]);
    }
  };

  const handleAddAddon = (addon) => {
    setItems((prev) => {
      const existing = prev.find((i) => i.id === addon.id);
      if (existing) {
        return prev.map((i) =>
          i.id === addon.id ? { ...i, qty: Math.min(i.qty + 1, 20) } : i
        );
      }
      return [
        ...prev,
        {
          id: addon.id,
          nama: addon.nama,
          catatan: addon.desk,
          harga: addon.harga,
          qty: 1,
          max: 20,
          stok: "Pelengkap",
          img: addon.img,
          pilih: true,
        },
      ];
    });
  };

  return (
    <div className="min-h-screen bg-[#FAF8FF] text-[#131B2E] font-sans antialiased">
      {/* ── Header ── */}
      <header className="fixed inset-x-0 top-0 z-20 bg-white/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-between gap-3 px-4">
          <div className="flex items-center gap-2">
            <button
              onClick={onBackToDashboard}
              aria-label="Kembali"
              className="flex size-9 items-center justify-center rounded-xl bg-[#F2F3FF] text-[#006591] transition hover:bg-[#EAEDFF]"
            >
              <IconArrowLeft size={18} />
            </button>
            <div className="flex flex-col">
              <img
                src="/logo.jpg"
                alt="My Food Buy And Eat"
                className="h-9 w-auto object-contain object-left"
              />
              <button className="flex items-center gap-0.5 py-0.5 text-xs text-[#3E4850]">
                <span className="font-medium">Antar ke:</span>
                <span className="max-w-[130px] truncate font-bold text-[#131B2E]">
                  Jl. Sudirman No. 45
                </span>
                <IconChevronDown size={10} className="text-[#0EA5E9]" />
              </button>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative flex size-11 items-center justify-center text-[#0EA5E9]">
              <IconShoppingBag size={20} />
              <span className="absolute right-1 top-1 flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-[#BB0112] px-1 text-[10px] font-bold text-white">
                {items.length}
              </span>
            </div>

            <button
              onClick={onOpenAccount}
              title="Akun Saya"
              className="flex size-8 items-center justify-center rounded-full bg-[#006591] text-sm font-bold text-white shadow-sm transition hover:ring-2 hover:ring-[#0EA5E9]"
            >
              U
            </button>
          </div>
        </div>
      </header>

      {/* ── Main Content ── */}
      <main className="mx-auto max-w-3xl pb-40 pt-20 px-4">
        {/* Judul + Alamat */}
        <section className="pt-2">
          <div className="flex items-center justify-between">
            <p className="text-base font-bold text-[#131B2E]">
              Keranjang Belanja{" "}
              <span className="text-xs font-semibold text-[#0EA5E9]">
                {items.length} menu
              </span>
            </p>
            {items.length > 0 && (
              <button
                onClick={handleClearAll}
                className="text-xs font-semibold text-[#BB0112] hover:underline"
              >
                Hapus Semua
              </button>
            )}
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-white p-3 shadow-sm border border-[#E2E7FF]/60">
            <div className="flex items-center gap-2 text-xs">
              <span className="text-[#BB0112]">
                <IconMapPin size={16} />
              </span>
              <span className="text-[#3E4850]">Antar ke:</span>
              <b className="font-bold text-[#131B2E]">Jl. Sudirman No. 45</b>
            </div>
            <button className="text-[#0EA5E9] hover:text-[#006591]">
              <IconPencil size={15} />
            </button>
          </div>
        </section>

        {/* Jika Keranjang Kosong */}
        {items.length === 0 ? (
          <section className="mt-8 flex flex-col items-center justify-center py-12 text-center">
            <div className="flex size-20 items-center justify-center rounded-full bg-[#EAEDFF] text-[#006591]">
              <IconShoppingBag size={36} />
            </div>
            <h2 className="mt-4 text-base font-bold text-[#131B2E]">
              Keranjangmu masih kosong
            </h2>
            <p className="mt-1 text-xs text-[#6E7881]">
              Yuk pilih menu favoritmu dulu di eksplorasi makanan.
            </p>
            <button
              onClick={onOpenExplorer}
              className="mt-5 rounded-xl bg-[#0EA5E9] px-6 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#0284C7]"
            >
              Jelajahi Menu
            </button>
          </section>
        ) : (
          <>
            {/* Toko + Pilih Semua */}
            <section className="mt-4 rounded-xl bg-white p-3 shadow-sm border border-[#E2E7FF]/60">
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={semuaDipilih}
                    onChange={handleToggleSelectAll}
                    className="size-4.5 rounded border-[#767676] accent-[#0EA5E9]"
                  />
                  <b className="text-xs font-bold text-[#131B2E]">
                    TokoKu Food Official
                  </b>
                  <span className="rounded bg-[#C9E6FF] px-1.5 py-0.5 text-[10px] font-bold text-[#006591]">
                    Resmi
                  </span>
                </label>
                <button
                  onClick={handleToggleSelectAll}
                  className="text-xs font-medium text-[#0EA5E9] hover:underline"
                >
                  Pilih semua
                </button>
              </div>
              <p className="mt-1.5 flex items-center gap-1.5 text-[11px] text-[#006E2F] font-medium">
                <span className="size-1.5 rounded-full bg-[#006E2F]" />
                Dapur Buka • Siap Antar Kilat 20 Mnt
              </p>
            </section>

            {/* Daftar Item Keranjang */}
            <section className="mt-3 flex flex-col gap-3">
              {items.map((it) => {
                const totalItemPrice = it.harga * it.qty;
                return (
                  <article
                    key={it.id}
                    className={`flex flex-col rounded-xl bg-white p-3 shadow-sm border transition ${
                      it.urgent
                        ? "border-[#F59E0B]/50 bg-amber-50/20"
                        : "border-[#E2E7FF]/60"
                    }`}
                  >
                    {it.urgent && (
                      <div className="mb-2.5 flex items-center gap-1.5 rounded-lg bg-amber-100/60 px-2.5 py-1 text-[11px] font-semibold text-amber-800">
                        <IconAlertTriangle size={14} className="text-amber-600 shrink-0" />
                        <span>
                          Sisa {it.max} porsi terakhir di dapur! Amankan segera.
                        </span>
                      </div>
                    )}

                    <div className="flex items-start gap-3">
                      <input
                        type="checkbox"
                        checked={it.pilih}
                        onChange={() => handleTogglePick(it.id)}
                        className="mt-1 size-4.5 rounded border-[#767676] accent-[#0EA5E9]"
                      />

                      <div className="relative size-20 shrink-0 overflow-hidden rounded-lg bg-[#EAEDFF]">
                        <img
                          src={it.img}
                          alt={it.nama}
                          className="h-full w-full object-cover"
                        />
                        {it.diskon && (
                          <span className="absolute left-1 top-1 rounded bg-[#BB0112] px-1 text-[9px] font-bold text-white">
                            {it.diskon}
                          </span>
                        )}
                      </div>

                      <div className="flex flex-1 flex-col justify-between min-w-0">
                        <div className="flex items-start justify-between gap-1">
                          <h2 className="truncate text-xs font-bold text-[#131B2E]">
                            {it.nama}
                          </h2>
                          <button
                            onClick={() => handleDeleteItem(it.id)}
                            className="text-[#6E7881] hover:text-[#BB0112] p-0.5"
                            aria-label="Hapus item"
                          >
                            {it.urgent ? <IconTrash size={15} /> : <IconX size={15} />}
                          </button>
                        </div>

                        <p className="mt-0.5 flex items-center gap-1 text-[11px] text-[#6E7881]">
                          {it.urgent ? (
                            <IconCircleCheck size={12} className="text-[#006E2F]" />
                          ) : (
                            <IconNotes size={12} />
                          )}
                          <span className="truncate">{it.catatan}</span>
                        </p>

                        <div className="mt-2 flex items-baseline gap-1.5">
                          <b className="text-sm font-extrabold text-[#0EA5E9]">
                            {rp(totalItemPrice)}
                          </b>
                          {it.hargaCoret && (
                            <s className="text-[11px] text-[#6E7881]">
                              {rp(it.hargaCoret * it.qty)}
                            </s>
                          )}
                          {it.satuan && (
                            <small className="text-[10px] text-[#6E7881]">
                              ({rp(it.harga)}/{it.satuan})
                            </small>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Action Bar (Stok & Stepper) */}
                    <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-2.5">
                      <div>
                        {!it.urgent && (
                          <span className="inline-flex items-center gap-1 rounded bg-[#6BFF8F]/20 px-2 py-0.5 text-[10px] font-semibold text-[#006E2F]">
                            <span className="size-1.5 rounded-full bg-[#006E2F]" />
                            {it.stok}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 rounded-lg bg-[#F2F3FF] px-2 py-1">
                        <button
                          type="button"
                          onClick={() => handleQtyChange(it.id, -1)}
                          disabled={it.qty <= 1}
                          className="flex size-5 items-center justify-center rounded text-[#3E4850] disabled:opacity-40"
                          aria-label="Kurangi porsi"
                        >
                          <IconMinus size={12} stroke={3} />
                        </button>
                        <b className="min-w-[18px] text-center text-xs font-bold text-[#131B2E]">
                          {it.qty}
                        </b>
                        <button
                          type="button"
                          onClick={() => handleQtyChange(it.id, 1)}
                          disabled={it.qty >= it.max}
                          className="flex size-5 items-center justify-center rounded text-[#0EA5E9] disabled:opacity-40"
                          aria-label="Tambah porsi"
                        >
                          <IconPlus size={12} stroke={3} />
                        </button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </section>

            {/* Add-ons */}
            <section className="mt-5">
              <div className="flex items-center justify-between pb-2.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#0EA5E9]">
                    <IconTools size={16} />
                  </span>
                  <h3 className="text-xs font-bold text-[#131B2E]">
                    Tambah pelengkap makanmu?
                  </h3>
                </div>
                <span className="text-[11px] text-[#6E7881]">Pilihan Kasir</span>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {ADDONS.map((a) => (
                  <div
                    key={a.id}
                    className="flex flex-col justify-between rounded-xl bg-white p-2.5 shadow-sm border border-[#E2E7FF]/60"
                  >
                    <div className="flex items-center gap-2">
                      <div className="size-12 shrink-0 overflow-hidden rounded-lg bg-[#EAEDFF]">
                        <img
                          src={a.img}
                          alt={a.nama}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="truncate text-xs font-bold text-[#131B2E]">
                          {a.nama}
                        </h4>
                        <p className="truncate text-[10px] text-[#6E7881]">
                          {a.desk}
                        </p>
                        <b className="text-xs font-extrabold text-[#0EA5E9]">
                          {rp(a.harga)}
                        </b>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleAddAddon(a)}
                      className="mt-2 flex w-full items-center justify-center gap-1 rounded-lg bg-[#C9E6FF] py-1 text-[11px] font-bold text-[#006591] transition hover:bg-[#0EA5E9] hover:text-white"
                    >
                      <IconPlus size={12} />
                      Tambah
                    </button>
                  </div>
                ))}
              </div>
            </section>

            {/* Voucher */}
            <section className="mt-4">
              <div className="flex items-center justify-between rounded-xl bg-gradient-to-r from-[#0EA5E9]/15 to-[#006591]/15 p-3 border border-[#0EA5E9]/30">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-xl bg-[#0EA5E9] text-white shadow-sm">
                    <IconTicket size={18} />
                  </span>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="rounded bg-[#006591] px-1.5 py-0.2 text-[10px] font-extrabold text-white">
                        {KUPON.kode}
                      </span>
                      <b className="text-xs font-bold text-[#131B2E]">
                        Min. Rp 50.000
                      </b>
                    </div>
                    <p className="text-[11px] text-[#3E4850]">
                      Gratis ongkir untuk pesanan ini
                    </p>
                  </div>
                </div>
                <IconChevronRight size={14} className="text-[#006591]" />
              </div>
            </section>

            {/* Ringkasan Pembayaran */}
            <section className="mt-4 rounded-xl bg-white p-3.5 shadow-sm border border-[#E2E7FF]/60">
              <h3 className="text-xs font-bold text-[#131B2E] pb-2 border-b border-slate-100">
                Ringkasan Pembayaran
              </h3>
              <div className="mt-2.5 flex flex-col gap-2 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-[#3E4850]">Subtotal menu</span>
                  <b className="font-bold text-[#131B2E]">{rp(subtotal)}</b>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[#3E4850]">
                    Diskon Promo Kupon <IconTag size={12} className="text-[#BB0112]" />
                  </span>
                  <b className="font-bold text-[#BB0112]">−{rp(diskon)}</b>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5 text-[#3E4850]">
                    Ongkir Kilat Thermal{" "}
                    {gratisOngkir && (
                      <em className="not-italic rounded bg-emerald-100 px-1 text-[10px] font-bold text-emerald-700">
                        Gratis
                      </em>
                    )}
                  </span>
                  <span>
                    {gratisOngkir && (
                      <s className="mr-1.5 text-[11px] text-[#6E7881]">
                        {rp(ONGKIR)}
                      </s>
                    )}
                    <b
                      className={`font-bold ${
                        ongkir === 0 ? "text-emerald-700" : "text-[#131B2E]"
                      }`}
                    >
                      {rp(ongkir)}
                    </b>
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1 text-[#3E4850]">
                    Biaya Layanan &amp; Kemasan Higienis{" "}
                    <IconInfoCircle size={12} className="text-[#6E7881]" />
                  </span>
                  <b className="font-bold text-[#131B2E]">{rp(layanan)}</b>
                </div>
              </div>

              <div className="mt-3 flex items-center justify-between border-t border-slate-100 pt-3">
                <div>
                  <b className="text-xs font-bold text-[#131B2E]">Total Pembayaran</b>
                  <p className="text-[10px] text-[#6E7881]">
                    {kuponOk
                      ? "Hemat dari kupon dan gratis ongkir."
                      : `Tambah ${rp(KUPON.minBelanja - subtotal)} lagi untuk kupon ${KUPON.kode}.`}
                  </p>
                </div>
                <strong className="text-base font-extrabold text-[#0EA5E9]">
                  {rp(total)}
                </strong>
              </div>
            </section>
          </>
        )}
      </main>

      {/* ── Fixed Checkout Bar ── */}
      {items.length > 0 && (
        <div className="fixed inset-x-0 bottom-16 z-20 bg-white/95 border-t border-[#E2E7FF]/80 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-3xl items-center justify-between px-4">
            <div>
              <p className="text-[11px] text-[#6E7881]">Total Pembayaran:</p>
              <p className="text-base font-extrabold text-[#0EA5E9] leading-tight">
                {rp(total)}
              </p>
              {gratisOngkir && (
                <p className="text-[10px] font-semibold text-[#006E2F]">
                  Gratis ongkir
                </p>
              )}
            </div>
            <button
              type="button"
              disabled={dipilih.length === 0}
              onClick={() => alert(`Lanjut Pembayaran: ${rp(total)}`)}
              className="flex items-center gap-1.5 rounded-xl bg-[#0EA5E9] px-4 py-2.5 text-xs font-bold text-white shadow transition hover:bg-[#0284C7] disabled:opacity-50"
            >
              Lanjut Pembayaran{" "}
              <span className="flex size-4.5 items-center justify-center rounded-full bg-white/20 text-[10px]">
                {dipilih.length}
              </span>
            </button>
          </div>
        </div>
      )}

      {/* ── Bottom Nav ── */}
      <nav className="fixed inset-x-0 bottom-0 z-20 bg-white/95 shadow-[0_-2px_10px_rgba(0,0,0,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-3xl items-center justify-around px-2">
          <button
            onClick={onBackToDashboard}
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <IconHome size={18} />
            Beranda
          </button>

          <button
            onClick={onOpenExplorer}
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <IconTools size={18} />
            Kategori
          </button>

          <button className="relative flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#0EA5E9] font-bold">
            <span className="relative">
              <IconShoppingBag size={18} />
              <span className="absolute -right-2 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#BB0112] px-1 text-[9px] font-bold text-white">
                {items.length}
              </span>
            </span>
            Keranjang
          </button>

          <button
            onClick={onOpenAccount}
            className="flex h-12 w-16 flex-col items-center justify-center gap-0.5 text-xs text-[#3E4850] transition hover:text-[#0EA5E9]"
          >
            <IconUser size={18} />
            Akun
          </button>
        </div>
      </nav>
    </div>
  );
}
