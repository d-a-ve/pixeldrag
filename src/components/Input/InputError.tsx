type TInputError = {
  name: string;
  errorMessage: string;
};

const InputError = ({ name, errorMessage }: TInputError) => {
  return (
    <span role="alert" id={`${name}-error`} className="text-fs--1 text-red-500">
      {errorMessage}
    </span>
  );
};

export default InputError;
