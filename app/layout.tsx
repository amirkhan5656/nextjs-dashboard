import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import SideNav from './ui/dashboard/sidenav';

export const experimental_ppr = true;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-row">
          <SideNav />
          <div className="flex-1">{children}</div>
        {/* {children} */}
        </div>
      </body>
    </html>
  );
}
