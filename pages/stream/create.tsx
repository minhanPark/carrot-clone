import type { NextPage } from "next";

const Create: NextPage = () => {
  return (
    <div className="px-4 py-16">
      <div className="my-5">
        <label htmlFor="productName" className="text-sm font-medium">
          Name
        </label>
        <div className="rounded-md shadow-sm flex items-center mb-4">
          <input
            id="productName"
            type="text"
            placeholder="Product Name"
            className="py-2 px-1 pl-4 border border-gray-300 appearance-none rounded-l-none w-full rounded-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        </div>
        <label htmlFor="price" className="text-sm font-medium">
          Price
        </label>
        <div className="rounded-md relative shadow-sm flex items-center">
          <div className="absolute left-0 pl-3 flex items-center justify-center pointer-events-none">
            <span className="text-gray-500 text-sm">$</span>
          </div>
          <input
            id="price"
            type="text"
            placeholder="0.00"
            className="py-2 px-4 pl-7 border border-gray-300 appearance-none rounded-l-none w-full rounded-md placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
          <div className="absolute right-0 pr-3 flex items-center pointer-events-none">
            <span className="text-gray-500">USD</span>
          </div>
        </div>
      </div>
      <div>
        <label className="mb-1 block text-sm font-medium">Description</label>
        <textarea
          rows={4}
          className="mt-1 shadow-sm w-full focus:ring-2 focus:outline-none focus:ring-orange-500 rounded-md border-gray-300 focus:border-orange-500"
        />
      </div>
      <button className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 focus:outline-none">
        Go Live
      </button>
    </div>
  );
};

export default Create;
