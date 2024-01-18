import {HamburgerMenu} from "@/components/HamburgerMenu";
import {Navbar} from "@/components/Navbar";
import Link from "next/link";

export const Header = () => {
    return (
        <header className="flex flex-row justify-between items-center">
            <ul>
            <li className={"py-2 px-4"}>
                <Link href={"/"}>Fat fighters</Link>
            </li>
            </ul>

            <Navbar/>
            <HamburgerMenu />
        </header>
    )
}