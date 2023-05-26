import Navigation from "./navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
