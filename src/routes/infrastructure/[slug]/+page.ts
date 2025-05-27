import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { infrastructures } from '$lib/data/infrastructures';

export const load: PageLoad = ({ params }) => {
  const { slug } = params;
  
  const infrastructure = infrastructures.find(i => i.slug === slug);
  
  if (!infrastructure) {
    throw error(404, 'Infrastructure not found');
  }
  
  return {
    infrastructure
  };
};