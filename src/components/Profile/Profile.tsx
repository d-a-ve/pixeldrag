import useAuth from "@hooks/useAuth";

const Profile = () => {
  const currentUser = useAuth();
  return (
    <div className="flex items-center gap-2">
      <p className="text-center text-fs--1 xs:text-fs--2">
        {currentUser?.name || "Test User"}
      </p>
      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary-500 sm:text-fs--1">
        <span>TU</span>
      </div>
    </div>
  );
};

export default Profile;
