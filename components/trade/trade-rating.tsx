import { Rating, RatingButton } from '../ui/rating';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Field, FieldLabel } from '../ui/field';
import { Textarea } from '../ui/textarea';
import { TradeReviewDTO, TradeReviewsDTO } from '@/types/dto';
import TradeInsights from './trade-insights';

interface TradeRatingProps {
  type: keyof TradeReviewsDTO;
  title: string;
  review: TradeReviewDTO | null;
  updateReview: (type: keyof TradeReviewsDTO, score: number, comments: string) => void;
}

const TradeRating = ({ type, title, review, updateReview }: TradeRatingProps) => {
  const rating = review && review.score ? review.score : 0;
  const comments = review && review.comments ? review.comments : '';

  const onRatingChange = (value: number) => {
    updateReview(type, value, comments);
  };

  const onCommentsChange = (value: string) => {
    updateReview(type, rating, value);
  };

  return (
    <Card className='ring-0 pt-0'>
      <CardHeader>
        <CardTitle className='font-semibold'>{title}</CardTitle>
      </CardHeader>
      <CardContent className='grid gap-4'>
        <Field className='grid grid-cols-[1fr_1fr_1fr]'>
          <FieldLabel className='text-muted-foreground'>Rating</FieldLabel>
          <Rating value={rating} onValueChange={onRatingChange}>
            <RatingButton />
            <RatingButton />
            <RatingButton />
            <RatingButton />
            <RatingButton />
          </Rating>
          {rating && <span className=''>{rating} / 5</span>}
        </Field>
        <Field>
          <FieldLabel htmlFor={`comments-${title.toLowerCase()}`} className='text-muted-foreground'>
            Comments
          </FieldLabel>
          <Textarea
            id={`comments-${title.toLowerCase()}`}
            placeholder={`How well did you execute the ${title.toLowerCase()}?`}
            className='h-[120px]'
            defaultValue={comments}
            onChange={(e) => onCommentsChange(e.target.value)}
          />
        </Field>
        <TradeInsights type={type} />
      </CardContent>
    </Card>
  );
};
export default TradeRating;
