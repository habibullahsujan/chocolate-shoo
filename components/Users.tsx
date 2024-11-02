
import React, { ReactNode } from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,

} from "@/components/ui/dropdown-menu"
import Link from 'next/link'
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { signOut } from "next-auth/react"



const Users = ({ children,className,user }: { children: ReactNode,className?:string,user:any }) => {
    return (
        <div >
            <DropdownMenu>
                {children}
                <DropdownMenuContent className={cn('bg-white',className)}>
                    {user ? <div>
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Billing</DropdownMenuItem>

                        <DropdownMenuItem>
                            <Link href={'/dashboard'}>Dashboard</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>Setting</DropdownMenuItem>
                        <DropdownMenuItem>
                            <Button onClick={() => signOut()}>Logout</Button>
                        </DropdownMenuItem>
                    </div> : <div>
                        <DropdownMenuItem>
                            <Link href={'/auth/sign-in'}>Login</Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Link href={'/auth/sign-up'}>Register</Link>
                        </DropdownMenuItem>
                    </div>}
                </DropdownMenuContent>
            </DropdownMenu>

        </div>
    )
}

export default Users