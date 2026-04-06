import "./globals.css";

export const metadata = {
  title: "Yapak Premium UI Campaign Website",
  description: "Premium campaign website for Hon. Abdullahi Umar Yapak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
