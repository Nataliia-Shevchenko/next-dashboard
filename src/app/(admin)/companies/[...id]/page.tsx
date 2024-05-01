'use client';

import React, { useEffect } from 'react';
import Header from '@/app/components/header';
import { notFound } from 'next/navigation';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  useEffect(() => {
    const id = Number.parseInt(params.id);
    if (Number.isNaN(id)) {
      notFound();
    }
  });
  return (
      <>
        {/*<Header>Companies({params.id})</Header>*/}
        <div className="py-6 px-10">
          <p>{`Information about company (${params.id})`}</p>
        </div>
      </>
  );
}
