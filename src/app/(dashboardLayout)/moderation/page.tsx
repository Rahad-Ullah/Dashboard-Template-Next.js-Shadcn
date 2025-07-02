import ReportedMessageTable from "@/components/page/moderation/ReportedMessageTable";
import ReportedProductTable from "@/components/page/moderation/ReportedProductTable";
import ReportedUserTable from "@/components/page/moderation/ReportedUserTable";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { demoReportsData } from "@/demoData/reports";
import { CircleAlert, MessageCircleWarning, UserX } from "lucide-react";

const ModerationPage = () => {
  const reportedProducts = demoReportsData.filter(
    (item) => item.type === "Product"
  );
  const reportedUsers = demoReportsData.filter((item) => item.type === "User");
  const reportedMessages = demoReportsData.filter(
    (item) => item.type === "Message"
  );

  return (
    <Card className="p-5 h-full">
      <Tabs defaultValue={"products"}>
        <TabsList className="border-b w-full justify-start p-0 mb-4 rounded-none">
          <TabsTrigger value="products" className="px-8 w-fit">
            <CircleAlert /> Reported Products
          </TabsTrigger>
          <TabsTrigger value="users" className="px-8 w-fit">
            <UserX /> Reported Users
          </TabsTrigger>
          <TabsTrigger value="messages" className="px-8 w-fit">
            <MessageCircleWarning /> Reported Messages
          </TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <ReportedProductTable
            items={reportedProducts as never[]}
            filters={{}}
            meta={{ page: 1, totalPage: 1, total: 1 }}
          />
        </TabsContent>
        <TabsContent value="users">
          <ReportedUserTable
            items={reportedUsers as never[]}
            filters={{}}
            meta={{ page: 1, totalPage: 1, total: 1 }}
          />
        </TabsContent>
        <TabsContent value="messages">
          <ReportedMessageTable
            items={reportedMessages as never[]}
            filters={{}}
            meta={{ page: 1, totalPage: 1, total: 1 }}
          />
        </TabsContent>
      </Tabs>
    </Card>
  );
};

export default ModerationPage;
