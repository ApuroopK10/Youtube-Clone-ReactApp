import { useSearchParams } from "react-router-dom";
import SearchVideoCard from "./SearchVideoCard";

const SearchContainer = () => {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("searchQuery"));

  return (
    <div>
      <SearchVideoCard />
    </div>
  );
};

export default SearchContainer;
