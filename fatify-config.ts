export const fatifyConfig: ResturantConfigType = {
    name: "Fat Fighters",
    routes: [
        {
            name: "About",
            href: "/about"
        },{
            name: "Workouts",
            href: "/workouts"
        },
        {
            name: "Calories",
            href: "/calories",
        },
        {
            name: "Weight",
            href: "/weight",
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











