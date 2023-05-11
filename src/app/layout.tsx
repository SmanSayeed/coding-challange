import { AuthUserProvider } from "@/firebase/auth";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Coding Challenge",
  description: "!dare to code",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthUserProvider>
 <html lang="en">
      <body className={inter.className}>
        <Header />
        {children} 
        <Footer />
      </body>
    </html>
    </AuthUserProvider>
   
  );
}
