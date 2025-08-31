import { getSchools } from "@/lib/actions";
import { School2 } from "lucide-react";
import Image from "next/image";

export const dynamic = "force-dynamic";

const ShowSchoolsPage = async () => {
  const res = await getSchools();
  const { schools } = res;

  return (
    <section className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <School2 className="mx-auto h-10 w-10 text-primary stroke-[1.2]" />
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-copy sm:text-4xl">
            Schools Directory
          </h2>
        </div>

        {schools.length === 0 ? (
          <div className="mt-12 text-center text-copy pt-40">
            <p className="text-lg">No schools available yet.</p>
            <p className="text-sm mt-2">
              Please add some schools to see them listed here.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-12">
            {schools.map((school) => (
              <div
                key={school.id}
                className="bg-foreground rounded-lg border border-border overflow-hidden group"
              >
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    src={school.image}
                    alt={school.name}
                    width={100}
                    height={100}
                    priority
                    className="h-full w-full object-cover transition-transform duration-300 ease-out cursor-pointer group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-lg font-semibold text-copy mb-2">
                    {school.name}
                  </h2>
                  <p className="text-copy-light text-sm mb-1">
                    {school.address}
                  </p>
                  <p className="text-copy-light text-sm">{school.city}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ShowSchoolsPage;
