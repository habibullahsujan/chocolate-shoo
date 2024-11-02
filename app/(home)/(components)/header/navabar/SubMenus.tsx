import React from 'react'
import { easeIn, motion } from 'framer-motion'
import { cn } from '@/lib/utils'

type TSubMenus={
    children:React.ReactNode,
    handleMouseLeave: () => void,
    index: number,
    className?: string,
}
const SubMenus = ({ children, handleMouseLeave, index,className="" }:TSubMenus) => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, ease: easeIn }} onMouseLeave={handleMouseLeave} className={cn('grid grid-cols-12 bg-white text-yellow-600 p-6 w-[1070px] gap-2 mx-auto transition-all absolute  top-10 z-50 left-0', index === 1 && '-translate-x-[20%]', index === 2 && '-translate-x-[35%]', index ===3 && '-translate-x-[45%]', index ===4 && '-translate-x-[35%]',className)}>
            {children}
        </motion.div>
    )
}

export default SubMenus