import "./globals.css";
import Navbar from "./comps/Navbar";

export const metadata = {
  title: "hello",
  icon: "/cart.png",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
