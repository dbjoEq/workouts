import {useQuery} from "@tanstack/react-query";
import {getUser} from "@/lib/APIService";
import {DataRecord} from "@/lib/mockData";
import {useMemo} from "react";

export const useContestant = (userId: string) => {
    const {data: contestant, isLoading, isError, error} = useQuery({
        queryKey: ["contestant"],
        queryFn: () => getUser(userId),
    });
    const weightRecord = useMemo(() => contestant?.dataRecord?.filter((c: DataRecord) => c.type === "weight"), [contestant])
    const caloriesRecord = useMemo(() => contestant?.dataRecord?.filter((c: DataRecord) => c.type === "calories"), [contestant])
    const workoutRecord = useMemo(() => contestant?.dataRecord?.filter((c: DataRecord) => c.type === "workout"), [contestant])

    return {
        contestant, isError, isLoading, error, weightRecord, workoutRecord, caloriesRecord
    }
}