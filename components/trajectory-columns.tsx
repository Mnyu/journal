'use client';

import { TrajectoryDTO } from '@/types/dto';
import { ColumnDef } from '@tanstack/react-table';

export const trajectoryColumns: ColumnDef<TrajectoryDTO>[] = [
  {
    accessorKey: 'period',
    header: 'Period',
  },
  {
    accessorKey: 'winRate',
    header: 'Win %',
  },
  {
    accessorKey: 'riskReward',
    header: 'Risk : Reward',
  },
  {
    accessorKey: 'edge',
    header: 'Edge',
  },
];
