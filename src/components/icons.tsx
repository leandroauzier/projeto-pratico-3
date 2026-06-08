type IconProps = {
  className?: string;
};

/**
 * Ícones de linha minimalistas e genéricos (sem qualquer marca real),
 * usados como ilustração dos produtos na vitrine virtual.
 */
export function ProductIcon({ name, className }: { name: string; className?: string }) {
  const props = { className: className ?? "w-10 h-10", strokeWidth: 1.6 };

  switch (name) {
    case "caderno":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="11" y="7" width="26" height="34" rx="2" />
          <line x1="11" y1="13" x2="37" y2="13" />
          <line x1="17" y1="20" x2="31" y2="20" />
          <line x1="17" y1="26" x2="31" y2="26" />
          <line x1="17" y1="32" x2="27" y2="32" />
          <line x1="11" y1="7" x2="11" y2="41" strokeWidth="3" />
        </svg>
      );
    case "caneta":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 32 L30 18 L36 24 L22 38 L14 40 Z" />
          <line x1="27" y1="21" x2="33" y2="27" />
          <line x1="32" y1="14" x2="36" y2="18" />
        </svg>
      );
    case "lapis":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 34 L30 18 L36 24 L20 40 Z" />
          <path d="M14 34 L12 41 L19 39 Z" />
          <line x1="27" y1="21" x2="33" y2="27" />
        </svg>
      );
    case "borracha":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="16" width="24" height="16" rx="3" transform="rotate(-12 24 24)" />
          <line x1="17" y1="22" x2="31" y2="18" />
        </svg>
      );
    case "mouse":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="17" y="9" width="14" height="30" rx="7" />
          <line x1="24" y1="9" x2="24" y2="20" />
        </svg>
      );
    case "teclado":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="8" y="15" width="32" height="18" rx="2" />
          <line x1="13" y1="21" x2="15" y2="21" />
          <line x1="18" y1="21" x2="20" y2="21" />
          <line x1="23" y1="21" x2="25" y2="21" />
          <line x1="28" y1="21" x2="30" y2="21" />
          <line x1="33" y1="21" x2="35" y2="21" />
          <line x1="16" y1="27" x2="32" y2="27" />
        </svg>
      );
    case "pendrive":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="20" width="20" height="12" rx="2" />
          <rect x="20" y="11" width="8" height="9" rx="1.5" />
        </svg>
      );
    case "cabo":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="19" width="9" height="12" rx="2" />
          <rect x="30" y="19" width="9" height="12" rx="2" />
          <path d="M18 25 C 24 25, 24 25, 30 25" />
        </svg>
      );
    case "grampeador":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M10 30 L38 30 L38 35 L10 35 Z" />
          <path d="M13 30 C 13 18, 35 18, 35 30" />
        </svg>
      );
    case "clips":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 14 C 28 14, 32 20, 32 26 L32 32 C 32 37, 25 37, 25 32 L25 19" />
        </svg>
      );
    case "pasta":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <path d="M8 16 L20 16 L23 20 L40 20 L40 35 L8 35 Z" />
          <line x1="8" y1="24" x2="40" y2="24" />
        </svg>
      );
    case "organizador":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="10" y="13" width="10" height="24" rx="1.5" />
          <rect x="22" y="20" width="10" height="17" rx="1.5" />
          <rect x="34" y="17" width="6" height="20" rx="1.5" />
        </svg>
      );
    case "papel":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="13" y="9" width="20" height="28" rx="1.5" />
          <rect x="16" y="12" width="20" height="28" rx="1.5" />
          <line x1="20" y1="20" x2="32" y2="20" />
          <line x1="20" y1="26" x2="32" y2="26" />
          <line x1="20" y1="32" x2="32" y2="32" />
        </svg>
      );
    case "cartucho":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="14" y="17" width="20" height="16" rx="2" />
          <path d="M18 17 L18 12 L30 12 L30 17" />
          <line x1="20" y1="25" x2="28" y2="25" />
        </svg>
      );
    case "toner":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="14" width="24" height="20" rx="3" />
          <circle cx="24" cy="24" r="5" />
        </svg>
      );
    case "envelope":
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="9" y="14" width="30" height="20" rx="2" />
          <path d="M9 16 L24 28 L39 16" />
        </svg>
      );
    default:
      return (
        <svg {...props} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round">
          <rect x="12" y="12" width="24" height="24" rx="3" />
        </svg>
      );
  }
}

export function WhatsAppIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" fill="currentColor" className={className ?? "w-5 h-5"}>
      <path d="M16.04 3C9.4 3 4 8.36 4 15c0 2.34.66 4.52 1.8 6.38L4 29l7.84-1.74A11.9 11.9 0 0 0 16.04 27C22.68 27 28 21.64 28 15S22.68 3 16.04 3Zm0 21.7c-1.97 0-3.8-.55-5.36-1.5l-.38-.23-4.65 1.03 1.04-4.5-.25-.4A9.6 9.6 0 0 1 5.4 15c0-5.3 4.34-9.6 10.64-9.6S26.6 9.7 26.6 15s-4.34 9.7-10.56 9.7Zm5.5-7.27c-.3-.15-1.78-.87-2.06-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.96 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.46-2.42-1.47-.9-.79-1.5-1.76-1.68-2.06-.18-.3-.02-.46.13-.6.14-.14.3-.35.45-.53.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.07-.15-.68-1.62-.93-2.22-.24-.58-.49-.5-.68-.5-.17 0-.37-.02-.57-.02-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.62.71.23 1.36.2 1.87.12.57-.08 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35Z" />
    </svg>
  );
}

export function MapPinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className ?? "w-5 h-5"}>
      <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className ?? "w-5 h-5"}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export function PhoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className ?? "w-5 h-5"}>
      <path d="M6.6 4h3l1.6 4-2 1.4a12 12 0 0 0 5.4 5.4l1.4-2 4 1.6v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4.6 6.2 2 2 0 0 1 6.6 4Z" />
    </svg>
  );
}
