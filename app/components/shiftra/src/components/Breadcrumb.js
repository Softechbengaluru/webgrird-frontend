"use client"; 
// import { useRouter } from "next/router";

const Breadcrumb = ({ paths = [] }) => {
  // const router = useRouter();
  if (!mounted) return null;
  return (
    <div className="text-gray-500 mb-6 text-left text-sm ml-2 mt-[-4px]">
      <span
        className="mr-2 text-normal text-xs cursor-pointer"
        // onClick={() => router.push("/")}
      >
        Home
      </span>
      {paths.map((path, index) => (
        <span key={index}>
          <span className="text-xs"> / </span>
          <span
            className={`ml-2 text-xs ${index === paths.length - 1 ? "text-black" : "cursor-pointer text-gray-500"}`}
            // onClick={() => index !== paths.length - 1 && router.push(`/${paths.slice(0, index + 1).join("/")}`)}
          >
            {path}
          </span>
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
