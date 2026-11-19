import React from "react";

// ── Existing icons ──────────────────────────────────────────────
export const IconArrowRight = ({ className, size, stroke = 2.5, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12l14 0" /><path d="M13 18l6-6" /><path d="M13 6l6 6" />
  </svg>
);

export const IconArrowLeft = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12l14 0" /><path d="M5 12l6 6" /><path d="M5 12l6-6" />
  </svg>
);

export const IconMicrophone = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="9" y="3" width="6" height="12" rx="3" />
    <path d="M5 11a7 7 0 0 0 14 0" /><path d="M12 18v3" />
  </svg>
);

export const IconAdjustmentsHorizontal = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 6h10" /><path d="M4 12h4" /><path d="M4 18h8" />
    <circle cx="17" cy="6" r="3" /><circle cx="11" cy="12" r="3" /><circle cx="15" cy="18" r="3" />
  </svg>
);

export const IconMapPin = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 22s7-6.5 7-12a7 7 0 0 0-14 0c0 5.5 7 12 7 12z" />
    <circle cx="12" cy="10" r="2.5" fill="#fff" />
  </svg>
);

export const IconPencil = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" />
    <path d="M13.5 6.5l4 4" />
  </svg>
);

export const IconX = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M18 6l-12 12" /><path d="M6 6l12 12" />
  </svg>
);

export const IconTrash = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" />
    <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
    <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
  </svg>
);

export const IconNotes = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 4h14v11l-5 5h-9v-16z" /><path d="M14 20v-5h5" /><path d="M8 9h8" /><path d="M8 13h4" />
  </svg>
);

export const IconAlertTriangle = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2l10 18h-20z" />
    <path d="M12 9v5m0 3v.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
  </svg>
);

export const IconMinus = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12l14 0" />
  </svg>
);

export const IconTicket = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4z" />
    <path d="M10 7v10" stroke="#fff" strokeWidth="1.5" strokeDasharray="2 2" />
  </svg>
);

export const IconTag = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M3 12v-8h8l10 10-8 8z" /><circle cx="7.5" cy="8.5" r="1.5" fill="#fff" />
  </svg>
);

export const IconInfoCircle = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M12 11v6m0 -4.5v-.01" />
  </svg>
);

export const IconCircleCheck = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M9 12l2 2l4 -4" />
  </svg>
);

export const IconPhone = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
  </svg>
);

export const IconCrown = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 6l4 6l5 -4l-2 10h-14l-2 -10l5 4z" />
  </svg>
);

export const IconMotorbike = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="5" cy="16" r="3" /><circle cx="19" cy="16" r="3" />
    <path d="M7.5 14h5l4 -4h-10.5m2 4l1.5 -6h4l1.5 2h3" />
  </svg>
);

export const IconNavigation = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2l8 19l-8 -4l-8 4z" />
  </svg>
);

export const IconMessageDots = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 21v-13a3 3 0 0 1 3 -3h10a3 3 0 0 1 3 3v6a3 3 0 0 1 -3 3h-9l-4 4" />
    <path d="M12 11l0 .01" /><path d="M8 11l0 .01" /><path d="M16 11l0 .01" />
  </svg>
);

export const IconChefHat = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3c2.5 0 4 1.8 4 4a4 4 0 0 1 2 7.5v3.5h-12v-3.5a4 4 0 0 1 2 -7.5c0 -2.2 1.5 -4 4 -4z" />
    <path d="M7.5 14h9" />
  </svg>
);

export const IconCreditCard = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <rect x="3" y="5" width="18" height="14" rx="3" />
    <path d="M3 10h18" /><path d="M7 15h.01" /><path d="M11 15h2" />
  </svg>
);

export const IconHeart = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
  </svg>
);

export const IconHelpCircle = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" /><path d="M12 17l0 .01" />
    <path d="M12 13.5a1.5 1.5 0 0 1 1 -1.5a2.6 2.6 0 1 0 -3 -2" />
  </svg>
);

export const IconShieldLock = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3a12 12 0 0 0 8.5 3a12 12 0 0 1 -8.5 15a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3" />
    <circle cx="12" cy="11" r="1" /><path d="M12 12v2.5" />
  </svg>
);

export const IconFileText = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
    <path d="M9 9h1" /><path d="M9 13h6" /><path d="M9 17h6" />
  </svg>
);

export const IconLogout = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
    <path d="M9 12h12l-3 -3" /><path d="M18 15l3 -3" />
  </svg>
);

export const IconEye = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0-4 0" />
    <path d="M21 12c-2.4 4-5.4 6-9 6c-3.6 0-6.6-2-9-6c2.4-4 5.4-6 9-6c3.6 0 6.6 2 9 6" />
  </svg>
);

export const IconEyeOff = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828" />
    <path d="M16.681 16.673a8.717 8.717 0 0 1-4.681 1.327c-3.6 0-6.6-2-9-6 1.272-2.12 2.712-3.678 4.32-4.674m2.86-1.146a9.055 9.055 0 0 1 1.82-.18c3.6 0 6.6 2 9 6-.666 1.11-1.379 2.067-2.138 2.87" />
    <path d="M3 3l18 18" />
  </svg>
);

