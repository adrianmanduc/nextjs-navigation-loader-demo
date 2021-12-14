import React from 'react';

import PageInfo from '../../components/PageInfo';
import { getRandomColor} from '../../utils';


export const getServerSideProps = async () => {

  const color = getRandomColor();

  return {
    props: {
      slug: "SSR Fast",
      generationDuration: 0,
      color,
      type: "SSR"
    }
  };
};

export default function Page(props) {
  return <PageInfo {...props}/>;
}

