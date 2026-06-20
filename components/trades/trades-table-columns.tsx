'use client';

import { TradeDTO } from '@/types/dto';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import Link from 'next/link';

export const columns: ColumnDef<TradeDTO>[] = [
  {
    accessorKey: 'symbol',
    header: 'Symbol',
    // header: ({ column }) => (
    //   <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className='pl-0'>
    //     Symbol
    //     <ChevronsUpDown className='ml-2 h-4 w-4' />
    //   </Button>
    // ),
  },
  {
    accessorKey: 'strategy',
    header: 'Strategy',
  },
  {
    accessorKey: 'entry',
    header: 'Entry',
    cell: ({ row }) => formatAmountInInr(row.getValue('entry')),
  },
  {
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  {
    accessorKey: 'risk',
    header: 'Risk',
    cell: ({ row }) => formatAmountInInr(row.getValue('risk')),
  },
  {
    accessorKey: 'exit',
    header: 'Exit',
    cell: ({ row }) => formatAmountInInr(row.getValue('exit')),
  },
  {
    accessorKey: 'entryDate',
    header: 'Entry Date',
  },
  {
    accessorKey: 'exitDate',
    header: 'Exit Date',
  },
  {
    accessorKey: 'return',
    header: 'Return',
    cell: ({ row }) => formatAmountInInr(row.getValue('return')),
  },
  {
    accessorKey: 'returnPercent',
    header: 'Return %',
    cell: ({ row }) => <span>{row.getValue('returnPercent')}%</span>,
  },
  {
    accessorKey: 'rMultiple',
    header: 'R',
    cell: ({ row }) => <span>{row.getValue('rMultiple')}R</span>,
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const trade = row.original;
      return (
        <Link href={`/trades/${trade.id}`}>
          <Pencil size={16} />
        </Link>
      );
    },
  },
  // {
  //   id: 'actions',
  //   cell: ({ row }) => {
  //     const trade = row.original;
  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant='ghost' className='h-8 w-8 p-0'>
  //             <span className='sr-only'>Open menu</span>
  //             <MoreVertical className='h-4 w-4' />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align='end'>
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem onClick={() => navigator.clipboard.writeText(trade.id)}>Copy payment ID</DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

const formatAmountInInr = (amount: string) => {
  const entry = parseFloat(amount);
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format(entry);
  return formatted;
};
