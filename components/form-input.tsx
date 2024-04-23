interface IFormInputProps {
  type: "text" | "email" | "password" | "number";
  placeholder: string;
  required: boolean;
  errors: string[];
}

export default function FormInput({
  type,
  placeholder,
  required,
  errors,
}: IFormInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <input
        className="bg-transparent rounded-md w-full h-10
              focus:outline-none ring-1 focus:ring-4 ring-neutral-200
              focus:ring-orange-500 border-none  transition
              placeholder:text-neutral-400"
        type={type}
        placeholder={placeholder}
        required={required}
      />
      {errors.map((error, i) => (
        <span key={i} className="text-red-500 font-medium">
          {error}
        </span>
      ))}
    </div>
  );
}
