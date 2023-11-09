import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <section className="dark:bg-gray-800 dark:text-gray-100 py-10">
      <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
        <div
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-900"
        >
          <img
            src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl ">
              My blog for three questions answer
            </h3>
            <span className="text-xs dark:text-gray-400">
              November 08, 2023
            </span>
            <p>
              Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est in
              graece fuisset, eos affert putent doctus id.
            </p>
          </div>
        </div>
        <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                What is One-way Data Binding?
              </h3>
              <span className="text-xs dark:text-gray-400">
                November 08, 2023
              </span>
              <p>
                In web Development In this method, changes to the model data are
                reflected in the corresponding view elements. However, scene
                changes do not affect the model. This unidirectional flow makes
                it easier to understand how data changes are propagated through
                the application.
              </p>
            </div>
          </div>
          <div
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                What is NPM in Node.js?
              </h3>
              <span className="text-xs dark:text-gray-400">
                November 08, 2023
              </span>
              <p>
                NPM is a package manager for Node.js applications. It simplifies
                the process of installing, updating, and managing third-party
                packages or libraries for Node.js. NPM provides a vast
                repository of open-source packages that developers can easily
                integrate into their projects.
              </p>
            </div>
          </div>
          <div
            rel="noopener noreferrer"
            href="#"
            className="max-w-sm mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900"
          >
            <img
              role="presentation"
              className="object-cover w-full rounded h-44 dark:bg-gray-500"
              src="https://media.istockphoto.com/id/648182720/photo/database-table-with-server-storage-and-network-in-datacenter-background.jpg?s=1024x1024&w=is&k=20&c=nxmN5HCMxAq6D1kw5Od-CVrmfEnLb6Mm-HrmLShsmck="
            />
            <div className="p-6 space-y-2">
              <h3 className="text-2xl font-semibold">
                Difference Between MongoDB and MySQL Database.
              </h3>
              <span className="text-xs dark:text-gray-400">
                November 08, 2023
              </span>
              <p>
                MongoDB is a NoSQL database, document-oriented data model.
                MongoDB uses a JSON Designed for horizontal scalability, making
                it suitable for large-scale applications. and MySQL is a
                relational database, using a structured table-based data model.
                uses SQL for queries. suitable for smaller to medium-sized
                applications. Static schema requires defining the structure
                before inserting data.
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <Link
            to={"/comment"}
            type="button"
            className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-900 dark:text-gray-400"
          >
            Your Feedback
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;
