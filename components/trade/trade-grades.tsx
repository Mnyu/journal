'use client';
import { SaveIcon } from 'lucide-react';
import { Button } from '../ui/button';
import { Card, CardAction, CardContent, CardHeader, CardTitle } from '../ui/card';
import TradeRating from './trade-rating';
import { TradeReviewsDTO } from '@/types/dto';
import { useState, useTransition } from 'react';
import { saveReviews } from '@/actions/trade.actions';

interface TradeGradesProps {
  tradeId: string;
  reviews: TradeReviewsDTO | null;
  saveReviews: typeof saveReviews;
}

const TradeGrades = ({ tradeId, reviews }: TradeGradesProps) => {
  const [isPending, startTransition] = useTransition();
  const [entryReview, setEntryReview] = useState(reviews ? reviews.entry : null);
  const [exitReview, setExitReview] = useState(reviews ? reviews.exit : null);

  const updateReview = (type: keyof TradeReviewsDTO, score: number, comments: string) => {
    if (type === 'entry') {
      setEntryReview({ type: 'ENTRY', score: score, comments: comments });
    }
    if (type === 'exit') {
      setExitReview({ type: 'EXIT', score: score, comments: comments });
    }
  };

  const save = () => {
    startTransition(async () => {
      saveReviews({
        tradeId: tradeId,
        entry: entryReview,
        exit: exitReview,
      });
    });
  };

  return (
    <section className='w-full h-full'>
      <Card className='w-full h-full'>
        <CardHeader>
          <CardTitle>Grading</CardTitle>
          <CardAction>
            <Button disabled={isPending} onClick={save}>
              <SaveIcon />
              Save
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <TradeRating title='Entry' type='entry' review={entryReview} updateReview={updateReview} />
          <TradeRating title='Exit' type='exit' review={exitReview} updateReview={updateReview} />
        </CardContent>
      </Card>
    </section>
  );
};
export default TradeGrades;
