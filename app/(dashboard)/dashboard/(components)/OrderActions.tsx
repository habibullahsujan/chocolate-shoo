import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { EditIcon, MoreHorizontal, Trash } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useConfirm } from '@/hooks/use-confirm'
import { toast } from 'sonner'
import { useEditOrder } from '@/hooks/use-edit-order'
import { useDeleteOrderMutation } from '@/redux/services/ordersApi'

const OrderActions = ({ id }: { id: string }) => {
    const [ConfirmDialog, confirm] = useConfirm('Are you sure?', 'Are you sure you want to delete this item?')
    const [deleteOrder] = useDeleteOrderMutation()

    const {onOpen} =useEditOrder()

    const onDelete = async () => {
        const ok = await confirm();
        if (ok) {
            const res = await deleteOrder(id);
            if (res) {
                toast.success('Order deleted.')
            } else {
                toast.error('Order delete operation is failed.')
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

export default OrderActions