import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-20 px-10 grid gap-5">
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <span className="font-semibold text-3xl">Select Item</span>
        <div className="flex justify-between">
          <span className="text-gray-500 my-3">Grey Chair</span>
          <span className="font-semibold">19$</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500 my-3">Tooly Chair</span>
          <span className="font-semibold">11$</span>
        </div>
        <div className="flex justify-between mt-2 pt-2 border-t-2 border-dashed">
          <span>Total</span>
          <span className="font-semibold">30$</span>
        </div>
        <div className="mt-5 bg-blue-500 text-white font-semibold text-center p-2 rounded-xl w-1/2 mx-auto hover:text-black cursor-pointer">
          Checkout
        </div>
      </div>
      <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="bg-blue-500 p-6 pb-14">
          <span className="text-white text-2xl">Profile</span>
        </div>
        <div className="rounded-3xl p-6 bg-white relative -top-5">
          <div className="flex justify-between items-end relative -top-16">
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Orders</span>
              <span className="font-semibold">340</span>
            </div>
            <div className="h-24 w-24 bg-red-400 rounded-full" />
            <div className="flex flex-col items-center">
              <span className="text-sm text-gray-500">Spent</span>
              <span className="font-semibold">$2,310</span>
            </div>
          </div>
          <div className="flex flex-col items-center relative -mt-10 -mb-4">
            <span className="font-semibold">Running Water</span>
            <span>Pusan, Korea</span>
          </div>
        </div>
      </div>
      <div className="bg-white p-10 rounded-2xl shadow-xl">
        <div className="flex justify-between items-center mb-5">
          <span>👈</span>
          <div className="space-x-3">
            <span>🔅 4.9</span>
            <span className="shadow-xl p-2 rounded-md">❤</span>
          </div>
        </div>
        <div className="bg-zinc-400 h-72 mb-5" />
        <div className="flex flex-col">
          <span className="font-semibold text-lg">Swoon Lounge</span>
          <span className="text-xs">Chair</span>
          <div className="mt-5 mb-3 flex justify-between items-center">
            <div className="space-x-2 flex items-center">
              <button className="w-5 h-5 rounded-full bg-yellow-400" />
              <button className="w-5 h-5 rounded-full bg-indigo-400" />
              <button className="w-5 h-5 rounded-full bg-teal-400" />
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-1.5 flex justify-center items-center bg-blue-400 w-8 aspect-square rounded-lg">
                -
              </button>
              <span>1</span>
              <button className="p-1.5 flex justify-center items-center bg-blue-400 w-8 aspect-square rounded-lg">
                +
              </button>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <span className="text-3xl font-semibold">$ 450</span>
            <button className="bg-blue-600 px-8 py-3 text-white rounded-lg hover:text-black">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
