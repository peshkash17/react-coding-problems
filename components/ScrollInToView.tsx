'use client'
import React from 'react'
import { Button } from './ui/button'

export default function ScrollInToView() {
    const divRef = React.useRef<HTMLHeadingElement>(null)
    return (
        <div className='flex flex-col p-5 h-full w-full overflow-auto relative '>
            <h1 ref={divRef}>Scroll Into View Example</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque error recusandae excepturi vel, reiciendis voluptas in quidem eius eos corporis accusamus nobis tenetur soluta corrupti impedit beatae aliquam et sapiente?
            </p>

            <Button className='fixed bottom-5 right-5' onClick={()=>{divRef.current?.scrollIntoView({behavior:'smooth'})}}>
                Scroll Into View

            </Button>


        </div>
    )
}
