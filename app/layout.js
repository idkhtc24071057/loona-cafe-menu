import "./globals.css";


export const metadata = {
  title: "루나 카페 메뉴판",
  description: "루나 카페의 메뉴 및 가격 안내",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
