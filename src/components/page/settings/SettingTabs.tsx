"use client";

import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";
import { Expand, Gem, Palette, ShieldCheck, Tag } from "lucide-react";

const SettingTabs = () => {
  const updateMultipleSearchParams = useUpdateMultiSearchParams();

  return (
    <TabsList className="w-full justify-start p-0 mb-4 border-b rounded-none gap-4">
      <TabsTrigger
        value="categories"
        className="px-4 w-fit"
        onClick={() => updateMultipleSearchParams({ tab: "categories" })}
      >
        <Tag /> Categories Management
      </TabsTrigger>
      <TabsTrigger
        value="brand"
        className="px-4 w-fit"
        onClick={() => updateMultipleSearchParams({ tab: "brand" })}
      >
        <Gem /> Brand Management
      </TabsTrigger>
      <TabsTrigger
        value="sizes"
        className="px-4 w-fit"
        onClick={() => updateMultipleSearchParams({ tab: "sizes" })}
      >
        <Expand /> Sizes Management
      </TabsTrigger>
      <TabsTrigger
        value="colors"
        className="px-4 w-fit"
        onClick={() => updateMultipleSearchParams({ tab: "colors" })}
      >
        <Palette /> Colors Management
      </TabsTrigger>
      <TabsTrigger
        value="terms-and-policy"
        className="px-4 w-fit"
        onClick={() => updateMultipleSearchParams({ tab: "terms-and-policy" })}
      >
        <ShieldCheck /> Terms & Policy Management
      </TabsTrigger>
    </TabsList>
  );
};

export default SettingTabs;
