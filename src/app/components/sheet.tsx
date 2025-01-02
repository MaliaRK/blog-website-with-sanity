import React from 'react'
// import { Sheet, SheetTrigger, SheetContent } from '@/components/ui/sheet'
import Link from 'next/link'

const Header = () => {
    return (
       <div className='fixed right-2 md:right-10 left-2 md:left-10 max-w-[1000px] mx-auto flex justify-center bg-secondary p-3 rounded-full'>
        <h1 className='font-serif mx-auto text-2xl text-center hidden md:block'><strong><u>Unleash Your Voice Through Blogging</u></strong></h1>
        <ul className='flex justify-center items-center gap-5 mr-3'>
            <Link href='/'><li className='hover:text-purple-200'>Home</li></Link>
            <li className='cursor-pointer hover:text-purple-200'>Create</li>
            <li className='cursor-pointer hover:text-purple-200'>Sign Up</li>
            <li className='bg-black text-secondary px-2 py-1 rounded-full cursor-pointer hover:text-purple-200 '>Log In</li>
        </ul>
       </div>
    )
} 

export default Header;



// const SheetMenu = () => {
//   return (
//     <div className='bg-[#141414] text-primary max-w-[1500px] mx-auto'>
//         <Sheet>
//                 <SheetTrigger className='fixed text-3xl font-serif hover:text-secondary'><strong><abbr title="Malia Raees">M </abbr>👈</strong></SheetTrigger>
//                 <SheetContent side="left" className="max-h-[100vh] overflow-y-auto">
//                 <Link href='/'><div className='mt-4 ml-4'><Image src="/home.svg" alt='search' width={40} height={40}></Image>
//                     <span>home</span></div></Link>
//                 <div className='md:mt-8 ml-4'><Image src="/search.svg" alt='search' width={40} height={40}></Image>
//                     <span>search</span></div>
//                 <div className='mt-4 md:mt-8 ml-1'><Image src="/trending_up.png" alt='trending' width={40} height={40} className='ml-2'></Image>
//                     <span>trending</span></div>
//                 <div className='md:mt-8'><Image src="/comment.svg" alt='comment' width={40} height={40} className='ml-5'></Image>
//                     <span>comments</span></div>
//                 <div className='md:mt-8 ml-4'><Image src="/create.png" alt='create' width={40} height={40}></Image>
//                     <span className=''>create</span></div>
//                 </SheetContent>
//             </Sheet>
//     </div>
//   )
// }
// export default SheetMenu