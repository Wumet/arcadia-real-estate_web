import FeaturedProperties from "../../components/home/FeaturedProperties";
import Hero from "../../components/home/Hero";
import WhatsNew from "../../components/home/WhatsNew";
import imageUrl from "../../assets/heroImage.jpg";
import Message from "../../components/home/Message";
import Testimonials from "../../components/home/Testimonials";
import NewLetterSub from "../../components/NewsLetterSub";
import Services from "../../components/home/Services";
import WhyUs from "../../components/WhyUsSection";
import Stats from "../../components/Stats";
import { useRef } from "react";

function HomePage() {
  // const properties = [
  //   {
  //     id: "1",
  //     propertyName: "The Azure Residence",
  //     location: "Old GRA, PH",
  //     startingPrice: "₦450,000",
  //     tag: "Hot Listing",
  //     imageUrl: imageUrl,
  //     detailsUrl: "./",
  //   },
  //   {
  //     id: "2",
  //     propertyName: "The Sterling Court",
  //     location: "GRA Phase 3, PH",
  //     startingPrice: "₦350,000",
  //     tag: "New Realese",
  //     imageUrl: imageUrl,
  //     detailsUrl: "./",
  //   },
  //   {
  //     id: "3",
  //     propertyName: "The Sterling Court",
  //     location: "GRA Phase 3, PH",
  //     startingPrice: "₦350,000",
  //     tag: "Available",
  //     imageUrl: imageUrl,
  //     detailsUrl: "./",
  //   },
  // ];

  const announcements = [
    {
      id: "1",
      imageUrl:
        "https://res.cloudinary.com/do36hdyrf/image/upload/point3d-commercial-imaging-ltd-swXXVeluuNM-unsplash_ntycsv.jpg",
      tag: "New Launch",
      title: "The Sovereign Phase II",
      cta: "Learn More",
      description:
        "Introducing our latest development in the Swiss Alps. Ten ultra-private chalets featuring panoramic glacier views and integrated wellness centers",
    },
    {
      id: "2",
      imageUrl:
        "https://res.cloudinary.com/do36hdyrf/image/upload/point3d-commercial-imaging-ltd-swXXVeluuNM-unsplash_ntycsv.jpg",
      tag: "New Launch",
      title: "Early Access Benefit",
      cta: "Secure Access",
      description:
        "Secure your position in the Q4 global release cycle with a priority viewing pass and exclusive financing rates for verified founders.",
    },
    {
      id: "3",
      imageUrl:
        "https://res.cloudinary.com/do36hdyrf/image/upload/point3d-commercial-imaging-ltd-swXXVeluuNM-unsplash_ntycsv.jpg",
      tag: "New Launch",
      title: "Global Market Brief",
      cta: "Secure Access",
      description:
        "Join CEO Julian V. for an exclusive quarterly webinar discussing the shifts in luxury estate trends for the coming decade.",
    },
  ];

  const testimonials = [
    {
      id: "1",
      testimony:
        "The acquisition of our Napa estate was handled with unparalleled discretion and professionalism. Arcadia truly understands the nuances of high-net-worth real estate",
      user: "Elizabeth H.",
      occupation: "Venture Capitalist",
      image: imageUrl,
    },
    {
      id: "2",
      testimony:
        "From the initial consultation to the final closing, the experience was seamless. Their architectural insight helped us see potential we would have otherwise missed.",
      user: "Marcus K.",
      occupation: "Tech Founder",
      image: imageUrl,
    },
    {
      id: "3",
      testimony:
        "The acquisition of our Napa estate was handled with unparalleled discretion and professionalism. Arcadia truly understands the nuances of high-net-worth real estate",
      user: "David R",
      occupation: "International Attorney",
      image: imageUrl,
    },
  ];

  return (
    <main>
      <Hero />
      <FeaturedProperties />
      <Services />
      <WhyUs />
      <Testimonials testimonials={testimonials} />
      <Message />
      <NewLetterSub />
    </main>
  );
}

export default HomePage;
