"use client"
import { Menu, X } from "lucide-react"
import {useState} from "react";

export const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    }
    return (
        <div className={"py-2 px-4 sm:hidden"}>
            {isOpen ? <X onClick={toggleMenu}/> : <Menu onClick={toggleMenu} />}
        </div>
    )
}

