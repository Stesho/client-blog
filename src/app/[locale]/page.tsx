import React from 'react';
import { HomeInfo } from '@/components/ui/HomeInfo/HomeInfo';
import { HomeAllPosts } from '@/components/ui/HomeAllPosts/HomeAllPosts';

export default function Home() {
  return (
    <main>
      <HomeInfo />
      <HomeAllPosts />
    </main>
  );
}
