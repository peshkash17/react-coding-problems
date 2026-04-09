'use client'
import { useEffect, useRef, useState } from "react"


export const  usePreviousCount =(count:number) =>{
  const previousCount = useRef(count)

  useEffect(()=>{
    previousCount.current = count
  }, [count])

return { previousCount }
}