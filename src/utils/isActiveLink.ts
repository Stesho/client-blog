export const isActiveLink = (pathname: string, link: string) => {
  if (link === '/') {
    return pathname.split('/').length === 2;
  }

  return pathname.includes(link);
};
