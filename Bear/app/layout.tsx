import type { Metadata } from "next";
import "./globals.css";
import Background from "./components/Background";
import { BackgroundProvider } from "./components/BackgroundProvider";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "クマが動くモーション集",
  description: "クマのアニメーションを1体・2体・3体で見比べられるモーションギャラリー",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full antialiased">
      <body className="relative min-h-full overflow-x-hidden">
        <BackgroundProvider>
          <Background />
          <Header />
          <div className="relative z-10 flex min-h-full flex-col">{children}</div>
        </BackgroundProvider>
      </body>
    </html>
  );
}
