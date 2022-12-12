import Head from 'next/head';
import Image from 'next/image';
import Logo from '../components/Logo';
import { useState, useRef, useEffect } from 'react';

export default function Home() {
  const ref = useRef(null);

  return (
    <div
      className='bg-black h-screen flex justify-center items-center'
      ref={ref}
    >
      <Logo globalRef={ref} />
    </div>
  );
}
