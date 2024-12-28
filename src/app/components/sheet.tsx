import React from 'react'
import Image from 'next/image'

import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import Link from 'next/link'


const SheetMenu = () => {
  return (
    <div className='bg-[#141414] text-[#dbd9d9] max-w-[1500px] mx-auto'>
        <Sheet>
                <SheetTrigger className='fixed text-3xl font-serif hover:text-slate-400'><strong><abbr title="Malia Raees">M 👈</abbr></strong></SheetTrigger>
                <SheetContent side="left" className="max-h-[100vh] overflow-y-auto">
                <Link href='/'><div className='mt-4 ml-4'><Image src="/home.svg" alt='search' width={40} height={40}></Image>
                    <span>home</span></div></Link>
                <div className='md:mt-8 ml-4'><Image src="/search.svg" alt='search' width={40} height={40}></Image>
                    <span>search</span></div>
                <div className='mt-4 md:mt-8 ml-1'><Image src="/trending_up.png" alt='trending' width={40} height={40} className='ml-2'></Image>
                    <span>trending</span></div>
                <div className='md:mt-8'><Image src="/comment.svg" alt='comment' width={40} height={40} className='ml-5'></Image>
                    <span>comments</span></div>
                <div className='md:mt-8 ml-4'><Image src="/create.png" alt='create' width={40} height={40}></Image>
                    <span className=''>create</span></div>
                </SheetContent>
            </Sheet>
    </div>
  )
}

export default SheetMenu