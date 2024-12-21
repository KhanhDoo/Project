import { h } from 'vue'
import type { ColumnDef } from '@tanstack/vue-table'
import ActionMenu from './CellAction.vue'



export interface Product{
    id: string   
    name: string  
    color: string
    createdAt: string       
}

export const columns: ColumnDef<Product>[] = [
    {
        accessorKey: 'name',
        header:'Name'
    },
   
    {
        accessorKey: 'createdAt',
        header:'Created At'
    },
    {
    accessorKey: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
        const product = row.original
        return h('div', { class: 'relative' }, h(ActionMenu, {
            product
    }))
    },
  }
]