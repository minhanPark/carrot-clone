import type { NextPage } from "next";
import Layout from "../../components/layout";

const Steam: NextPage = () => {
  return (
    <Layout title="Stream" hasTabBar>
      <div className="space-y-4 divide-y-2 py-16">
        {Array(4)
          .fill(1)
          .map((_, k) => (
            <div key={k} className="pt-4 px-4">
              <div className="w-full bg-slate-300 aspect-video rounded-md shadow-sm" />
              <h3 className="font-medium text-gray-700 text-2xl mt-2">
                아베베베벨ㄹ
              </h3>
            </div>
          ))}
        <button className="fixed bottom-24 right-5 bg-orange-400 rounded-full p-4 text-white shadow-xl cursor-pointer hover:bg-orange-500 transition-colors">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </Layout>
  );
};

export default Steam;
