import React from 'react'
import SubMenus from './SubMenus'
type TChocolateProps={
    handleMouseLeave: () => void,
    index: number
}
const Pages = ({ handleMouseLeave, index }:TChocolateProps) => {
    return (
        <SubMenus className='w-[200px] flex flex-col text-start' handleMouseLeave={handleMouseLeave} index={index}>

                <li>About Us</li>
                <hr />
                <li>Services</li>
                <hr />
                <li>FAQ</li>
                <hr />
                <li>News</li>
                <hr />
                <li>Contact Us</li>

        </SubMenus>
    )
}

export default Pages