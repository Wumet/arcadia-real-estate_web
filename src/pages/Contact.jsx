import { MdOutlineLocationOn, MdOutlineMail } from "react-icons/md";
import H1 from "../components/H1";
import Header from "../components/Header";
import Input from "../components/Input";
import { FiPhone } from "react-icons/fi";
import Button from "../components/Button";

function ContactUs() {
  return (
    <main className="py-6 2xl:py-14 px-6 sm:px-10 xl:px-80 space-y-6 sm:space-y-8 md:space-y-20">
      <h1 className="text-xl font-semibold sm:hidden">Contact Us</h1>

      {/* contact details for mobile */}
      <div className="space-y-4 sm:hidden">
        <p className="flex items-center gap-2">
          <span className="bg-accent/20 p-2 rounded-full">
            <MdOutlineMail className="text-accent text-xl " />
          </span>
          Hello@arcadiang.com
        </p>
        <p className="flex items-center gap-2">
          <span className="bg-accent/20 p-2 rounded-full">
            <FiPhone className="text-accent text-xl " />
          </span>
          +2348101319125
        </p>
        <p className="flex items-center gap-2">
          <span className="bg-accent/20 p-2 rounded-full">
            <MdOutlineLocationOn className="text-accent text-xl " />
          </span>
          1st Floor Oxford Building Lebanon Street, Port Harcourt,Nigeria
        </p>
        <div className="mt-6">socials</div>
      </div>
      {/* hero for desktop */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-10">
        <div className="rounded-xl bg-[url(https://res.cloudinary.com/do36hdyrf/image/upload/support_mqxg9o.jpg)] bg-center bg-cover opacity-90"></div>

        {/* form */}
        <div className="sm:p-6 lg:p-8 sm:bg-card rounded-xl sm:col-span-2 ">
          <form className="space-y-4">
            <h1 className="text-xl sm:text-3xl xl:text-4xl font-medium">
              Send Us a Message
            </h1>
            <Input
              type="text"
              name="name"
              id="name"
              placeholder="Full Name"
              label="Full Name"
              htmlFor="name"
            />
            <Input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              label="Email Address"
              htmlFor="email"
            />
            <Input
              type="tel"
              name="phone"
              id="phone"
              placeholder="Phone Number"
              label="Phone Number"
            />
            <div className="">
              <label
                htmlFor="message"
                className="pl-2 opacity-70 font-medium text-sm"
              >
                Message
              </label>
              <textarea
                className="p-4 w-full mt-2 border-[0.5px] border-neutral-500 rounded-md focus:outline-none focus:border focus:border-primary-600"
                id="message"
                name="message"
                rows="3"
              ></textarea>
            </div>
            <Button label="Submit" extraClass=" w-full!" />
          </form>
        </div>
      </section>
      {/* contact details & map */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-10">
        <div className="border rounded-xl">map</div>
        <div className="text-xl space-y-4 max-sm:hidden">
          <p className="flex items-center gap-2">
            <span className="bg-accent/20 p-2 rounded-full">
              <MdOutlineMail className="text-accent text-2xl " />
            </span>
            Hello@arcadiang.com
          </p>
          <p className="flex items-center gap-2">
            <span className="bg-accent/20 p-2 rounded-full">
              <FiPhone className="text-accent text-2xl " />
            </span>
            +2348101319125
          </p>
          <p className="flex items-center gap-2">
            <span className="bg-accent/20 p-2 rounded-full">
              <MdOutlineLocationOn className="text-accent text-2xl " />
            </span>
            1st Floor Oxford Building Lebanon Street, Port Harcourt,Nigeria
          </p>
          <div className="mt-6">socials</div>
        </div>
      </section>
    </main>
  );
}

export default ContactUs;
