import type { NextPage } from "next";
import Layout from "../../components/layout";
import Message from "../../components/message";

const ChatDetail = () => {
  return (
    <Layout canGoBack title="RW">
      <div className="py-16 pb-16 px-4 space-y-4">
        <Message message="Hi How Much are you selling them for" />
        <Message message="I want $2,000" reversed />
        <Message message="Crazy man" />
        <form className="fixed bottom-0 mx-auto max-w-md inset-x-0">
          <div className="flex relative max-w-md items-center w-full mx-auto">
            <input
              type="text"
              className="shadow-sm rounded-full w-full border-gray-300 focus:ring-orange-500 focus:outline-none focus:border-orange-500 pr-12"
            />
            <div className="absolute inset-y-0 flex py-1.5 pr-1.5 right-0">
              <span className="flex items-center bg-orange-500 rounded-full px-3 test-sm text-white hover:bg-orange-600 cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-orange-500">
                &rarr;
              </span>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default ChatDetail;
