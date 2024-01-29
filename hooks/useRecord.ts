import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {getUserRecords, postRecord} from "@/lib/APIService";
import {useMemo} from "react";
import {toast} from "sonner";
import { Record } from '@prisma/client';
import {findLatestRecord} from "@/lib/utils";

export const useRecord = (userId: string) => {
    const queryClient = useQueryClient();
    const {data: records, isLoading, isError, error} = useQuery({
        queryKey: [`records/${userId}`],
        queryFn: () => getUserRecords(userId)
    })

    const weightRecord = useMemo(() => records?.filter((r: Record) => r.type === "weight"), [records])
    const caloriesRecord = useMemo(() => records?.filter((r: Record) => r.type === "calories"), [records])
    const workoutRecord = useMemo(() => records?.filter((r: Record) => r.type === "workout"), [records])

    const lastWeight: number = useMemo(() =>  {
        const last = findLatestRecord(weightRecord);
        if(!last){
            return 90
        }
        console.log(last.value)
        return last.value;
    }, [weightRecord])

    const {mutate: addRecord} = useMutation({
        mutationFn: (data: any) => postRecord(data),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: [`records/${userId}`]
            });
            toast("Record Updated!")
        }
    })

    return {
        addRecord, records, isLoading, isError, error, weightRecord, caloriesRecord, workoutRecord, lastWeight
    }
}