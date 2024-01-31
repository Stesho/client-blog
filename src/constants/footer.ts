import FacebookIcon from '@/assets/icons/facebook.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import { ROUTES } from '@/constants/routes';

export const FOOTER_LINKS = [
  ROUTES.home,
  ROUTES.blog,
  ROUTES.about,
  ROUTES.contacts,
  ROUTES.privacyPolicy,
];

export const FOOTER_SOCIAL = [
  {
    iconURL: FacebookIcon,
    alt: 'facebook',
    link: '',
  },
  {
    iconURL: TwitterIcon,
    alt: 'twitter',
    link: '',
  },
  {
    iconURL: InstagramIcon,
    alt: 'instagram',
    link: '',
  },
  {
    iconURL: LinkedinIcon,
    alt: 'linkedin',
    link: '',
  },
];
