import Header from "@/components/Layout/Header";
import "./globals.css";

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
      </body>
    </html>
  );
}
