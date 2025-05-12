type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchInput({ value, onChange }: Props) {
  return (
    <input
      type="text"
      placeholder="Pesquisar por nome..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full px-4 py-2 border border-slate-300 rounded-md mb-6 focus:outline-none focus:ring-2 focus:ring-slate-500 placeholder:text-slate-400"
    />
  );
}
