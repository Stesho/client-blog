import React from 'react';
import { HomeInfo } from '@/components/ui/HomeInfo/HomeInfo';
import { HomePosts } from '@/components/ui/HomePosts/HomePosts';
import { OurMission } from '@/components/ui/OurMission/OurMission';
import { Categories } from '@/components/ui/Categories/Categories';
import { WhyWeStarted } from '@/components/ui/WhyWeStarted/WhyWeStarted';
import { AuthorsList } from '@/components/ui/AuthorsList/AuthorsList';
import { FeaturedIn } from '@/components/ui/FeaturedIn/FeaturedIn';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { Join } from '@/components/ui/Join/Join';
import { InfiniteScroll } from '@/components/InfiniteScroll/InfiniteScroll';
import { AUTHORS } from '@/constants/authors';
import { POSTS } from '@/constants/posts';

export default function Home() {
  return (
    <main>
      <HomeInfo />
      <InfiniteScroll>
        <HomePosts post={POSTS[0]} />
        <OurMission />
        <Categories />
        <WhyWeStarted />
        <AuthorsList authors={AUTHORS.slice(0, 4)} />
        <FeaturedIn />
        <Testimonials />
        <Join />
      </InfiniteScroll>
    </main>
  );
}
