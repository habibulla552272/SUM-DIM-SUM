import type { Metadata } from "next";
import { Cinzel_Decorative, Passions_Conflict, Poppins, Raleway } from "next/font/google";
import "./globals.css";


const raleway = Raleway({
  variable: '--font-raleway',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']

})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800']
})

const cinzel = Cinzel_Decorative({
  variable: '--font-cinzel',
  subsets: ['latin'],
  weight: ['400', '700', '900']

})
const passions = Passions_Conflict({
  variable: '--font-passions',
  subsets: ['latin'],
  weight: ['400']

})


export const metadata: Metadata = {
  title: "Sum-Dim-Sum",
  description: "online food store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} ${cinzel.variable} ${passions.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
