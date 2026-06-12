'use client';

import { ColumnDef } from '@tanstack/react-table';
import { ChevronsUpDown, MoreVertical, Pencil } from 'lucide-react';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import Link from 'next/link';

export type Trade = {
  id: string;
  symbol: string;
  strategy: string;
  entry: number;
  quantity: number;
  risk: number;
  exit: number;
  entryDate: string;
  exitDate: string;
  gain: number;
  gainPercent: number;
  rMultiple: number;
};

export const columns: ColumnDef<Trade>[] = [
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
    accessorKey: 'gain',
    header: 'Gain',
    cell: ({ row }) => formatAmountInInr(row.getValue('gain')),
  },
  {
    accessorKey: 'gainPercent',
    header: 'Gain %',
    cell: ({ row }) => <span>{row.getValue('exit')}%</span>,
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
