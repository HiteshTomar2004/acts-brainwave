import PersonCard from "./components/PersonCard";
import { people } from "./data";

export default function MentorsCarousel() {
  return (
    <div className="overflow-hidden py-8">
      
      <div className="mentors-track gap-10">
        {[...people, ...people].map((person, index) => (
          <PersonCard
            key={`${person.id}-${index}`}
            person={person}
          />
        ))}
      </div>
    </div>
  );
}