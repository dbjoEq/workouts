'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import {fatifyConfig} from "@/fatify-config";

export const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className={"py-4 px-8  max-sm:hidden"}>
            <ul className={"flex flex-row gap-5"}>
                {fatifyConfig.routes.map((route) => (
                    <li key={route.name} className={"hover:text-background hover:bg-foreground"}>
                        <Link className={`${pathname === route.href ? 'text-background bg-foreground' : ''}`} href={route.href}>{route.name}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}