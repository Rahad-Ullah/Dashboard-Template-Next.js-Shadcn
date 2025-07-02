import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";
import { Button } from "./button";
import { useSearchParams } from "next/navigation";

const FilterTabItem = ({ children, filter }) => {
  const updateMultiSearchParams = useUpdateMultiSearchParams();
  const filterKey = Object.keys(filter)[0];
  const searchParams = useSearchParams();
  const param = searchParams.get(filterKey); // get params value
  const isActive =
    (!filter[filterKey] && !param) || param === filter[filterKey];

  return (
    <Button
      onClick={() => updateMultiSearchParams(filter)}
      variant={isActive ? "default" : "outline"}
      className={`border ${isActive ? "border-primary hover:bg-primary" : ""}`}
    >
      {children}
    </Button>
  );
};

export default FilterTabItem;
