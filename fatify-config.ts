export const fatifyConfig: ResturantConfigType = {
    name: "Fat Fighters",
    routes: [
        {
            name: "About",
            href: "/about"
        },
        {
            name: "Blog",
            href: "/blog",
        },
        {
            name: "Contact",
            href: "/contact",
        }
    ],
}

type ResturantConfigType = {
    name: string;
    routes: RouteType[]
}

type RouteType = {
    name: string;
    href: string;
}











