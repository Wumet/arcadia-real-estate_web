import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

function NewsCard({ announcement }) {
  return (
    <div className="max-sm:grid max-sm:grid-cols-2 gap-4 h-fit rounded-xl pb-6 grow space-y-2 overflow-hidden">
      <img
        src={announcement.imageUrl}
        alt={announcement.title}
        className="bg-cover h-full w-full bg-center"
      />
      <div className="space-y-2">
        <h4 className="text-xl xl:text-xl font-bold ">{announcement.title}</h4>
        <p className="text-neutral-600 font-light">
          {announcement.description}
        </p>
        <Link>
          <p className="text-accent flex items-center gap-4 opacity-80">
            <span>{announcement.cta}</span>
            <FaArrowRight className="text-sm" />
          </p>
        </Link>
      </div>
    </div>
  );
}

export default NewsCard;
