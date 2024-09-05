"use client";
import { Input } from '@nextui-org/input'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { title } from '@/src/components/primitives';
import { Button } from '@nextui-org/button';
import Link from 'next/link';
import { PackageProvider, usePackage } from '../package/PackageContext';
import CheckoutView from '@/src/module/checkout/checkoutView';


const page = () => {
  return (
    <>
        <CheckoutView />
    </>
  )
}

export default page