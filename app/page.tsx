export default function Home() {
  return (
    <main className="bg-slate-300 h-screen flex items-center justify-center p-5">
      <article className="flex flex-col md:flex-row gap-2 bg-white w-full p-5 shadow-lg rounded-2xl max-w-screen-sm">
        <input
          type="text"
          placeholder="Search here.."
          className="peer/input w-full rounded-full h-10 bg-gray-200 pl-5 py-3 outline-none focus:ring ring-green-500 ring-offset-2 transition invalid:ring-red-500"
          required
        />
        <button className="bg-black text-white py-2 rounded-full font-medium active:scale-90 focus:outline-none transition-transform md:px-10 peer-valid/input:bg-green-600">
          Search
        </button>
      </article>
    </main>
  );
}
