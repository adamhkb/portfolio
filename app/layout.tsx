import '../styles/globals.css';
import Navbar from '../components/Navbar';
import MUIProvider from '../components/MUIProvider';
import Footer from '../components/Footer'; // ✅ import Footer

export const metadata = {
  title: "Adam Bahrin | Portfolio",
  description: "A showcase of Adam's projects, skills, and experience in full-stack development.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.png" />
      </head>
      <body>
        <MUIProvider>
          <Navbar />
          {children}
          <Footer /> {/* ✅ footer at bottom */}
        </MUIProvider>
      </body>
    </html>
  );
}
