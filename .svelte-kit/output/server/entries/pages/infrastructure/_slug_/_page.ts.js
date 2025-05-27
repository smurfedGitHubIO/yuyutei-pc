import { e as error } from "../../../../chunks/index.js";
import { i as infrastructures } from "../../../../chunks/infrastructures.js";
const load = ({ params }) => {
  const { slug } = params;
  const infrastructure = infrastructures.find((i) => i.slug === slug);
  if (!infrastructure) {
    throw error(404, "Infrastructure not found");
  }
  return {
    infrastructure
  };
};
export {
  load
};
