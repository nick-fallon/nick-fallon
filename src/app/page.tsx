import Image from "next/image";
import {ISection} from "@/types/nav.interface";
import Section from "@/components/section/Section";

const sections: ISection[] = [
  {
    id: '9bbf9bf3-2803-452a-9b89-9d2fa8c19d15',
    title: 'Nick Fallon',
    description: 'Software Engineer\n' +
        '\n' +
        'I\'m a passionate software engineer based in San Francisco, specializing in front-end development. I love building beautiful and user-friendly web applications.'
  },
  {
    id: '19709d12-ba6e-4d05-a2d8-f2b9f75899bb',
    title: 'Professional Experience',
    description: 'Here\'s a summary of my professional experience.'
  },
  {
    id: '349f53fc-6b30-4de5-917f-fba6ba47ca2e',
    title: 'Technical Skills',
    description: 'Here\'s a summary of my technical skills.'
  }
]

export default function Home() {
  return (
    <main>
      {sections.map(section =>
          <Section key={section.id} id={section.id} title={section.title} description={section.description} />
      )}
    </main>
  );
}
