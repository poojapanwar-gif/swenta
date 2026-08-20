import Header from "@/components/Layout/Header";
import "./globals.css";
import Footer from "@/components/Layout/Footer";
import GetStarted from "@/components/Layout/GetStarted";

export const metadata = {
  title: "Homepage",
  description: "Built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main>{children}</main> 
        <GetStarted/> 
        <Footer/> 
      </body>
    </html>
  );
}
