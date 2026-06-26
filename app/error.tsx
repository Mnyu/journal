'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';
import Link from 'next/link';

interface ErrorProps {
  error: Error;
  reset: () => void;
}

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2'>
      <div className='relative h-full w-full hidden lg:block'>
        <Image src='/images/error.png' alt='error-image' fill priority sizes='100%' />
      </div>
      <div className='h-full flex items-center justify-center'>
        <Card className='w-full max-w-lg ring-0'>
          <CardHeader className='my-4 gap-3 text-center'>
            <CardTitle className='text-5xl xl:text-6xl py-2 font-serif'>Error</CardTitle>
            <CardTitle className='text-2xl xl:text-3xl py-2 font-serif'>
              {error.message || 'Something went wrong'}
            </CardTitle>
            <CardDescription className='text-lg xl:text-xl font-sans'></CardDescription>
            <Separator />
          </CardHeader>
          <CardContent className='flex flex-col gap-3'>
            <CardDescription className='text-lg xl:text-xl font-sans'>
              Looks like this page took an unexpected turn. Let's get you back on track
            </CardDescription>
            <Button className='w-full my-4 h-12 text-lg font-semibold rounded-xl cursor-pointer'>
              <Link href='/'>Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
export default Error;
