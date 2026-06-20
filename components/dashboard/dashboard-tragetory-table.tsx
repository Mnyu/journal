import { trajectories } from '@/config/trajectory';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { trajectoryColumns } from '../trajectory-columns';
import { DataTable } from '../table/data-table';

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
