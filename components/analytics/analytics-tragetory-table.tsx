import { trajectories } from '@/config/dashboard-trajectory';
import { DataTable } from '../ui/data-table';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { trajectoryColumns } from '../trajectory-columns';

const AnalyticsTrajectoryTable = () => {
  return (
    <section>
      <Card className='w-full'>
        <CardHeader>
          <CardTitle>Trajectory</CardTitle>
          <CardDescription>Your exercise minutes are ahead of where you normally are.</CardDescription>
        </CardHeader>
        <CardContent>
          <DataTable columns={trajectoryColumns} data={trajectories} pagination={false} />
        </CardContent>
      </Card>
    </section>
  );
};
export default AnalyticsTrajectoryTable;
