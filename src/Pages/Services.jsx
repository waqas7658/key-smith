import React from "react";
import ServiceData from "../Components/utils/serviceData";

const Services = () => {
  return (
    <section className="my-20 mx-5 lg:m-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-20 justify-center">
        {ServiceData.map((item) => (
          <div
            key={item.id}
            className="max-w-md py-4 px-8  bg-blue-400 shadow-lg rounded-lg"
          >
            <div className="flex justify-center md:justify-end -mt-16">
              <img
                className="w-32 h-32 object-cover rounded-full border-2 border-indigo-500"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div>
              <h2 className="text-gray-800 text-lg lg:text-3xl my-4  font-semibold">
                {item.title}
              </h2>
              <p className="mt-2 text-black">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

// <div className="flex flex-wrap justify-center">
//   {ServiceData.map((items, index) => (
//     <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4 flex" key={index}>
//       <div className="block max-w-[18rem] rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 flex flex-col">
//         <div className="relative overflow-hidden bg-cover bg-no-repeat">
//           <img
//             className="rounded-t-lg h-48 w-full object-cover"
//             src={items.image}
//             alt=""
//           />
//         </div>
//         <div className="p-3 text-center flex-grow">
//           <p className="text-xl font-bold  dark:text-neutral-200">
//             {items.title}
//           </p>
//           <p className="text-base text-neutral-600 dark:text-neutral-200">
//             {items.description}
//           </p>
//         </div>
//       </div>
//     </div>
//   ))}
// </div>
