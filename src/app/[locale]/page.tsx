import React from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { InfiniteScroll } from '@/components/InfiniteScroll/InfiniteScroll';
import { Testimonials } from '@/components/Testimonials/Testimonials';
import { AuthorsList } from '@/components/ui/AuthorsList/AuthorsList';
import { Categories } from '@/components/ui/Categories/Categories';
import { FeaturedIn } from '@/components/ui/FeaturedIn/FeaturedIn';
import { HomeInfo } from '@/components/ui/HomeInfo/HomeInfo';
import { HomePosts } from '@/components/ui/HomePosts/HomePosts';
import { Join } from '@/components/ui/Join/Join';
import { OurMission } from '@/components/ui/OurMission/OurMission';
import { WhyWeStarted } from '@/components/ui/WhyWeStarted/WhyWeStarted';
import { AUTHORS } from '@/constants/authors';
import { POSTS } from '@/constants/posts';
import { PageParams } from '@/types/pageParams';

export default function Home({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('home.testimonials');

  return (
    <main>
      <HomeInfo post={POSTS[0]} />
      <InfiniteScroll>
        <HomePosts post={POSTS[1]} />
        <OurMission />
        <Categories />
        <WhyWeStarted />
        <AuthorsList authors={AUTHORS.slice(0, 4)} />
        <FeaturedIn />
        <Testimonials
          messages={{
            caption: t('caption'),
            title: t('title'),
            text: t('text'),
          }}
        />
        <Join />
      </InfiniteScroll>
    </main>
  );
}
