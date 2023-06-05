import AdminLayout from "@/components/Admin/AdminLayout/AdminLayout";
import Layout from "@/components/Layout/Layout";
import { AuthUserProvider } from "@/lib/firebase/auth";
import { Providers } from "@/redux/provider";
import { siteName, siteTagline } from "@/services/constants/constants";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: siteName,
  description: siteTagline,
};

export default function RootLayout({ children }: { children: any }) {
  // console.log("children = ",children)
  // console.log("children = ", children.props.childProp.segment);
  // console.log("first");
  if (children?.props?.childProp.segment === "codmin") {
    return <AdminLayout>{children}</AdminLayout>;
  }
  return (
    <Providers>
      <AuthUserProvider>
        <Layout>{children}</Layout>
      </AuthUserProvider>
    </Providers>
  );
}