export const IconLock = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 13a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-6z" />
    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
  </svg>
);

export const IconMail = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z" />
    <path d="M3 7l9 6l9-6" />
  </svg>
);

export const IconMessage = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm0 18.16c-1.49 0-2.95-.4-4.22-1.16l-.3-.18-3.13.82.83-3.05-.2-.32a8.214 8.214 0 01-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 4.54 0 8.24 3.7 8.24 8.24 0 4.54-3.7 8.24-8.24 8.24z" />
  </svg>
);

// ── Dashboard icons ──────────────────────────────────────────────
export const IconBolt = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M13 3l-9 11h8l-1 7l9-11h-8l1-7z" />
  </svg>
);

export const IconBowlChopsticks = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 11h16a1 1 0 0 1 1 1v.5c0 2.5-2.5 4.5-5 4.5h-8c-2.5 0-5-2-5-4.5v-.5a1 1 0 0 1 1-1z" />
    <path d="M12 11v-7" />
    <path d="M9 5l3 3l3-3" />
    <path d="M4.5 15.5l-1.5 4" />
    <path d="M19.5 15.5l1.5 4" />
  </svg>
);

export const IconBurger = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M4 7h16" /><path d="M4 10h16" /><path d="M4 13h16" />
    <path d="M5 17a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1h-14v1z" />
    <path d="M4 7a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4" />
  </svg>
);

export const IconChevronDown = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 9l6 6l6-6" />
  </svg>
);

export const IconChevronRight = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M9 6l6 6l-6 6" />
  </svg>
);

export const IconCake = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 20h18" />
    <path d="M3 14h18v3a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-3z" />
    <path d="M3 14a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3" />
    <path d="M12 4a1 1 0 0 1 1 1v2a1 1 0 0 1-2 0V5a1 1 0 0 1 1-1z" />
    <path d="M12 7c0 1.5-1.5 2-1.5 3.5" />
    <path d="M12 7c0 1.5 1.5 2 1.5 3.5" />
  </svg>
);

export const IconCoffee = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 14c.83 2.3 1.72 3.75 2.5 4.5A5 5 0 0 0 9 20h6a5 5 0 0 0 3.5-1.5c.78-.75 1.67-2.2 2.5-4.5H3z" />
    <path d="M3 10h18v4H3z" />
    <path d="M18 10V6a2 2 0 0 1 2 2v2" />
    <path d="M8 6v-1" /><path d="M12 6v-1" />
  </svg>
);

export const IconCookie = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21a9 9 0 1 1 0-18c0 2 1 3 2.5 4s3.5 1 3.5 3c-1 0-2 1-2 2s1 2 2 2a9 9 0 0 1-6 7z" />
    <path d="M8 11v.01" /><path d="M8 15v.01" /><path d="M12 13v.01" />
  </svg>
);

export const IconFlame = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 12c2-2.96 0-7-1-8c0 3.038-1.773 4.741-3 6c-1.226 1.26-2 3.24-2 5a6 6 0 0 0 12 0c0-1.532-1.056-3.94-2-5c-1.786 3-2.791 3-4 2z" />
  </svg>
);

export const IconHome = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12l-2 0l9-9l9 9l-2 0" />
    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7" />
    <path d="M9 21v-6a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6" />
  </svg>
);

export const IconBan = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M5.7 5.7l12.6 12.6" />
  </svg>
);

export const IconPlus = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 5l0 14" /><path d="M5 12l14 0" />
  </svg>
);

export const IconSearch = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="10" cy="10" r="7" /><path d="M21 21l-6-6" />
  </svg>
);

export const IconShoppingBag = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M6 2l1.5 2h9L18 2" />
    <path d="M4 6h16l-2 14H6z" />
    <path d="M9 10a3 3 0 0 0 6 0" />
  </svg>
);

export const IconSoup = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9z" />
    <path d="M12 3l-1 6" />
    <path d="M15 3l-1 6" />
    <path d="M9 3l-1 6" />
  </svg>
);

export const IconStarFilled = ({ className, size, stroke = 0, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="currentColor" stroke="none" {...p}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87l1.18 6.88L12 17.77l-6.18 3.25L7 14.14L2 9.27l6.91-1.01z" />
  </svg>
);

export const IconTools = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 21l13-13" />
    <path d="M14.5 5.5a4.243 4.243 0 0 1 6 6" />
    <path d="M3 21a4 4 0 0 0 4-4" />
    <path d="M12.5 20.5a4 4 0 0 0 5-5" />
    <path d="M20 17l-5-5" />
  </svg>
);

export const IconTruckDelivery = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="7" cy="17" r="2" /><circle cx="17" cy="17" r="2" />
    <path d="M5 17H3v-4M2 5h11v12m-4 0h6m0 0v-5l-3-4H13m5 9V9" />
  </svg>
);

export const IconUser = ({ className, size, stroke = 2, ...p }) => (
  <svg className={className} width={size || 24} height={size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="7" r="4" />
    <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
  </svg>
);
