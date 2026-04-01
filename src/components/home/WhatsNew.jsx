import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";

function WhatsNew({ announcements }) {
  return (
    <section className="pb-10 sm:pb-20 2xl:pb-40 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12 ">
      <div className="flex max-sm:flex-col justify-between sm:items-center">
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
          What's New
        </h1>
        <p className="xl:text-xl text-neutral-600">
          Stay updated with our latest architectural breakthroughs,
          <br className="max-sm:hidden" />
          exclusive events, and limited-time opportunities.
        </p>
      </div>
      <div className="flex max-sm:flex-col gap-4">
        {announcements.map((announcement) => (
          <NewsCard
            key={announcement.id}
            announcement={announcement}
          ></NewsCard>
        ))}
      </div>
    </section>
  );
}

export default WhatsNew;
