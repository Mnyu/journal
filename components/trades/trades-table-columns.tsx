// 'use client';

import { TradeDTO } from '@/types/dto';
import { ColumnDef } from '@tanstack/react-table';
import { Pencil } from 'lucide-react';
import Link from 'next/link';

export const tradeColumnsMap = {
  symbol: {
    id: 'symbol',
    accessorKey: 'symbol',
    header: 'Symbol',
    // header: ({ column }) => (
    //   <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className='pl-0'>
    //     Symbol
    //     <ChevronsUpDown className='ml-2 h-4 w-4' />
    //   </Button>
    // ),
  },
  strategy: {
    id: 'strategy',
    accessorKey: 'strategy',
    header: 'Strategy',
  },
  entry: {
    id: 'entry',
    accessorKey: 'entry',
    header: 'Entry',
    cell: ({ row }) => formatAmountInInr(row.getValue('entry')),
  },
  quantity: {
    id: 'quantity',
    accessorKey: 'quantity',
    header: 'Quantity',
  },
  risk: {
    id: 'risk',
    accessorKey: 'risk',
    header: 'Risk',
    cell: ({ row }) => formatAmountInInr(row.getValue('risk')),
  },
  exit: {
    id: 'exit',
    accessorKey: 'exit',
    header: 'Exit',
    cell: ({ row }) => formatAmountInInr(row.getValue('exit')),
  },
  entryDate: {
    id: 'entryDate',
    accessorKey: 'entryDate',
    header: 'Entry Date',
  },
  exitDate: {
    id: 'exitDate',
    accessorKey: 'exitDate',
    header: 'Exit Date',
  },
  return: {
    id: 'return',
    accessorKey: 'return',
    header: 'Return',
    cell: ({ row }) => {
      if (row.getValue('return') === null || row.getValue('return') === '') {
        return <></>;
      }
      const formattedAmt = formatAmountInInr(row.getValue('return'));
      let className = 'text-[var(--green)]';
      if (formattedAmt.startsWith('-')) {
        className = 'text-[var(--red)]';
      }
      return <span className={className}>{formattedAmt}</span>;
    },
  },
  returnPercent: {
    id: 'returnPercent',
    accessorKey: 'returnPercent',
    header: 'Return %',
    cell: ({ row }) => {
      const value = row.getValue('returnPercent') as number;
      if (value == null) {
        return <></>;
      }
      let className = 'text-[var(--green)]';
      if (value < 0) {
        className = 'text-[var(--red)]';
      }
      return <span className={className}>{value}%</span>;
    },
  },
  rMultiple: {
    id: 'rMultiple',
    accessorKey: 'rMultiple',
    header: 'R',
    cell: ({ row }) => {
      const value = row.getValue('rMultiple') as number;
      if (value == null) {
        return <></>;
      }
      let className = 'text-[var(--green)]';
      if (value < 0) {
        className = 'text-[var(--red)]';
      }
      return <span className={className}>{value}R</span>;
    },
  },
  edit: {
    id: 'edit',
    header: 'Edit',
    cell: ({ row }) => {
      const trade = row.original;
      return (
        <Link href={`/trades/${trade.id}`}>
          <Pencil size={16} />
        </Link>
      );
    },
  },
} satisfies Record<string, ColumnDef<TradeDTO>>;

// export const columns: ColumnDef<TradeDTO>[] = [
//   {
//     accessorKey: 'symbol',
//     header: 'Symbol',
//     // header: ({ column }) => (
//     //   <Button variant='ghost' onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')} className='pl-0'>
//     //     Symbol
//     //     <ChevronsUpDown className='ml-2 h-4 w-4' />
//     //   </Button>
//     // ),
//   },
//   {
//     accessorKey: 'strategy',
//     header: 'Strategy',
//   },
//   {
//     accessorKey: 'entry',
//     header: 'Entry',
//     cell: ({ row }) => formatAmountInInr(row.getValue('entry')),
//   },
//   {
//     accessorKey: 'quantity',
//     header: 'Quantity',
//   },
//   {
//     accessorKey: 'risk',
//     header: 'Risk',
//     cell: ({ row }) => formatAmountInInr(row.getValue('risk')),
//   },
//   {
//     accessorKey: 'exit',
//     header: 'Exit',
//     cell: ({ row }) => formatAmountInInr(row.getValue('exit')),
//   },
//   {
//     accessorKey: 'entryDate',
//     header: 'Entry Date',
//   },
//   {
//     accessorKey: 'exitDate',
//     header: 'Exit Date',
//   },
//   {
//     accessorKey: 'return',
//     header: 'Return',
//     cell: ({ row }) => formatAmountInInr(row.getValue('return')),
//   },
//   {
//     accessorKey: 'returnPercent',
//     header: 'Return %',
//     cell: ({ row }) => <span>{row.getValue('returnPercent')}%</span>,
//   },
//   {
//     accessorKey: 'rMultiple',
//     header: 'R',
//     cell: ({ row }) => <span>{row.getValue('rMultiple')}R</span>,
//   },
//   {
//     id: 'actions',
//     cell: ({ row }) => {
//       const trade = row.original;
//       return (
//         <Link href={`/trades/${trade.id}`}>
//           <Pencil size={16} />
//         </Link>
//       );
//     },
//   } satisfies Record<string, ColumnDef<TradeDTO>>,
// ];

const formatAmountInInr = (amount: string) => {
  if (amount != '0' && !amount) return '';
  const entry = parseFloat(amount);
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'INR',
  }).format(entry);
  return formatted;
};
