import AppCard from "@/components/AppCard";
import Link from "next/link";

const page = async () => {
  const appPromise = await fetch("http://localhost:3000/data.json");
  const apps = await appPromise.json();
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-3 my-10 container mx-auto">
      {apps.map((app) => (
        <Link key={app.id} href={`/allapps/${app.id}`}>
          <AppCard app={app}></AppCard>
        </Link>
      ))}
    </div>
  );
};

export default page;
