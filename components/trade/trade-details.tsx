import { TradeDTO } from '@/types/dto';
import DescriptionItem from '../description-item';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

interface TradeDetailsProps {
  trade: TradeDTO;
}

const TradeDetails = ({ trade }: TradeDetailsProps) => {
  return (
    <section>
      <Card className='w-full h-full'>
        <CardHeader>
          <CardTitle>Details</CardTitle>
        </CardHeader>
        <CardContent className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3'>
          <DescriptionItem label='Symbol' value={trade.symbol} />
          <DescriptionItem label='Entry' value={trade.entry} />
          <DescriptionItem label='Quantity' value={trade.quantity} />
          <DescriptionItem label='Risk' value={trade.risk} />
          <DescriptionItem label='Order Id' value={trade.orderId} />
          <DescriptionItem label='Exit' value={trade.exit} />
          <DescriptionItem label='Entry Date' value={trade.entryDate} />
          <DescriptionItem label='Exit Date' value={trade.exitDate} />
          <DescriptionItem label='Strategy' value={trade.strategy} />
          <DescriptionItem label='Return' value={trade.return} />
          <DescriptionItem label='Return %' value={trade.returnPercent} />
          <DescriptionItem label='R' value={trade.rMultiple} />
        </CardContent>
      </Card>
    </section>
  );
};
export default TradeDetails;
