import { NextResponse } from 'next/server';

export async function GET() {
  const randomValue = Math.random();
  console.log('run');
  return NextResponse.json({ randomValue }, { status: 200 });
}
