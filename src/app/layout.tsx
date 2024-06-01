import AppProvider from "@/components/common/provider/appProvider";
import Pretendard from "@/styles/fonts/PretendardVariable.woff2";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" href={Pretendard} as="Pretendard" type="font/woff2" />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
