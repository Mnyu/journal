import { getTrajectory } from '@/actions/trade.actions';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { DataTable } from './table/data-table';
import { trajectoryColumns } from './trajectory-columns';

interface TrajectoryProps {
  pagination?: boolean;
}

const Trajectory = async ({ pagination = false }: TrajectoryProps) => {
  const trajectories = await getTrajectory();
  return (
    <section>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Trajectory</CardTitle>
          <CardDescription>Win rate, risk-reward ratio and system edge across multiple time horizons.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={trajectoryColumns} data={trajectories} pagination={pagination} />
        </CardContent>
      </Card>
    </section>
  );
};
export default Trajectory;
