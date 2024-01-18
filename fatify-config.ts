export const fatifyConfig: ResturantConfigType = {
    name: "Fat Fighters",
    routes: [
        {
            name: "About",
            href: "/about"
        },{
            name: "Workouts",
            href: "/about"
        },
        {
            name: "Calories",
            href: "/blog",
        },
        {
            name: "Weight",
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











