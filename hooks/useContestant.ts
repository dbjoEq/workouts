import {useQuery} from "@tanstack/react-query";
import {getUser} from "@/lib/APIService";
import {DataRecord} from "@/lib/mockData";
import {useMemo} from "react";

export const useContestant = (userId: string) => {
    const {data: profile, isLoading, isError, error} = useQuery({
        queryKey: ["profile"],
        queryFn: () => getUser(userId),
    });
    const weightRecord = useMemo(() => profile?.record?.filter((c: DataRecord) => c.type === "weight"), [profile])
    const caloriesRecord = useMemo(() => profile?.record?.filter((c: DataRecord) => c.type === "calories"), [profile])
    const workoutRecord = useMemo(() => profile?.record?.filter((c: DataRecord) => c.type === "workout"), [profile])

    return {
        profile, isError, isLoading, error, weightRecord, workoutRecord, caloriesRecord
    }
}