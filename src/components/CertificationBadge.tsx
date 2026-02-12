"use client";

// IFM (Institute for Functional Medicine) Certified Practitioner Badge
export function CertificationBadge({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* IFM-style badge */}
      <div className="relative w-16 h-16 flex-shrink-0">
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer circle */}
          <circle
            cx="50"
            cy="50"
            r="48"
            stroke="currentColor"
            strokeWidth="2"
            className="text-primary"
          />
          {/* Inner circle */}
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="currentColor"
            strokeWidth="1"
            className="text-primary/50"
          />
          {/* IFM Text */}
          <text
            x="50"
            y="45"
            textAnchor="middle"
            className="fill-primary font-bold"
            fontSize="18"
          >
            IFM
          </text>
          {/* Certified text */}
          <text
            x="50"
            y="62"
            textAnchor="middle"
            className="fill-primary/80"
            fontSize="10"
          >
            CERTIFIED
          </text>
          {/* Decorative leaves */}
          <path
            d="M20 70 Q25 60 30 70 Q25 65 20 70"
            fill="currentColor"
            className="text-primary/60"
          />
          <path
            d="M80 70 Q75 60 70 70 Q75 65 80 70"
            fill="currentColor"
            className="text-primary/60"
          />
        </svg>
      </div>
      <div className="text-left">
        <p className="font-semibold text-sm text-foreground leading-tight">
          Certified Practitioner
        </p>
        <p className="text-xs text-muted-foreground leading-tight">
          The Institute of
          <br />
          Functional Medicine
        </p>
      </div>
    </div>
  );
}

// Compact version for tight spaces
export function CertificationBadgeCompact({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 ${className}`}
    >
      <svg
        viewBox="0 0 24 24"
        className="w-5 h-5 text-primary"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5" />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xs font-medium text-primary">IFM Certified</span>
    </div>
  );
}
