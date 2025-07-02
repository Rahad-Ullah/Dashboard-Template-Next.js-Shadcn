"use client";

import { Label } from "@/components/ui/label";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useUpdateMultiSearchParams } from "@/hooks/useUpdateMultiSearchParams";

const TermsAndPolicyTabs = () => {
  const updateMultipleSearchParams = useUpdateMultiSearchParams();

  return (
    <TabsList className="bg-[#e9e7e2] flex-col justify-start items-start gap-2 p-5 rounded-xl">
      <Label className="px-3 py-2 pt-4 text-xs flex items-center gap-2 w-full">
        Terms & Policy <span className="h-0.5 bg-stone-300 flex-1"></span>
      </Label>
      <TabsTrigger
        value="terms-and-condition"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() =>
          updateMultipleSearchParams({ nestedTab: "terms-and-condition" })
        }
      >
        Terms & Conditions
      </TabsTrigger>
      <TabsTrigger
        value="privacy-policy"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() =>
          updateMultipleSearchParams({ nestedTab: "privacy-policy" })
        }
      >
        Privacy Policy
      </TabsTrigger>

      <Label className="px-3 py-2 pt-4 text-xs flex items-center gap-2 w-full">
        Help Center <span className="h-0.5 bg-stone-300 flex-1"></span>
      </Label>
      <TabsTrigger
        value="selling"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() => updateMultipleSearchParams({ nestedTab: "selling" })}
      >
        Selling
      </TabsTrigger>
      <TabsTrigger
        value="buying"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() => updateMultipleSearchParams({ nestedTab: "buying" })}
      >
        Buying
      </TabsTrigger>
      <TabsTrigger
        value="shipping"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() => updateMultipleSearchParams({ nestedTab: "shipping" })}
      >
        Shipping
      </TabsTrigger>
      <TabsTrigger
        value="payments"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() => updateMultipleSearchParams({ nestedTab: "payments" })}
      >
        Payments
      </TabsTrigger>
      <TabsTrigger
        value="safety-and-reporting"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() =>
          updateMultipleSearchParams({ nestedTab: "safety-and-reporting" })
        }
      >
        Safety & Reporting
      </TabsTrigger>
      <TabsTrigger
        value="my-account-and-settings"
        className="px-5 py-3 w-full border-none data-[state=active]:bg-[#fff] rounded-lg"
        onClick={() =>
          updateMultipleSearchParams({ nestedTab: "my-account-and-settings" })
        }
      >
        My account & Settings
      </TabsTrigger>
    </TabsList>
  );
};

export default TermsAndPolicyTabs;
