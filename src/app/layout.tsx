import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "BluePages - Find Local Services",
    template: "%s | BluePages",
  },
  description: "A simple local business directory MVP built with static mock data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav
          style={{
            position: "sticky",
            top: 0,
            zIndex: 50,
            borderBottom: "1px solid var(--border)",
            background: "rgba(255, 255, 255, 0.85)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
          }}
        >
          <div
            style={{
              width: "min(1120px, calc(100% - 2rem))",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: "3.5rem",
            }}
          >
            <Link
              href="/"
              style={{
                fontSize: "1.15rem",
                fontWeight: 800,
                color: "var(--accent)",
                letterSpacing: "-0.02em",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
              }}
            >
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "1.75rem",
                  height: "1.75rem",
                  borderRadius: "0.5rem",
                  background: "var(--accent)",
                  color: "#fff",
                  fontSize: "0.85rem",
                  fontWeight: 800,
                }}
              >
                B
              </span>
              BluePages
            </Link>
            <Link
              href="/results?location=Kuala%20Lumpur"
              style={{
                fontSize: "0.875rem",
                fontWeight: 600,
                color: "var(--text-muted)",
                padding: "0.4rem 0.85rem",
                borderRadius: "var(--radius)",
                transition: "var(--transition)",
              }}
            >
              Browse All
            </Link>
          </div>
        </nav>

        {children}

        <footer
          style={{
            borderTop: "1px solid var(--border)",
            padding: "2rem 0",
            marginTop: "2rem",
          }}
        >
          <div
            style={{
              width: "min(1120px, calc(100% - 2rem))",
              margin: "0 auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              fontSize: "0.825rem",
              color: "var(--text-muted)",
            }}
          >
            <span>BluePages &middot; Local Business Directory</span>
            <span>Kuala Lumpur</span>
          </div>
        </footer>
      </body>
    </html>
  );
}
