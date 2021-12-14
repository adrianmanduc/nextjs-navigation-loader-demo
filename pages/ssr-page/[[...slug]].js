import React from 'react';

import PageInfo from '../../components/PageInfo';
import { getRandomColor, random, stall } from '../../utils';


export const getServerSideProps = async ({ params }) => {

  const {slug} = params;
  const generationDuration = random(500, 3000);
  const color = getRandomColor();

  await stall(generationDuration);

  return {
    props: {
      slug,
      generationDuration,
      color,
      type: "SSR"
    }
  };
};

export default function Page(props) {
  return <PageInfo {...props}/>;
}

