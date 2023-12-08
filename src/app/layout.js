import "./globals.css";
import Navbar from "@/components/nav_bar";
import Footer from "@/components/footer";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-white bg-secondary">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
