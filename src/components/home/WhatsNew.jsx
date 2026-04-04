import { Link } from "react-router-dom";
import NewsCard from "./NewsCard";
import H1 from "../H1";

function WhatsNew({ announcements }) {
  return (
    <section className="py-10 sm:py-14 2xl:py-20 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12 ">
      <div className="flex max-sm:flex-col justify-between sm:items-center">
        <H1 label="Stay Updated" title="What's New" />
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
