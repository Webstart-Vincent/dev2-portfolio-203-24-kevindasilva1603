import { Inter } from "next/font/google";
import "./globals.css";
import Provider from "@/components/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Portfolio",
    description:
        "Ce site est le portfolio de Kévin Da Silva un jeune dévelopeur",
};

export default function RootLayout({ children }) {
    return (
        <html lang='fr-FR'>
            <body className={inter.className}>
                <Provider>{children}</Provider>
            </body>
        </html>
    );
}
