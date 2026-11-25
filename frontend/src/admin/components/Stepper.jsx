/**
 * Stepper angka responsif (− dan +) untuk pengaturan stok, harga, dan diskon.
 */
export default function Stepper({
  value,
  onDec,
  onInc,
  label,
  big = false,
  disableDec = false,
  disableInc = false,
  unit = '',
}) {
  return (
    <div
      className={`inline-flex items-center border border-slate-200 rounded-xl bg-white shadow-2xs overflow-hidden ${
        big ? 'p-1.5' : 'p-1'
      }`}
      role="group"
      aria-label={label}
    >
      <button
        type="button"
        className={`flex items-center justify-center rounded-lg bg-slate-100 text-slate-700 font-bold transition hover:bg-slate-200 active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
          big ? 'h-10 w-10 text-xl' : 'h-8 w-8 text-base'
        }`}
        onClick={onDec}
        disabled={disableDec}
        aria-label={`Kurangi ${label}`}
      >
        −
      </button>

      <div
        className={`flex items-center justify-center font-bold text-slate-900 px-3 text-center ${
          big ? 'min-w-[80px] text-lg' : 'min-w-[56px] text-sm'
        }`}
      >
        <span>{Number(value).toLocaleString('id-ID')}</span>
        {unit && <span className="ml-1 text-xs text-slate-600 font-normal">{unit}</span>}
      </div>

      <button
        type="button"
        className={`flex items-center justify-center rounded-lg bg-[#006591] text-white font-bold transition hover:bg-[#005175] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
          big ? 'h-10 w-10 text-xl' : 'h-8 w-8 text-base'
        }`}
        onClick={onInc}
        disabled={disableInc}
        aria-label={`Tambah ${label}`}
      >
        +
      </button>
    </div>
  );
}
