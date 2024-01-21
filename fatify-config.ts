export const fatifyConfig: ResturantConfigType = {
    name: "Fat Fighters",
    routes: [
        {
            name: "Jone",
            href: "/user/1"
        },{
            name: "Sigurd",
            href: "/user/2"
        },
        {
            name: "Alexander",
            href: "/user/3",
        },
        {
            name: "Daniel",
            href: "/user/4",
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











