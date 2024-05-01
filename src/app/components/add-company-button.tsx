'use client';

import React, { useState } from 'react';
// import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import Button, {ButtonProps} from '@/app/components/button';

// const CompanyFormModal = dynamic(() => import('./company-form-modal'), {
//   ssr: false,
// });

export default function AddCompanyButton(props: ButtonProps) {
  // const [show, setShow] = useState(false);
    const router = useRouter();
  return (
    <>
      {/*<Button {...props} onClick={()=>setShow(true)}>Add company</Button>*/}
      {/*<CompanyFormModal*/}
      {/*  onSubmit={console.log}*/}
      {/*  show={show}*/}
      {/*  onClose={() => setShow(false)}*/}
      {/*/>*/}
        <Button onClick={() => router.push('/companies/new')}>Add company</Button>
    </>
  );
}
