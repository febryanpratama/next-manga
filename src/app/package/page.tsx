// pages/page.tsx
import React from 'react';
import PackageView from '@/src/module/package/packageView'; // Ensure the correct import path
import { PackageProvider } from './PackageContext';

const Page: React.FC = () => {
  return (
    <>
      <PackageView />
    </>
  );
};

export default Page;
