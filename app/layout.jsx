// fonts and css
import { Noto_Serif, Imperial_Script } from 'next/font/google';
import "./globals.css";



// init fonts
const notoSerif = Noto_Serif({
  subsets: ["latin"],
  variable: "--font-noto",
  weight: ["400", "700"]
});

const imperialScript = Imperial_Script({
  subsets: ["latin"],
  variable: "--font-imperial-script",
  weight: ["400"]
});



// export metadata
export const metadata = {
  title: {
    template: "%s | Jo Smith Photography",
    default: "Jo Smith Photography"
  },
  description: "Dundee photographer Jo Smith captures weddings, families, babies, and landscapes. Book your professional photo session today.",
  keywords: ["Dundee photographer", "wedding photography", "family portraits", "baby photography", "nature photography", "product photography", "Jo Smith Photography", "studio photo session", "digital photo package", "portrait photographer", "professional photographer Dundee", "Scotland landscapes", "photo gift vouchers", "children's portraits", "photography portfolio", "MPA photographer", "retouched images", "Scottish photography", "Dundee photo studio", "photography services Dundee"],
}



// export root layout
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-body text-black font-noto scroll-smooth ${notoSerif.variable} ${imperialScript.variable}`}>
        {children}
      </body>
    </html>
  );
}
