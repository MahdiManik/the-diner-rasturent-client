import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div className="min-h-screen w-full max-w-[1200px] mx-auto">
      <div
        className="flex min-h-screen  flex-col justify-center items-center 
		   bg-white p-4  "
      >
        <img
          src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg"
          alt=""
        />
        <h4 className="text-4xl font-bold mt-12 text-[#e10491] pb-3">
          Oops!!!
        </h4>
        <h3 className="text-4xl font-bold text-black mb-6">
          This page got lost in conversation.
        </h3>
        <button>
          <Link
            className="flex items-center gap-2 hover:text-white
			 hover:bg-[#041e42] border-2 py-4 px-10 
			 rounded-xl
			  border-[#041e42]
			 text-black"
            to={"/"}
          >
            Go Home
          </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
