'use client'
import { useState } from "react";
import { Button } from "./ui/button";
import { usePreviousCount } from "@/hooks/usePreviousCount";

export default function CounterApp() {

    const [count, setCount] = useState<number>(0)
    const { previousCount } = usePreviousCount(count)

    function incrementCount() {
        setCount(prev => prev + 1)
    }
    function decrementCount() {
        setCount(prev => prev - 1)
    }
    function resetCount() {
        setCount(0)
    }
    return (
        <div className="h-full w-full flex flex-col gap-4  bg-amber-300 items-center justify-center">
            <h1>CounterApp</h1>
            <p>Previous Count : {previousCount.current}</p>
            <p>Count : {count}</p>
            <div className="flex gap-2 items-center justify-center">
                 <Button onClick={incrementCount}>Increment</Button>
            <Button onClick={decrementCount}>Decrement</Button>
            <Button onClick={resetCount}>Reset</Button>


            </div>
           
        </div>
    )
}