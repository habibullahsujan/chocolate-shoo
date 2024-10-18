import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { EditIcon, MoreHorizontal, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useConfirm } from '@/hooks/use-confirm'
import { useDeleteProductMutation } from '@/redux/services/productApi'
import { toast } from 'sonner'
import { useEdit } from '@/hooks/use-edit'

const Actions = ({ id }: { id: string }) => {
    const [ConfirmDialog, confirm] = useConfirm('Are you sure?', 'Are you sure you want to delete this item?')
    const [deleteProduct] = useDeleteProductMutation()
    const {onOpen} =useEdit()

    const onDelete = async () => {
        const ok = await confirm();
        if (ok) {
            const res = await deleteProduct(id);
            if (res) {
                toast.success('Product deleted.')
            } else {
                toast.error('Product delete operation is failed.')
            }
        }
    }
    const editProduct=()=>{
        onOpen(id)
    }

    return (
        <>
            <ConfirmDialog />
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className='size-8 p-0' variant={'ghost'}>
                        <MoreHorizontal />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                    <DropdownMenuItem onClick={editProduct}>
                        <EditIcon className='size-4 mr-2' />
                        Edit
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={onDelete}>
                        <Trash className='size-4 mr-2' />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu></>
    )
}

export default Actions