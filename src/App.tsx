import ToastNotif from "@components/Toast/ToastNotif";
import AuthContextProvider from "@context/AuthContext";
import GalleryContextProvider from "@context/GalleryContext";
import MyRouteProvider from "@routes/MyRouteProvider";

const App = () => {
  return (
    <>
      <AuthContextProvider>
        <GalleryContextProvider>
          <MyRouteProvider />
          <ToastNotif />
        </GalleryContextProvider>
      </AuthContextProvider>
    </>
  );
};

export default App;
