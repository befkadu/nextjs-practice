import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 font-sans p-6 text-center">
      <h1 className="text-4xl font-extrabold text-slate-900 mb-2">
        My Next.js Practice Dashboard
      </h1>
      <p className="text-slate-600 mb-8 max-w-sm">
        Welcome! This dashboard is where I gather my customized components and
        practice layouts.
      </p>

      {/* Navigation Card Link */}
      <Link
        href="/steps"
        className="block bg-white p-6 rounded-xl shadow-md border border-slate-200 hover:border-purple-500 hover:shadow-lg transition duration-200 text-left w-full max-w-xs group cursor-pointer"
      >
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-purple-600 flex items-center justify-between">
          🏃‍♂️ Steps Tracker Component
          <span className="text-slate-400 group-hover:translate-x-1 transition-transform duration-200">
            →
          </span>
        </h3>
        <p className="text-sm text-slate-500 mt-2">
          An interactive sequence tracker using state checks and Tailwind
          transitions.
        </p>
      </Link>
    </div>
  );
}
