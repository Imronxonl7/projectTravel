import SearchFilter from "@/components/SearchFilter";
import SearchTopImage from "@/components/SearchTopImage";
import getData from "@/utils/api";
import { Package } from "@/types/Package";

const SearchPage = async () => {
  const packages: Package[] = await getData({ url: "package" });

  // Datadan unique filterlar
  const uniqueTypes = [...new Set(packages.map((p) => p.package_type).filter(Boolean))];
  const uniqueDurations = [...new Set(packages.map((p) => p.duration_days).filter(Boolean))].sort((a, b) => a - b);
  const uniqueCities = [...new Set(packages.map((p) => p.departure_city).filter(Boolean))];

  return (
    <section>
      <SearchTopImage />
      <SearchFilter
        packages={packages}
        uniqueTypes={uniqueTypes}
        uniqueDurations={uniqueDurations}
        uniqueCities={uniqueCities}
      />
    </section>
  );
};

export default SearchPage;