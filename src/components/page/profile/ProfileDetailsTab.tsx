import Image from "next/image";
import EditProfileModal from "./EditProfileModal";

const ProfileDetailsTab = ({ user }) => {
  return (
    <>
      {/* header */}
      <section className="flex justify-end items-center gap-2 mb-4">
        <EditProfileModal user={user} />
      </section>
      {/* body */}
      <section className="flex flex-col md:flex-row gap-16">
        <div className="flex flex-col items-center gap-2">
          <Image
            src={`${user.image}`}
            alt="profile"
            width={250}
            height={250}
            priority
            className="rounded-2xl max-w-56 aspect-square object-cover"
          />
        </div>
        <div className="grid grid-cols-2 w-full max-w-3xl gap-6">
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Name</p>
            <p className="text-[#5C5C5C]">
              {user.firstname} {user?.lastname}
            </p>
          </div>
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Role</p>
            <p className="text-[#5C5C5C]">{user.role}</p>
          </div>
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Email</p>
            <p className="text-[#5C5C5C]">{user.email}</p>
          </div>
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Phone No</p>
            <p className="text-[#5C5C5C]">{user.phone}</p>
          </div>
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Gender</p>
            <p className="text-[#5C5C5C]">{user.gender}</p>
          </div>
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Birthday</p>
            <p className="text-[#5C5C5C]">{user?.birthday}</p>
          </div>
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Location</p>
            <p className="text-[#5C5C5C]">{user.location}</p>
          </div>
          <div className="grid gap-2">
            <p className="text-[#A1A1A1]">Bio</p>
            <p className="text-[#5C5C5C]">{user.bio}</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProfileDetailsTab;
