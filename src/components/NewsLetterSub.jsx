import Button from "./Button";
import H1 from "./H1";

function NewLetterSub() {
  return (
    <section className="w-full py-10 sm:py-20 2xl:py-30 px-6 sm:px-10 xl:px-40 2xl:px-50 flex gap-20 xl:gap-60 bg-primary-900 text-white">
      <div className="space-y-8 xl:space-y-10 mx-auto">
        <H1 title="Stay Ahead of the Market" extraClass="sm:!text-nowrap" />
        <p className="xl:text-xl font-light text-white/70">
          Join our private newsletter for early alerts on new listings{" "}
          <br className="max-sm:hidden" />
          and exclusive market insights.
        </p>
        <div className="">
          <div className="flex gap-4 max-sm:flex-col">
            <input
              type="email"
              name=""
              id=""
              placeholder="Input email"
              className="border-[0.5px] rounded-md p-4 h-fit w-full focus:outline-none focus:border focus:border-primary-500"
            />
            <Button label="Subscribe Now" extraClass="text-nowrap" size="lg" />
          </div>
          <p className="text-sm sm:text-nowrap mt-4 font-lightx text-neutral-500">
            By subscribing, you agree to our Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewLetterSub;
