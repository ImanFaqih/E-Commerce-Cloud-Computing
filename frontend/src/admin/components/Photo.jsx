import { useState } from 'react';
import { img } from '../store.jsx';

/**
 * Komponen Foto Menu / Avatar responsif.
 * Jika file gagal dimuat atau belum ada, menampilkan blok warna fallback yang rapi.
 */
export default function Photo({ file, size, width, height, className = '', alt = '' }) {
  const [failed, setFailed] = useState(false);
  const style = {
    ...(size ? { width: size, height: size } : {}),
    ...(width ? { width } : {}),
    ...(height ? { height } : {}),
  };

  if (failed || !file) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 text-slate-400 font-bold text-xs select-none rounded-xl overflow-hidden ${className}`}
        style={style}
        role="img"
        aria-label={alt || 'Foto menu'}
      >
        <span className="opacity-70">🍲</span>
      </div>
    );
  }

  return (
    <img
      className={`object-cover rounded-xl ${className}`}
      style={style}
      src={img(file)}
      alt={alt}
      onError={() => setFailed(true)}
      loading="lazy"
    />
  );
}
