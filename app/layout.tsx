import "./globals.css";
import Navbar from "./components/Navbar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#f5f5f7] text-[#1d1d1f]">
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
