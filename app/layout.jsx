import "./globals.css";

export const metadata = {
  title: "Yapak Campaign Website",
  description: "Campaign website for Hon. Abdullahi Umar Yapak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
