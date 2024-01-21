"use client"
import { Menu, X } from "lucide-react"
import {useState} from "react";
import {fatifyConfig} from "@/fatify-config";
import Link from "next/link";
import { usePathname } from 'next/navigation'

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={"py-2 px-4 sm:hidden"}>
            {isOpen ? <X onClick={toggleMenu}/> : <Menu onClick={toggleMenu} />}
            {isOpen && (
                <div className={"block absolute w-screen left-0 z-10 bg-background h-full mt-8"}>
                    <ul className="flex flex-col items-center justify-between min-h-[250px]">
                        {fatifyConfig.routes.map((route) => (
                            <li key={route.name} className={"hover:text-background hover:bg-foreground"}>
                                <Link onClick={toggleMenu} className={`${pathname === route.href ? 'text-background bg-foreground' : ''}`} href={route.href}>{route.name}</Link>
                            </li>
                        ))}
                    </ul>

                </div>
            )}
        </div>
    )
}

