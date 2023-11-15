import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renov",
  description: "Revitalize Seus Projetos com Sustentabilidade!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <link rel="icon" type="image/svg+xml" href="/LogoHigh.svg" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
