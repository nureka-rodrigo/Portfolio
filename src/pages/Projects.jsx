import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";
import { ProjectData } from "../data/ProjectData.jsx";
import Transition from "../components/PageTransition.jsx";
import {useTheme} from "../hooks/ThemeProvider.jsx";

const Projects = () => {
    const { currentTheme } = useTheme();

    return (
        <>
            <div className="flex flex-col min-h-screen min-w-fit">
                <Header />
                <div className="py-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white transition duration-500">
                        Explore My Projects
                    </h2>
                    <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Dive into a collection of my diverse projects and
                        discover the creativity and innovation behind each one.
                    </p>
                </div>
                <section className="antialiased">
                    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:px-6 sm:pb-16 lg:pb-24">
                        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {ProjectData.map((item, index) => (
                                <div
                                    key={index}
                                    className="space-y-4"
                                >
                                    <div className="relative flex flex-col text-gray-900 dark:text-white bg-white dark:bg-black shadow-md dark:shadow-light bg-clip-border rounded-xl w-auto transition duration-500">
                                        <div className="relative mx-4 mt-4 overflow-hidden bg-white bg-clip-border rounded-xl">
                                            <img
                                                src={currentTheme === "dark" ? item.imgDark : item.imgLight}
                                                alt="card-image"
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                        <div className="p-6">
                                            <div className="flex items-center justify-between mb-2">
                                                <p className="block text-base antialiased font-medium leading-relaxed">
                                                    {item.title}
                                                </p>
                                            </div>
                                            <p className="block text-sm antialiased font-normal leading-normal opacity-75">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="space-x-2">
                                            {item.tags.map((tag, tagIndex) => (
                                                <span
                                                    key={tagIndex}
                                                    className="my-2 bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300 transition duration-500"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                        <div className="p-6">
                                            <Link
                                                to={item.link}
                                                target="_blank"
                                            >
                                                <button
                                                    className="bg-gray-900 dark:bg-gray-200 text-white dark:text-gray-900 font-bold text-center uppercase align-middle select-none font-sans disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-3 px-7 rounded-lg shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block w-full hover:scale-[1.02] focus:scale-[1.02] active:scale-100 transition duration-500"
                                                    type="button"
                                                >
                                                    View on GitHub
                                                </button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Footer className="mt-auto" />
            </div>
        </>
    );
};

export default Transition(Projects);
