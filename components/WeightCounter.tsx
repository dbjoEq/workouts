import {Button} from "@/components/ui/button";
import {Minus, Plus} from "lucide-react";
import React, {useState} from "react";
import {Switch} from "@/components/ui/switch";



type WeightCounter = {
    weight: number;
    increaseWeight: () => void;
    reduceWeight: () => void;
}
export const WeightCounter = ({weight, increaseWeight, reduceWeight}: WeightCounter) => {
    const [isUpdatingGram, setIsUpdatingGram] = useState(false)
    const onSwitchUpdate = () => {
        setIsUpdatingGram(!isUpdatingGram)
    }

    return (
        <div className="flex items-center justify-center space-x-2 flex-col">
            <div className={"flex flex-row justify-between w-full"}>
                {/*<p>Enable to update grams</p><Switch checked={isUpdatingGram} onCheckedChange={onSwitchUpdate}/>*/}
            </div>
            <div className={"flex flex-row w-full content-between items-center"}>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={reduceWeight}
                >
                    <Minus className="h-4 w-4" />
                    <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                    <div className="text-7xl font-bold tracking-tighter">
                        {weight}
                    </div>
                    <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Kg
                    </div>
                </div>
                <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8 shrink-0 rounded-full"
                    onClick={increaseWeight}
                >
                    <Plus className="h-4 w-4" />
                    <span className="sr-only">Increase</span>
                </Button>

            </div>
        </div>
    )
}
