import AppCard from "@/components/AppCard";
import Link from "next/link";

const page = async () => {
  const appPromise = await fetch("http://localhost:3000/data.json");
  const apps = await appPromise.json();
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-between item center pt-8">
        <h3 className="text-2xl font-medium">({apps.length}) Apps found</h3>
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input type="search" required placeholder="Search" />
        </label>
      </div>
      <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 container mx-auto">
        {apps.map((app) => (
          <Link key={app.id} href={`/allapps/${app.id}`}>
            <AppCard app={app}></AppCard>
          </Link>
        ))}
      </div>
    </>
  );
};

export default page;
