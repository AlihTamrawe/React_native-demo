import Heading from './Heading.js';
import Section from './Section.js';

export default function Pages() {
  return (
    <Section>
      <Heading level={1}>Title</Heading>
      <Section>
        <Heading level={2}>main chart</Heading>
        <Heading level={2}>story </Heading>
        <Heading level={2}>Heading</Heading>
        <Section>
          <Heading level={3}>Sub-door</Heading>
          <Heading level={3}>Sub-soie</Heading>
          <Heading level={5}>Sub-kalla</Heading>
          <Section>
            <Heading level={4}>Sub-sub-door</Heading>
            <Heading level={4}>Sub-sub-soie</Heading>
            <Heading level={6}>Sub-sub-kalla</Heading>
          </Section>
        </Section>
      </Section>
    </Section>
  );
}
