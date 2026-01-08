// app/layout.js
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



export const metadata = {
  title: "Manirajan | AI & Computer Vision Portfolio",
  description: "Portfolio showcasing AI, Deep Learning, and Computer Vision work",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar */}
        <header className="navbar">
          <nav>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/skills">Skills</a></li>
              <li><a href="/experience">Experience</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/events">Events</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
        </header>

        {/* Main Page Content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="footer">
          <p>© {new Date().getFullYear()} Manirajan Kalidas</p>
        </footer>
      </body>
    </html>
  );
}


