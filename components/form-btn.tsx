interface IFormButtonProps {
  loading: boolean;
  text: string;
}

export default function FormButton({ loading, text }: IFormButtonProps) {
  return (
    <button
      className="primary-btn h-10
        disabled:bg-neutral-400 disabled:text-neutral-200
        disabled:cursor-wait"
      disabled={loading}
    >
      {loading ? "Loading.." : text}
    </button>
  );
}
