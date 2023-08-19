type Props = {
  children: string | JSX.Element | JSX.Element[];
};

export const Button = ({ children, ...rest }: Props) => {
  return (
    <button
      type="button"
      className="rounded-md bg-yellow-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-yellow-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-600"
      {...rest}
    >
      {children}
    </button>
  );
};
