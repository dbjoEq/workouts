import {Contestant, mockData} from "@/lib/mockData";

export const useUser = (id: string) => {
    const user = mockData.find((user) => findUser(user, id));

    const weight = user?.dataRecord?.filter((record) => record.type === "weight")
    const calorie = user?.dataRecord?.filter((record) => record.type === "calories")
    const workout = user?.dataRecord?.filter((record) => record.type === "workout")
    const waist = user?.dataRecord?.filter((record) => record.type === "waist")

    return {user, weight, calorie, workout, waist}
};

const findUser = (user: Contestant, id: string): boolean => {
    return user.id === id
};
