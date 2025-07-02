import UsersTable from "@/components/page/users/UsersTable";
import { demoUsersData } from "@/demoData/users";
const UsersPage = async ({ searchParams }) => {
  const { role } = await searchParams;
  // Build query parameters for the backend request
  // const queryParams = new URLSearchParams({
  //   ...(role && { role }),
  //   ...(searchTerm && { searchTerm }),
  //   ...(page && { page }),
  // });

  // Fetch data from the backend when backend is ready
  // const res = await myFetch(`/user/users?${queryParams.toString()}`, {
  //   tags: ["users"],
  // });

  return (
    <>
      <UsersTable
        users={demoUsersData as never[]}
        meta={{ page: 1, totalPage: 1, total: 12 } as never}
        filters={{ role }}
      />
    </>
  );
};

export default UsersPage;
