import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { TransitionProvider } from "@/providers";
import { Header, Footer } from "@/components";

const inter = Inter({
    subsets: ["latin", "cyrillic"],
    variable: "--font-family-body",
    display: "swap",
    weight: ["400", "500", "600", "700", "800", "900"],
    preload: true,
});

export const metadata: Metadata = {
    title: "СибГУТИ: первокурснику",
    description: "Отсутствует.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru" className={`${inter.variable} h-full antialiased`}>
        <body className="min-h-full flex flex-col">
        <TransitionProvider>
            <Header />
            <main className="flex-1 flex flex-col">
                {children}
            </main>
            <Footer />
        </TransitionProvider>
        </body>
        </html>
    );
}