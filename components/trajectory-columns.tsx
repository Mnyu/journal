'use client';

import { ColumnDef } from '@tanstack/react-table';

export type Trajectory = {
  id: string;
  window: string;
  winPercent: number;
  riskReward: string;
  edge: number;
  avgWinPercent: number;
};

export const trajectoryColumns: ColumnDef<Trajectory>[] = [
  {
    accessorKey: 'window',
    header: 'Window',
  },
  {
    accessorKey: 'winPercent',
    header: 'Win %',
  },
  {
    accessorKey: 'riskReward',
    header: 'R:R',
  },
  {
    accessorKey: 'edge',
    header: 'Edge',
  },
  {
    accessorKey: 'avgWinPercent',
    header: 'Avg Win %',
  },
];
