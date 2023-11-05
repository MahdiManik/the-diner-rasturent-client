const Home = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6">
      <div className=" md:flex  gap-4 my-16">
        <div className="flex-[1] px-4 flex flex-col justify-center gap-12">
          <h1 className="text-7xl font-bold">
            Quality Foods <br />
            <span className="text-primary">for Your Health</span>
          </h1>
          <p>
            Indulge in a culinary journey like no other at our restaurant. Our
            carefully crafted menu showcases a symphony of flavors, where every
            dish tells a unique story. From sizzling grills to exquisite pastas,
            each bite is a delightful adventure. Join us for a dining experience
            that tantalizes your taste buds and leaves you craving for more.
          </p>
          <div>
            <button className="btn btn-primary">All Menus</button>
          </div>
        </div>
        <div className="flex-[1] h-[600px] rounded-md overflow-hidden ">
          <img
            className="w-full h-full object-cover mt-4"
            src="https://images.getbento.com/accounts/65e1fe01d2241d86184cbee4f6645488/media/images/78994FAIRMONT_RY_HOLIDAY_SP22-144.jpg?w=1800&fit=max&auto=compress,format&h=1800"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
