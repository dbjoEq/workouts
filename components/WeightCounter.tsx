import {Button} from "@/components/ui/button";
import {Minus, Plus} from "lucide-react";
import React from "react";



type WeightCounter = {
    weight: number;
    increaseWeight: any;
    reduceWeight: any
}
export const WeightCounter = ({weight, increaseWeight, reduceWeight}: WeightCounter) => {
    return (
        <div className="flex items-center justify-center space-x-2">
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
    )
}
