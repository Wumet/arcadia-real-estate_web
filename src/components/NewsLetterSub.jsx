import Button from "./Button";
import H1 from "./H1";

function NewLetterSub() {
  return (
    <section className="py-10 sm:py-14 2xl:py-20 px-6 sm:px-10 xl:px-40 2xl:px-50 flex gap-20 xl:gap-60">
      <div className="space-y-3 sm:space-y-5 xl:space-y-8 mx-auto sm:text-center">
        <h1 className="text-3xl sm:text-5xl 2xl:text-6xl sm:leading-12 font-semibold">
          Stay Ahead of the Market
        </h1>
        <p className="xl:text-xl font-light">
          Join our private newsletter for early alerts on new listings
          <br aria-hidden className="max-sm:hidden" />
          and exclusive market insights.
        </p>
        <div className="mt-4 sm:mt-8">
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <input
              type="email"
              name=""
              id=""
              placeholder="Input email"
              className="w-full sm:w-80 border-[0.5px] border-primary-700 rounded-md p-4 focus:outline-none focus:border focus:border-primary-700"
            />
            <Button
              label="Subscribe Now"
              extraClass="text-nowrap max-sm:w-full! h-full!"
              size="lg"
            />
          </div>
          <p className="text-xs sm:text-nowrap mt-4 opacity-50">
            By subscribing, you agree to our Privacy Policy and Terms of
            Service.
          </p>
        </div>
      </div>
    </section>
  );
}

export default NewLetterSub;
