import { FormEvent, ReactNode } from "react";

type TFormProps = {
  submitFunction: (e: FormEvent<HTMLFormElement>) => void;
  children: ReactNode;
};

const Form = ({ children, submitFunction }: TFormProps) => {
  return (
    <div className="mb-8 w-full md:mb-6">
      <form className="flex flex-col gap-6" onSubmit={submitFunction}>
        {children}
      </form>
    </div>
  );
};

export default Form;
