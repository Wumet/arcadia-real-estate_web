import MyPropertyCard from "../../components/user/MyPropertyCard";

function MyProperties() {
  return (
    <main className="space-y-8 sm:space-y-10">
      <div>
        <h1 className="text-2xl sm:text-3xl xl:text-4xl font-[510]">
          My Properties
        </h1>
        <p className="mt-1 font-light">
          Here is what's happening with your properties today.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols">
        {/* <MyPropertyCard /> */}
      </div>
    </main>
  );
}

export default MyProperties;
