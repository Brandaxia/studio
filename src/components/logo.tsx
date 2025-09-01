
export function Logo() {
  return (
    <a href="/" className="flex items-center gap-2 text-primary">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Robot */}
        <path d="M14.5 12.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
        <path d="M12 15v4" />
        <path d="M15 19h-6" />
        <rect x="9" y="4" width="6" height="8" rx="1" />
        {/* Robot Grad Cap */}
        <path d="M8 8.5l4-1.5 4 1.5" />
        <path d="M12 7v1.5" />

        {/* Human */}
        <circle cx="6" cy="6" r="2" />
        <path d="M6 8v5" />
        <path d="M3 17l2-5 2 5" />
        <path d="M2 13h8" />
        {/* Human Grad Cap */}
        <path d="M2 5.5l4-1.5 4 1.5" />
        <path d="M6 4v1.5" />
        
        {/* Diploma */}
        <path d="M18 20c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        <path d="M18 16V8a2 2 0 0 1 2-2h2"/>
        <path d="M18 8a2 2 0 0 0-2-2h-2"/>
      </svg>
      <span className="text-xl font-bold font-headline tracking-tight">
        Ainsophic Academy
      </span>
    </a>
  );
}
