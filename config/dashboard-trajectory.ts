import { Trajectory } from '@/components/dashboard/dashboard-trajectory-columns';

export const trajectories: Trajectory[] = [
  {
    id: '1',
    window: 'LAST 5',
    winPercent: 80.0,
    riskReward: '4.99x',
    edge: 19.95,
    avgWinPercent: 57.42,
  },
  {
    id: '2',
    window: 'LAST 10',
    winPercent: 50.0,
    riskReward: '6.27x',
    edge: 6.27,
    avgWinPercent: 46.09,
  },
  {
    id: '3',
    window: 'HISTORIC',
    winPercent: 47.22,
    riskReward: '2.45x',
    edge: 2.19,
    avgWinPercent: 16.72,
  },
];
