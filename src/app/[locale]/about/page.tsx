import React from 'react';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import TeamImg from '@/assets/img/aboutUs/ground-group-growth.jpg';
import WhyWeStartedImg from '@/assets/img/aboutUs/three-persons-sitting.jpg';
import { AboutBlock } from '@/components/ui/AboutBlock/AboutBlock';
import { AboutStatistic } from '@/components/ui/AboutStatistic/AboutStatistic';
import { AboutUs } from '@/components/ui/AboutUs/AboutUs';
import { AuthorsList } from '@/components/ui/AuthorsList/AuthorsList';
import { Join } from '@/components/ui/Join/Join';
import { OurVision } from '@/components/ui/OurVision/OurVision';
import { AUTHORS } from '@/constants/authors';
import { PageParams } from '@/types/pageParams';

export default function AboutPage({ params }: { params: PageParams }) {
  unstable_setRequestLocale(params.locale);
  const t = useTranslations('about');

  return (
    <main>
      <AboutUs />
      <AboutStatistic />
      <OurVision />
      <AboutBlock
        image={TeamImg}
        messages={{
          title: t('creatives.title'),
          subtitle: t('creatives.subtitle'),
          text: t('creatives.text'),
        }}
      />
      <AboutBlock
        messages={{
          title: t('whyWeStarted.title'),
          subtitle: t('whyWeStarted.subtitle'),
          text: t('whyWeStarted.text'),
        }}
        image={WhyWeStartedImg}
        isReversed
      />
      <AuthorsList authors={AUTHORS.slice(0, 8)} className='section' />
      <Join />
    </main>
  );
}
