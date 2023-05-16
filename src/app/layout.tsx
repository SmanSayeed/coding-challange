import Layout from "@/components/Layout/Layout";
import { AuthUserProvider } from "@/lib/firebase/auth";
import { siteName, siteTagline } from "@/services/constants/constants";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteName,
  description: siteTagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthUserProvider>
      <Layout>{children}</Layout>
    </AuthUserProvider>
  );
}
