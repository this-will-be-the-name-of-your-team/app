import AppProvider from "@/components/common/provider/appProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
