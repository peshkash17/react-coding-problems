'use client'
import { useRef } from 'react'

export default function FocusInput() {
    const inputRef = useRef<HTMLInputElement>(null)
    return (
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <h1>Focus Input</h1>

            <input type="text" name="" id="" className='border' ref={inputRef}  />
            <button className='border mt-4 ' onClick={() => inputRef.current?.focus()}>Click</button>
        </div>
    )
}
