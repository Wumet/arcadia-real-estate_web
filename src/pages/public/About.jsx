import Testimonials from "../../components/home/Testimonials";
import Services from "../../components/home/Services";
import Button from "../../components/Button";
import { GrSecure } from "react-icons/gr";
import { SiFuturelearn } from "react-icons/si";
import { PiHandshake } from "react-icons/pi";
import H1 from "../../components/H1";

const values = [
  {
    id: "1",
    icon: <PiHandshake />,
    title: "Transparency",
    description: "Clear processes and honest communication with every client.",
  },
  {
    id: "2",
    icon: <GrSecure />,
    title: "Security",
    description:
      "Proper verification and documentation for every property we offer.",
  },
  {
    id: "3",
    icon: <SiFuturelearn />,
    title: "Long-term Vision",
    description:
      "We focus on locations that have real potential to grow into thriving communities.",
  },
];

const teamMembers = [
  {
    id: "1",
    image:
      "https://res.cloudinary.com/do36hdyrf/image/upload/black-businessman-happy-expression_apiwjn.jpg",
    memberName: "Joseph Smith",
    title: "Founder & Managing Director",
  },
  {
    id: "2",
    image:
      "https://res.cloudinary.com/do36hdyrf/image/upload/black-businessman-happy-expression_apiwjn.jpg",
    memberName: "Smith Wath",
    title: "Head of Operations & Documentation",
  },
  {
    id: "3",
    image:
      "https://res.cloudinary.com/do36hdyrf/image/upload/support_mqxg9o.jpg",
    memberName: "Smith Wath",
    title: "Head of Investment & Client Relation",
  },
];
function About() {
  return (
    <main className="">
      {/* hero */}
      <section className="relative h-[40vh] sm:h-[50vh] lg:h-[60vh] px-6 sm:px-20 xl:px-40 2xl:px-50 bg-[url(https://res.cloudinary.com/do36hdyrf/image/upload/group-afro-americans-working-together_g5udeo.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-center">
        {/* overlay */}
        <div className="h-full absolute inset-0 bg-black/70 z-10"></div>
        {/* content */}
        <div className="relative text-neutral-200 text-center space-y-4 z-20">
          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-[510] lg:leading-14">
            About Us
          </h1>
          <p className="text-xs sm:text-lg text-neutral-300 font-light">
            Since 2017, Arcadia has been at the forefront of luxury urban
            development, crafting spaces that inspire growth and elevate living
            standards.
          </p>
        </div>
      </section>

      {/* stats */}
      <div className="rounded-md relative p-4 sm:py-8 sm:px-14 xl:px-20 2xl:px-40 shadow-neutral-200 bg-primary-700 text-neutral-200 w-5/6 sm:w-2/3 lg:w-1/2 mx-auto -translate-y-14 flex justify-between z-30">
        <div className="text-center">
          <p className="sm:text-2xl font-bold">100+</p>
          <p className="text-[10px] sm:text-xs">Customers</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-bold">25</p>
          <p className="text-[10px] sm:text-xs">Years of Excellence</p>
        </div>
        <div className="text-center">
          <p className="sm:text-2xl font-bold">100+</p>
          <p className="text-[10px] sm:text-xs">Customers</p>
        </div>
      </div>

      {/* who we are */}
      <section className="sm:pt-10 xl:pt-14  px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="relative max-sm:order-2">
          <img
            src="https://res.cloudinary.com/do36hdyrf/image/upload/towfiqu-barbhuiya-05XcCfTOzN4-unsplash_eqknb9.jpg"
            alt=""
            className="rounded-xl"
          />
          {/* overlay */}
          <div className="h-full absolute inset-0 bg-black/20 rounded-xl"></div>
        </div>
        <div className="">
          <H1 title="Who we are" label="Arcadia" />
          <p className="md:text-[18px] mt-4">
            Arcadia Real Estate is more than a property developer; we are
            visionaries of the modern landscape. We specialize in identifying
            high-potential urban environments and transforming them into
            prestigious residential and commercial destinations.
          </p>
        </div>
      </section>

      {/* Our vision & mission */}
      <section className="py-6 sm:py-10 xl:py-14  px-6 sm:px-10 xl:px-40 2xl:px-50  gap-8 items-center">
        <div className="max-sm:space-y-8 sm:grid sm:grid-cols-2 gap-8 items-center">
          <div className="">
            <H1 title="Our Vison" label="Arcadia" />
            <p className=" md:text-[18px] mt-4">
              To be the global benchmark for excellence in sustainable luxury
              real estate, pioneering living concepts that harmonize
              technological advancement with environmental stewardship.
            </p>
          </div>
          <div className="">
            <H1 title="Our Mission" label="Arcadia" />
            <p className=" md:text-[18px] mt-4">
              To deliver unparalleled value to our clients through meticulous
              design, uncompromising quality standards, and a customer- centric
              approach that turns property ownership into a legacy.
            </p>
          </div>
        </div>
      </section>

      {/* core values */}
      <section className="py-6 sm:py-10 xl:py-14  px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-8 sm:space-y-12">
        <H1 title="Our Core Values" label="Commitment" textAlign="center" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-8">
          {values.map((value) => (
            <div className="space-y-3 sm:px-6 xl:px-8 " key={value.id}>
              <div className="text-2xl sm:4xl text-primary-500 bg-foreground w-fit p-3 md:p-4 rounded-full">
                {value.icon}
              </div>
              <h4 className="font-semibold sm:text-lg">{value.title}</h4>
              <div className="max-sm:text-xs">{value.description}</div>
            </div>
          ))}
        </div>
        {/* <img src={Image} alt="" /> */}
      </section>

      {/* services */}
      <Services title="What we do" />

      {/* Team */}
      <section className="py-6 sm:py-10 xl:py-14 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-6 sm:space-y-12 overflow-hidden">
        <H1 title="Meet Our Team" label="Workforce" textAlign="center" />
        <div className="sm:mt-8 flex sm:grid sm:grid-cols-3 xl:grid-cols-4 gap-4 max-sm:overflow-x-scroll no-scrollbar">
          {teamMembers.map((member) => (
            <div className="bg-card rounded-xl p-3 space-y-2 sm:space-y-4 max-sm:w-70 shrink-0">
              <img
                src={member.image}
                alt={member.title}
                className="w-full h-80 rounded-lg object-cover object-center"
              />
              <div className="px-1 pb-3">
                <p className="sm:text-lg font-semibold">{member.memberName}</p>
                <p className="text-xs sm:text-sm opacity-80">{member.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our intention */}
      <section className="py-6 sm:py-10 xl:py-14 px-6 sm:px-10 xl:px-40 2xl:px-50 space-y-6 sm:space-y-12 overflow-hidden grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <div className="space-y-3 sm:space-y-4">
          <H1
            title="Owning land should feel like a step forward, not a risk."
            label="Our intention"
          />
          <p className="">
            Arcadia was created to make land ownership clearer, safer, and more
            accessible for people who want to secure space for their future.
          </p>
          <p className="">
            Whether you are planning to build, invest, or simply take your first
            step into real estate, Arcadia exists to help you do it with
            confidence.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-6 lg:gap-8">
            <Button
              to="/properties"
              label="Browse Properties"
              variant="primary"
              extraClass="max-lg:w-full! max-lg:px-2!"
            />
            <Button
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              label="Explore Investments"
              variant="outline"
              extraClass="max-lg:w-full! max-lg:px-2!"
            />
          </div>
        </div>
        <div className="h-full relative">
          <img
            src="https://res.cloudinary.com/do36hdyrf/image/upload/towfiqu-barbhuiya-05XcCfTOzN4-unsplash_eqknb9.jpg"
            alt=""
            className="rounded-xl h-full object-cover"
          />
        </div>
      </section>

      {/* testimonials */}
      {/* <Testimonials testimonials={testimonials} /> */}

      {/* career/joinus */}
      <section className="pt-6 pb-10 sm:pt-14 sm:pb-24 px-6 sm:px-28 xl:px-40 2xl:px-50 space-y-3 sm:space-y-6 flex flex-col items-center">
        <H1
          title="Careers at Arcardia"
          label="Join US"
          textAlign="center"
          extraClass="!text-2xl sm:leading-10 sm:!text-[40px] 2xl:text-[54px]"
        />
        <p className="text-sm sm:text-[18px] mb-6 text-center">
          Join us in shaping the future of emerging communities.
        </p>
        <Button
          label="View Oppurtunities"
          extraClass="max-sm:!w-full !w-[320px]"
        />
      </section>
    </main>
  );
}

export default About;
