import type { NextPage } from "next";

const Detail: NextPage = () => {
  return (
    <div className="flex flex-col space-y-2 p-5">
      <input type="file" className="file:hover:bg-yellow-500" />
      <div className="first-letter:text-3xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet mollitia
        vitae at fuga, enim, expedita eveniet, eum quasi ipsum nostrum
        accusantium quaerat? Necessitatibus suscipit quibusdam at natus
        blanditiis a ea.
      </div>
    </div>
  );
};

export default Detail;
