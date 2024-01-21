import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {DataRecord} from "@/lib/mockData";

type DataRecordsType = {
    records: DataRecord[];
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
                {/*<TableRow>*/}
                    {/*<TableCell className="font-medium">12. Feb</TableCell>*/}
                    {/*<TableCell className="text-right">83</TableCell>*/}
                    {records.map((record) => (
                        <TableRow>
                          <TableCell className="font-medium">{record.date}</TableCell>
                            <TableCell className="text-right">{record.value}</TableCell>
                        </TableRow>
                    ))}
                {/*</TableRow>*/}
            </TableBody>
        </Table>

    )
}