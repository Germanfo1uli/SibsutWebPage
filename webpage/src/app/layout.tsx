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

// export const metadata: Metadata = {
//     // ВАЖНО: Укажите здесь реальный домен, когда задеплоите сайт!!!!
//     metadataBase: new URL("https://"),
//     title: "СибГУТИ: первокурснику",
//     description: "Твой быстрый старт в СибГУТИ. Все, что нужно знать первокурснику, в одном месте.",
//     openGraph: {
//         title: "СибГУТИ: первокурснику",
//         description: "Твой быстрый старт в СибГУТИ. Все, что нужно знать первокурснику, в одном месте.",
//         url: "https://",
//         siteName: "SibSUTI",
//         images: [
//             {
//                 url: "/beydzh.png",
//                 width: 1200,
//                 height: 630,
//                 alt: "СибГУТИ: первокурснику",
//             },
//         ],
//         locale: "ru_RU",
//         type: "website",
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "СибГУТИ: первокурснику",
//         description: "Твой быстрый старт в СибГУТИ. Все, что нужно знать первокурснику, в одном месте.",
//         images: ["/beydzh.png"],
//     },
// };

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