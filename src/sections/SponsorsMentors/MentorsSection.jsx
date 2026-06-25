import PersonCard from "./components/PersonCard";
import { people } from "./data";

export default function MentorsSection() {

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto">
      {people.map((person, index) => (
        <PersonCard
          key={person.id}
          person={person}
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}