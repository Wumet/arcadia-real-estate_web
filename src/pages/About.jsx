import Image from "../assets/luxury-estate.png";
import memberImage from "../assets/ceo.jpg";
import Testimonials from "../components/home/Testimonials";
import { FaHandshakeAngle } from "react-icons/fa6";
import Button from "../components/Button";

function About() {
  const values = [
    {
      id: "1",
      icon: <FaHandshakeAngle />,
      title: "Quality",
      description:
        "Setting the gold standard in construction and finishing details.",
    },
    {
      id: "2",
      icon: <FaHandshakeAngle />,
      title: "Quality",
      description:
        "Setting the gold standard in construction and finishing details.",
    },
    {
      id: "3",
      icon: <FaHandshakeAngle />,
      title: "Quality",
      description:
        "Setting the gold standard in construction and finishing details.",
    },
    {
      id: "4",
      icon: <FaHandshakeAngle />,
      title: "Quality",
      description:
        "Setting the gold standard in construction and finishing details.",
    },
  ];

  const teamMembers = [
    {
      id: "1",
      image: memberImage,
      memberName: "Joseph Smith",
      title: "CEO",
    },
    {
      id: "2",
      image: memberImage,
      memberName: "Smith Wath",
      title: "CEO",
    },
  ];

  return (
    <>
      <title>About</title>
      <div className="">
        {/* hero */}
        <section className="relative h-[50vh] lg:h-[60vh] py-14 sm:py-20 2xl:py-30 px-6 sm:px-20 xl:px-40 2xl:px-50 space-y-8 md:space-y-12 bg-[url(./assets/heroImage.jpg)] bg-cover bg-no-repeat bg-center flex justify-center items-center">
          {/* overlay */}
          <div className="absolute inset-0 bg-linear-to-bl from-black/70 to-black/70 z-10"></div>
          {/* content */}
          <div className="relative text-neutral-200 text-center space-y-4 z-20">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-[510]">
              Building communities, creating <br /> lasting value
            </h1>
            <p className="md:text-xl text-neutral-300 font-light">
              Since 2017, Arcadia has been at the forefront of luxury urban
              development, crafting spaces that inspire growth and elevate
              living standards.
            </p>
          </div>
        </section>

        {/* metrics */}
        <div className="rounded-md relative px-10 xl:px-20 2xl:px-40 shadow-lg shadow-neutral-200 bg-primary-600 text-neutral-200 max-sm:w-5/6 w-1/2 mx-auto p-8 -translate-y-14 flex justify-between z-30">
          <div className="text-center">
            <p className="text-2xl font-bold">100+</p>
            <p className="text-sm">Customers</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">25</p>
            <p className="text-sm">Years of Excellence</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold">100+</p>
            <p className="text-sm">Customers</p>
          </div>
        </div>

        {/* who we are */}
        <section className="py-6 sm:py-14 2xl:py-18 px-6 sm:px-20 xl:px-40 2xl:px-50 grid grid-cols-2 gap-8">
          <div className="h-fit xl:h-140 relative">
            {/* <div className="bg-primary-500 rounded-xl -translate-y-4 translate-x-4 absolute inset-0 -z-10"></div> */}
            <img src={Image} alt="" className="rounded-xl" />
          </div>
          <div className="">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
              Who we are
            </h1>
            <p className="text-neutral-500 md:text-[18px] mt-4">
              Arcadia Real Estate is more than a property developer; we are
              visionaries of the modern landscape. We specialize in identifying
              high-potential urban environments and transforming them into
              prestigious residential and commercial destinations.
            </p>
          </div>
        </section>

        {/* Our vision & mission */}
        <section className="pb-14 sm:pb-20 2xl:pb-30 px-6 sm:px-20 xl:px-40 2xl:px-50 grid sm:grid-cols-2  gap-8">
          <img src={Image} alt="" className="h-full" />
          <div className="">
            <div className="sm:pr-8x">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
                Our Vison
              </h1>
              <p className="text-neutral-500 md:text-[18px] mt-4">
                To be the global benchmark for excellence in sustainable luxury
                real estate, pioneering living concepts that harmonize
                technological advancement with environmental stewardship.
              </p>
            </div>
            <div className="sm:mt-8">
              <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
                Our Mission
              </h1>
              <p className="text-neutral-500 md:text-[18px] mt-4">
                To deliver unparalleled value to our clients through meticulous
                design, uncompromising quality standards, and a customer-
                centric approach that turns property ownership into a legacy.
              </p>
            </div>
          </div>
        </section>
        {/* core values */}
        <section className="pb-14 sm:pb-20 2xl:pb-30 px-6 sm:px-20 xl:px-40 2xl:px-50">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
            Our Core Values
          </h1>
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 mt-8 ">
            {values.map((value) => (
              <div
                className="space-y-3 rounded-md bg-whitex py-4 px-4 sm:px-6 xl:px-8 border-l-3 border-accent"
                key={value.id}
              >
                <div className="text-5xl xl:6xl text-primary-500">
                  {value.icon}
                </div>
                <div className="font-bold">{value.title}</div>
                <div className="text-neutral-500">{value.description}</div>
              </div>
            ))}
          </div>
          {/* <img src={Image} alt="" /> */}
        </section>

        {/* Team */}
        <section className="pb-14 sm:pb-20 2xl:pb-30 px-6 sm:px-20 xl:px-40 2xl:px-50">
          <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510]">
            Meet Our Team
          </h1>
          <div className="mt-8 grid grid-cols-4 gap-4">
            {teamMembers.map((member) => (
              <div className="">
                <img
                  src={member.image}
                  alt={member.title}
                  className="w-70 h-60"
                />
                <div className="">
                  <p>{member.memberName}</p>
                  <p>{member.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* career/joinus */}
        <section className="relative py-14 sm:py-20 px-6 sm:px-20 xl:px-40 2xl:px-50 bg-[url(./assets/heroImage.jpg)] bg-cover bg-no-repeat bg-center">
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/60 to-black/70"></div>
          <div className="relative space-y-4 flex flex-col items-center z-20">
            <h1 className="text-3xl sm:text-4xl xl:text-5xl font-[510] text-neutral-200">
              Join Our Team
            </h1>
            <p className="text-neutral-300 md:text-[18px] text-center">
              We are always looking for passionate individuals who want to shape
              <br className="max-sm:hidden" />
              the future of real estate. Be part of a legacy that lasts.
            </p>
            <Button label="View Oppurtunities" variant="secondary" />
          </div>
          <div className=""></div>
        </section>
      </div>
    </>
  );
}

export default About;
