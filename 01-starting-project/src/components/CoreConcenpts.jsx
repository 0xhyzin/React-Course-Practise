import {CoreConcenpt} from './CoreConcenpt'
import {CORE_CONCEPTS} from './../data'

export const CoreConcenpts = () => {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2>
      <ul>
        {CORE_CONCEPTS.map((C, I) => (
          <CoreConcenpt key={I} {...C} />
        ))}
      </ul>
    </section>
  );
};
