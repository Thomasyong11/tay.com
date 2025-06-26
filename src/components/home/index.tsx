import { getBlogPosts } from "@/app/db/blog";
import { MotionDiv } from "@/lib/framer";
import Image from "next/image";
import Link from "next/link";
import { ProjectsData } from "../../data/home";
import Newsletter from "../newsletter";
import MaxWidthWrapper from "../reusable/maxWidthWrapper";
import { ExperienceData } from "../../data/experience";
import { useState } from "react";
import Experience from "../expierience/Experience";

const About = () => {
  return (
    <div className="">
      <p className="text-gray-500">
        {`Hey, I’m Tay. I started out in tech support, helping people solve everyday tech issues, and that got me into software. 
        Now I build websites and web apps, and I’m currently studying Cloud Data Management at Conestoga College because I want to move into cloud engineering. 
        Long term, I’m aiming for a role in cloud infrastructure or DevOps. Somewhere I can build, automate, and actually make things work behind the scenes.`}
      </p>
      <p className="text-gray-500">{`Long term, I’m aiming for a role in cloud infrastructure or DevOps. Somewhere I can build, automate, and actually make things work behind the scenes.`}</p>
      <p className="text-gray-500">{`Outside of that, I’m into anime and sitcoms. Naruto and Vinland Saga are my go-tos, and The Big Bang Theory always cracks me up. 
        I genuinely believe that with some dedication and the right mindset, anyone can figure things out. 
        That’s been my approach so far, and it’s working pretty well.`}</p>
    </div>
  );
};

// const Experience = () => {
//   const [showAll, setShowAll] = useState(false);
//   // slice the array when we’re in “collapsed” mode
//   const visibleItems = showAll ? ExperienceData : ExperienceData.slice(0, 3);
//   return (
//     <div className="mt-16">
//       <ol className="relative border-s border-gray-200">
//         {visibleItems.map((item) => (
//           <li key={item.id} className="mb-10 ms-4">
//             <div
//               className={`absolute w-3 h-3 ${item.dotColor} rounded-full mt-1.5 -start-1.5 border`}
//             />
//             <div className="flex items-center gap-2">
//               <span className="text-md font-medium text-gray-900">
//                 {item.role}
//               </span>
//               <span className="inline-block text-xs uppercase rounded-full px-1 py-0 border border-gray-500 text-gray-500">
//                 {item.year}
//               </span>
//             </div>
//             <p className="mb-4 text-sm text-gray-500">{item.place}</p>
//           </li>
//         ))}
//       </ol>

//       {/* Only show the button if there *are* more than 3 items */}
//       {ExperienceData.length > 3 && !showAll && (
//         <button
//           onClick={() => setShowAll(true)}
//           className="mt-4 text-sm text-blue-600 hover:underline"
//         >
//           Read more
//         </button>
//       )}
//     </div>
//   );
// };

const Projects = () => {
  return (
    <div className="mt-16">
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Projects</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 w-full gap-x-10 gap-y-5">
        {ProjectsData.map((project) => {
          return (
            <MotionDiv
              whileHover={{
                y: -8,
              }}
              transition={{
                type: "spring",
                bounce: 0.7,
              }}
              key={project.id}
              className="mt-5"
            >
              <a target="_blank" rel="noopener noreferrer" href={project.link}>
                <Image
                  src={project.image}
                  width={30}
                  height={30}
                  className="rounded-lg mb-3"
                  alt={project.name}
                />
                <div className="text-sm mb-1 font-medium text-gray-900">
                  {project.name}
                </div>
                <div className="max-w-xs text-sm font-normal text-gray-500">
                  {project.description}
                </div>
              </a>
            </MotionDiv>
          );
        })}
      </div>
    </div>
  );
};

const Blogs = () => {
  let allBlogs = getBlogPosts();

  return (
    <div className="mt-16">
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Latest Blogs</h1>
      {allBlogs
        .sort((a, b) => {
          const dateA = new Date(a.metadata.publishedAt) as any;
          const dateB = new Date(b.metadata.publishedAt) as any;

          return dateB - dateA;
        })
        .slice(0, 2)
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 hover:bg-gray-100 p-2 hover:underline"
            href={`/blogs/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <div className="flex items-center gap-2">
                <p className="text-gray-500 text-xs">
                  {post.metadata.publishedAt}
                </p>
                <p className="text-gray-900 text-lg font-medium tracking-tight">
                  {post.metadata.title}
                </p>
              </div>
            </div>
          </Link>
        ))}
      <Link
        href="/blogs"
        className="hover:underline text-sm"
        aria-label="Read more blogs"
      >
        Read More
      </Link>
    </div>
  );
};

const HomeComponent = () => {
  return (
    <MaxWidthWrapper>
      <About />
      <Experience />
      <Projects />
      {/* <Blogs /> */}
      {/* <div className="mt-16">
        <Newsletter />
      </div> */}
    </MaxWidthWrapper>
  );
};

export default HomeComponent;

// yeah i know commenting a lot of code is bad lol
{
  /* <div className="mt-16">
      <h1 className="font-medium text-gray-900 mb-4 text-lg">Experience</h1>
      <ol className="relative border-s border-gray-200">
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-500 rounded-full mt-1.5 -start-1.5 border "></div>

          <div className="flex flex-row items-center gap-2">
            <div className="text-md font-medium text-gray-900">
              Ecommerce Assistant
            </div>
            <div className="inline-block uppercase text-xs rounded-full px-1 py-0 border border-gray-500 text-gray-500">
              present
            </div>
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Conestoga College (Work Study)
          </div>
        </li>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border "></div>

          <div className="text-md font-medium text-gray-900">
            Stoic philosophy
          </div>
          <div className="mb-4 text-sm font-normal text-gray-500">
            Epictetus & Heraclitus
          </div>
        </li>
      </ol>
    </div> */
}
