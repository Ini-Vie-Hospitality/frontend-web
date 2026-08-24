import { revalidatePath } from 'next/cache';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  if (request.headers.get('authorization') !== `Bearer ${process.env.FRONTEND_REVALIDATE_SECRET}`) return NextResponse.json({ message: 'Forbidden' }, { status: 403 });
  revalidatePath('/');
  return NextResponse.json({ revalidated: true });
}
