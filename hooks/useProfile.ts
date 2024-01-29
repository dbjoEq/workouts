import {useQuery} from "@tanstack/react-query";
import {getUserBio} from "@/lib/APIService";

export const useProfile = (userId: string) => {
    const {data: profile, isLoading, isError, error} = useQuery({
        queryKey: [`profile/${userId}`],
        queryFn: () => getUserBio(userId)
    })

    return {
        profile, isLoading, isError, error
    }
}