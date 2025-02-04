import React from 'react';

export const revalidate = 60;

export default async function RevalidatePage() {
  const randomValue = await fetch('http://localhost:3000/api/random', {
    method: 'GET',
  });
  const value = await randomValue.json();
  console.log(value.randomValue);
  return <>{value.randomValue}</>;
}
