import { Profile, Record } from '@prisma/client';

export const getUserBio = async (userId: string): Promise<Profile> => {
    const url = `/api/user/${userId}`;
    const res = await fetch(url,{
        method: "GET",
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export const getUserRecords = async (userId: string): Promise<Record[]> => {
    const url = `/api/user/${userId}/record`;
    const res = await fetch(url,{
        method: "GET",
    });

    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }

    return res.json();
}

export const postRecord = async (data: any) => {
    const url = `/api/user/${data?.userId}/record`;
    const res = await fetch(url, {
        method: "POST",
        body: JSON.stringify({
            type: data.type,
            value: data.value,
            details: data?.details,
            profileId: data?.userId
        })
    })

    return  res.json()
}