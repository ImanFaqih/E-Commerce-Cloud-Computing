import { createContext, useContext, useMemo, useState } from 'react';

/** Path ke gambar di folder public/images */
export const img = (file) => `${import.meta.env.BASE_URL}images/${file}`;

export const formatRp = (n) => 'Rp ' + Number(n).toLocaleString('id-ID');

/** Harga yang dilihat pelanggan = harga normal dikurangi diskon */
export const finalPrice = (item) =>
  Math.round((item.basePrice * (100 - item.discount)) / 100);

const initialMenu = [
  {
    id: 'ayam-bakar',
    name: 'Ayam Bakar Madu Komplit',
    category: 'Nasi & Olahan Ayam',
    description: 'Ayam bakar dengan bumbu madu gurih manis, lalapan dan sambal.',
    basePrice: 35000,
    discount: 20,
    stock: 15,
    photo: 'ayam-bakar.png',
  },
  {
    id: 'es-kopi',
    name: 'Es Kopi Susu Gula Aren',
    category: 'Kopi & Minuman',
    description: 'Espresso robusta & arabika dipadu susu creamy dan gula aren murni.',
    basePrice: 18000,
    discount: 0,
    stock: 40,
    photo: 'es-kopi.png',
  },
  {
    id: 'bakso-urat',
    name: 'Bakso Urat Jumbo',
    category: 'Aneka Mie & Bakso',
    description: 'Bakso urat sapi super kenyal disajikan dengan kuah kaldu gurih hangat.',
    basePrice: 25000,
    discount: 0,
    stock: 0,
    photo: 'bakso-urat.png',
  },
];

const initialOrders = [
  {
    id: 'TKF-89215',
    customer: 'Siti Rahma',
    time: '12.42',
    menus: 2,
    portions: 3,
    status: 'Baru',
    total: 64000,
    photo: 'ayam-bakar.png',
    detail: {
      date: '23 Nov 2026, 12.42 · Pesanan Pesan Antar',
      address: 'Jl. Melati No. 12, RT 04/RW 02, Jakarta Selatan',
      payment: 'Pembayaran GoPay · Lunas',
      note: 'Sambal dipisah ya. Kopi less sugar, normal ice.',
      items: [
        { name: 'Ayam Bakar Madu Komplit', qty: 1, price: 28000, photo: 'ayam-bakar.png' },
        { name: 'Es Kopi Susu Gula Aren', qty: 2, price: 18000, photo: 'es-kopi.png' },
      ],
    },
  },
  {
    id: 'TKF-89214',
    customer: 'Budi Santoso',
    time: '12.35',
    menus: 2,
    portions: 3,
    status: 'Diantar',
    total: 64000,
    photo: 'ayam-bakar.png',
    detail: {
      date: '23 Nov 2026, 12.35 · Pesanan Kurir Express',
      address: 'Gedung Wisma Niaga Lt. 5, Jl. Sudirman Kav. 45',
      payment: 'Pembayaran QRIS · Lunas',
      note: 'Tolong titip di resepsionis lantai dasar.',
      items: [
        { name: 'Ayam Bakar Madu Komplit', qty: 2, price: 28000, photo: 'ayam-bakar.png' },
        { name: 'Es Kopi Susu Gula Aren', qty: 1, price: 18000, photo: 'es-kopi.png' },
      ],
    },
  },
  {
    id: 'TKF-89213',
    customer: 'Andi Pratama',
    time: '12.28',
    menus: 1,
    portions: 2,
    status: 'Dimasak',
    total: 50000,
    photo: 'bakso-pesanan.png',
    detail: {
      date: '23 Nov 2026, 12.28 · Pesanan Ambil di Resto',
      address: 'Ambil Sendiri (Takeaway di Resto)',
      payment: 'Pembayaran Mandiri VA · Lunas',
      note: 'Kuah dipisah, banyakin daun bawang dan bawang goreng.',
      items: [
        { name: 'Bakso Urat Jumbo Kuah Kaldu', qty: 2, price: 25000, photo: 'bakso-pesanan.png' },
      ],
    },
  },
];

const Ctx = createContext(null);

export function StoreProvider({ children }) {
  const [menu, setMenu] = useState(initialMenu);
  const [orders, setOrders] = useState(initialOrders);

  const value = useMemo(
    () => ({
      menu,
      orders,
      stats: { revenue: 2480000, growth: '+12,8%', ordersToday: 48, active: 8 },
      addMenu: (item) => setMenu((m) => [...m, item]),
      updateMenu: (id, patch) =>
        setMenu((m) => m.map((x) => (x.id === id ? { ...x, ...patch } : x))),
      updateStocks: (stocks) =>
        setMenu((m) => m.map((x) => (x.id in stocks ? { ...x, stock: stocks[x.id] } : x))),
      acceptOrder: (id) =>
        setOrders((o) => o.map((x) => (x.id === id ? { ...x, status: 'Dimasak' } : x))),
    }),
    [menu, orders]
  );

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useStore = () => useContext(Ctx);
