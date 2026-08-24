import { revalidatePath, revalidateTag } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.FRONTEND_REVALIDATE_SECRET}`) return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  revalidateTag('homepage', 'max');
  revalidatePath('/');
  return NextResponse.json({ revalidated: true });
}
