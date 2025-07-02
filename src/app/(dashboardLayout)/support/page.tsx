import SupportTable from "@/components/page/support/SupportTable";
import { Card } from "@/components/ui/card";
import { demoSupportTicketsData } from "@/demoData/support";
const SupportPage = async ({ searchParams }) => {
  const { priority, status } = await searchParams;

  const tickets = demoSupportTicketsData?.filter(
    (item) =>
      (!priority || item?.priority === priority) &&
      (!status || item?.status === status)
  );

  return (
    <section className="flex flex-col gap-4 h-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        <Card className="grid gap-2 p-4 text-center">
          <h1 className="text-xl font-semibold text-stone-700">Open Tickets</h1>
          <h1 className="text-3xl font-bold text-blue-500">12</h1>
        </Card>
        <Card className="grid gap-2 p-4 text-center">
          <h1 className="text-xl font-semibold text-stone-700">
            Avg. Response Time
          </h1>
          <h1 className="text-3xl font-bold text-purple-600">2.4 h</h1>
        </Card>
        <Card className="grid gap-2 p-4 text-center">
          <h1 className="text-xl font-semibold text-stone-700">
            Resolution Rate
          </h1>
          <h1 className="text-3xl font-bold text-emerald-500">92%</h1>
        </Card>
      </div>
      <Card className="p-5 flex-1">
        <SupportTable
          tickets={tickets as never[]}
          meta={{ page: 1, totalPage: 1, total: 12 }}
          filters={{ priority, status }}
        />
      </Card>
    </section>
  );
};

export default SupportPage;
