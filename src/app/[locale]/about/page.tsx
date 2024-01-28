import React from 'react';
import { AboutUs } from '@/components/ui/AboutUs/AboutUs';
import { OurVision } from '@/components/ui/OurVision/OurVision';
import { AboutBlock } from '@/components/ui/AboutBlock/AboutBlock';
import TeamImg from '@/assets/img/aboutUs/ground-group-growth.jpg';
import WhyWeStartedImg from '@/assets/img/aboutUs/three-persons-sitting.jpg';
import { AuthorsList } from '@/components/ui/AuthorsList/AuthorsList';
import { AUTHORS } from '@/constants/authors';
import { Join } from '@/components/ui/Join/Join';
import { AboutStatistic } from '@/components/ui/AboutStatistic/AboutStatistic';

export default function AboutPage() {
  return (
    <main>
      <AboutUs />
      <AboutStatistic />
      <OurVision />
      <AboutBlock
        title='Our team of creatives'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
        image={TeamImg}
      />
      <AboutBlock
        title='Why we started this Blog'
        subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.'
        text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.'
        image={WhyWeStartedImg}
        isReversed
      />
      <AuthorsList authors={AUTHORS.slice(0, 8)} className='section' />
      <Join />
    </main>
  );
}