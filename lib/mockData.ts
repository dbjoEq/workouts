export const mockData: Contestant[] = [
    {
        id: "1",
        name: "Jone Oliversen",
        motivation: "SON OF A GUN",
        age: 30,
        height: 185,
        startWeight: 105,
        goalWeight: 90,
        waist: 102,
        dataRecord: [],
    },{
        id: "2",
        name: "Sigurd Tonstad",
        motivation: "APLHA",
        age: 30,
        height: 158,
        startWeight: 82,
        goalWeight: 90,
        waist: 102,
        dataRecord: [],
    },{
        id: "3",
        name: "Alexander Fosse",
        motivation: "FØDT SÅNN",
        age: 30,
        height: 157,
        startWeight: 70,
        goalWeight: 65,
        waist: 102,
        dataRecord: [
            {
                type: "weight",
                value: 90,
                date: new Date(2024, 1, 2).toLocaleDateString("no-NO"),
                details: "First weight"
            },
            {
                type: "weight",
                value: 90,
                date: new Date(2024, 1, 5).toLocaleDateString("no-NO")
            },
            {
                type: "weight",
                value: 88,
                date: new Date(2024, 1, 21).toLocaleDateString("no-NO")
            },            {
                type: "calories",
                value: 2340,
                date: new Date(2024, 1, 2).toLocaleDateString("no-NO"),
                details: "First weight"
            },
            {
                type: "calories",
                value: 1289,
                date: new Date(2024, 1, 4).toLocaleDateString("no-NO")
            },
            {
                type: "calories",
                value: 2200,
                date: new Date(2024, 1, 10).toLocaleDateString("no-NO")
            },
            {
                type: "calories",
                value: 1700,
                date: new Date(2024, 1, 14).toLocaleDateString("no-NO")
            },
            {
                type: "calories",
                value: 3400,
                date: new Date(2024, 1, 22).toLocaleDateString("no-NO")
            },{
                type: "workout",
                value: 1,
                date: new Date(2024, 1, 11).toLocaleDateString("no-NO")
            }

        ],
    },{
        id: "4",
        name: "Daniel Bjørke",
        motivation: "HEALTH IS WEALTH",
        age: 30,
        height: 190,
        startWeight: 90,
        goalWeight: 80,
        waist: 102,
        dataRecord: [
            {
                type: "weight",
                value: 90,
                date: new Date(2024, 1, 2).toLocaleDateString("no-NO"),
                details: "First weight"
            },
            {
                type: "weight",
                value: 88,
                date: new Date(2024, 1, 5).toLocaleDateString("no-NO")
            },
            {
                type: "weight",
                value: 86,
                date: new Date(2024, 1, 10).toLocaleDateString("no-NO")
            },
            {
                type: "weight",
                value: 82,
                date: new Date(2024, 1, 16).toLocaleDateString("no-NO")
            },
            {
                type: "weight",
                value: 77,
                date: new Date(2024, 1, 21).toLocaleDateString("no-NO")
            },            {
                type: "calories",
                value: 2340,
                date: new Date(2024, 1, 2).toLocaleDateString("no-NO"),
                details: "First weight"
            },
            {
                type: "calories",
                value: 2800,
                date: new Date(2024, 1, 5).toLocaleDateString("no-NO")
            },
            {
                type: "calories",
                value: 2200,
                date: new Date(2024, 1, 10).toLocaleDateString("no-NO")
            },
            {
                type: "calories",
                value: 2100,
                date: new Date(2024, 1, 16).toLocaleDateString("no-NO")
            },
            {
                type: "calories",
                value: 3000,
                date: new Date(2024, 1, 21).toLocaleDateString("no-NO")
            },{
                type: "workout",
                value: 1,
                date: new Date(2024, 1, 12).toLocaleDateString("no-NO")
            },{
                type: "workout",
                value: 1,
                date: new Date(2024, 1, 1).toLocaleDateString("no-NO")
            },{
                type: "workout",
                value: 1,
                date: new Date(2024, 1, 19).toLocaleDateString("no-NO")
            },{
                type: "workout",
                value: 1,
                date: new Date(2024, 1, 30).toLocaleDateString("no-NO")
            },

        ],

    }
]

export type Contestant = {
    id: string;
    name: string;
    motivation: string;
    age: number;
    height: number;
    startWeight: number;
    goalWeight: number;
    waist: number;
    caloriesTarget?: number;
    dataRecord?: DataRecord[]
}

export type DataRecord = {
    type: "weight" | "calories" | "workout" | "waist";
    value: number;
    date: string;
    details?: string;
}