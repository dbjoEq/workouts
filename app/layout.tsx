"use client"

import {Inter as FontSans} from "next/font/google"
import './globals.css';
import React from "react";
import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/sonner";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
})

const queryClient = new QueryClient()

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <QueryClientProvider client={queryClient}>
            <body className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}>
            <ThemeProvider
                attribute={"class"}
                defaultTheme={"system"}>
                <Header/>
                {children}
                <Footer/>
                <Toaster/>
            </ThemeProvider>
            </body>
        </QueryClientProvider>
        </html>
    )
}
