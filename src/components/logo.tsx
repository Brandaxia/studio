
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
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
      <span className="text-xl font-bold font-headline tracking-tight">
        Ainsophic Academy
      </span>
    </a>
  );
}
