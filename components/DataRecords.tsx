import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { Record } from '@prisma/client';

type DataRecordsType = {
    records: Record[];
    type: string;
    unit: string;
}
export const DataRecords = ({records, type, unit}: DataRecordsType) => {
    return (
        <Table className={"mt-8"}>
            <TableCaption>A list of your {type} recordings.</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">Date</TableHead>
                    <TableHead className="text-right">{type} ({unit})</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                    {records.map((record, index) => (
                        <TableRow id={index.toString()}>
                          <TableCell className="font-medium">{record.date}</TableCell>
                            <TableCell className="text-right">{record.value}</TableCell>
                        </TableRow>
                    ))}
            </TableBody>
        </Table>

    )
}