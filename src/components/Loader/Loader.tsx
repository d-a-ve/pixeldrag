type TLoaderProps = {
  dimensions: string;
};

const Loader = ({ dimensions }: TLoaderProps) => {
  return (
    <div className="flex w-full justify-center">
      <div
        className={`border-t-solid ${dimensions} animate-spin rounded-full border-4 border-t-4 border-solid border-t-primary-500`}
      ></div>
    </div>
  );
};

export default Loader;
