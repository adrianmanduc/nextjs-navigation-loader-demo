import React from 'react';
import PageInfo from '../../components/PageInfo';

import { getRandomColor, random, stall } from '../../utils';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking'
  };
}

export const getStaticProps = async ({ params }) => {

  const {slug} = params;
  const generationDuration = random(500, 3000);
  const color = getRandomColor();

  await stall(generationDuration);

  return {
    props: {
      slug,
      generationDuration,
      color,
      type: "ISR"
    },
    revalidate: 100,
  };
};

export default function Page(props) {
  return <PageInfo {...props}/>;
}

