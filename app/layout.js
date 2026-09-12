import "./globals.css";

export const metadata = {
  title: "CineAI — AI Video Generator",
  description: "Create cinematic AI videos from your text and imagination."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
