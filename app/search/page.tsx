import SearchFilter from "@/components/SearchFilter";
import SearchTopImage from "@/components/SearchTopImage";
import getData from "@/utils/api";

const SearchPage = async () => {
  const packages = await getData({ url: "package" });
  return (
    <section>
        <SearchTopImage/>
        <SearchFilter packages={packages}/> 
    </section>
  );
};

export default SearchPage;
