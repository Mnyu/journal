import { trajectories } from '@/config/dashboard-trajectory';
import { trajectoryColumns } from './dashboard-trajectory-columns';
import { DataTable } from '../ui/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const DashboardTrajectoryTable = () => {
  return (
    <section>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Trajectory</CardTitle>
          <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={trajectoryColumns} data={trajectories} />
        </CardContent>
      </Card>
    </section>
  );
};
export default DashboardTrajectoryTable;
