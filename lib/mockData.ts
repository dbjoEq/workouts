export const mockData: Contestant[] = [
    {
        id: 1,
        name: "Jone Oliversen",
        motivation: "SON OF A GUN",
        age: 30,
        height: 185,
        startWeight: 105,
        goalWeight: 90,
        waist: 102,
        historicalWeightData: [],
        historicalCaloriesData: [],
        historicalWaistData: []
    },{
        id: 2,
        name: "Sigurd Tonstad",
        motivation: "APLHA",
        age: 30,
        height: 158,
        startWeight: 82,
        goalWeight: 90,
        waist: 102,
        historicalWeightData: [],
        historicalCaloriesData: [],
        historicalWaistData: []
    },{
        id: 3,
        name: "Alexander Fosse",
        motivation: "FØDT SÅNN",
        age: 30,
        height: 157,
        startWeight: 70,
        goalWeight: 65,
        waist: 102,
        historicalWeightData: [],
        historicalCaloriesData: [],
        historicalWaistData: []
    },{
        id: 4,
        name: "Daniel Bjørke",
        motivation: "HEALTH IS WEALTH",
        age: 30,
        height: 190,
        startWeight: 90,
        goalWeight: 80,
        waist: 102,
        historicalWeightData: [],
        historicalCaloriesData: [],
        historicalWaistData: []

    }
]

type Contestant = {
    id: number;
    name: string;
    motivation: string;
    age: number;
    height: number;
    startWeight: number;
    goalWeight: number;
    waist: number;
    historicalWeightData: WeightData[],
    historicalCaloriesData: CaloriesData[],
    historicalWaistData: WaistData[],
}

type WeightData = {
    weight: number;
    date: Date,
}

type CaloriesData = {
    calories: number;
    date: Date,
}

type WaistData = {
    waist: number;
    date: Date,
}