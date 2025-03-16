import "../styles/variables.css";
import "../styles/globals.css";

export const metadata = {
  title: 'My Juicebox App',
  description: 'Juicebox Frontend Developer Assessment Project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
      </body>
    </html>
  );
}
