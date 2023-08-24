import SideBar from "@/components/Sidebar/SideBar";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "UAB",
  description: "Universidad Adventista de Bolivia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="h-full bg-white antialiased">
      {/* <body className={inter.className}>{children}</body> */}
      <body className={`h-full ${inter.className}`}>
        <SideBar>{children}</SideBar>
      </body>
    </html>
  );
}
