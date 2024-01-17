import React from 'react';
import { HomeInfo } from '@/components/ui/HomeInfo/HomeInfo';
import PostImg from '@/assets/img/posts/white-concrete-building.png';
import { HomePosts } from '@/components/ui/HomePosts/HomePosts';
import { OurMission } from '@/components/ui/OurMission/OurMission';
import { Categories } from '@/components/ui/Categories/Categories';
import { WhyWeStarted } from '@/components/ui/WhyWeStarted/WhyWeStarted';
import { AuthorsList } from '@/components/ui/AuthorsList/AuthorsList';
import { FeaturedIn } from '@/components/ui/FeaturedIn/FeaturedIn';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Join } from '@/components/ui/Join/Join';

export default function Home() {
  return (
    <main>
      <HomeInfo />
      <HomePosts
        imageURL={PostImg}
        alt='white concrete building'
        author='John Doe'
        title='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.'
        text='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.'
        date='May 23, 2022'
      />
      <OurMission />
      <Categories />
      <WhyWeStarted />
      <AuthorsList />
      <FeaturedIn />
      <Testimonials />
      <Join />
    </main>
  );
}
