import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SkillsLogos } from "../data/SkillsLogos.jsx";

const About = () => {
    const [activeTab, setActiveTab] = useState("Skills");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const Tab = ({ label, isActive, onClick }) => (
        <li className="me-2">
            <Link
                to="#"
                onClick={onClick}
                className={`inline-block p-4 border-b-2 ${
                    isActive
                        ? "border-black text-black dark:text-white active dark:border-white"
                        : "border-transparent text-gray-500 hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 dark:hover:border-gray-300"
                } rounded-t-lg`}
            >
                {label}
            </Link>
        </li>
    );

    Tab.propTypes = {
        label: PropTypes.string.isRequired,
        isActive: PropTypes.bool.isRequired,
        onClick: PropTypes.func.isRequired,
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "Skills":
                return (
                    <div className="flex flex-wrap items-center justify-center mx-auto mt-12 mb-4 w-3/4">
                        {SkillsLogos.map((logo, index) => (
                            <img
                                key={index}
                                className="me-4 mb-4 md:mb-4 h-10 w-10"
                                src={logo.src}
                                alt={logo.alt}
                            />
                        ))}
                    </div>
                );
            case "Experience":
                return (
                    <div className="flex items-center justify-center mx-auto w-3/4">
                        <ul
                            aria-label="Alternative changelog feed"
                            role="feed"
                            className="relative flex flex-col gap-12 py-12 pl-6 text-sm before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]"
                        >
                            <li
                                role="article"
                                className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black dark:before:bg-white before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
                            >
                                <h4 className="hidden text-base font-medium leading-7 text-slate-500 lg:block lg:w-28 lg:text-right">
                                    2023-11-01
                                </h4>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className="text-base font-medium leading-7 text-black dark:text-white">
                                        Trainee Backend Developer
                                        <span className="font-medium text-slate-500 lg:hidden">
                                            &nbsp;-&nbsp;2023-01-21
                                        </span>
                                        <br />
                                        <span className="font-normal text-slate-600">
                                            CSI DevTeam - Uva Wellassa
                                            University
                                        </span>
                                    </h3>
                                    <p className="text-slate-500">
                                        As a Trainee Backend Developer at Uva
                                        Wellassa University, I am currently
                                        serving as the team leader for the
                                        development team in a Scrum environment.
                                        My responsibilities include crafting and
                                        implementing backend logic to contribute
                                        to the overall success of our projects.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                );
            case "Education":
                return (
                    <div className="flex items-center justify-center mx-auto w-3/4">
                        <ul
                            aria-label="Alternative changelog feed"
                            role="feed"
                            className="relative flex flex-col gap-12 py-12 pl-6 text-sm before:absolute before:top-0 before:left-6 before:h-full before:-translate-x-1/2 before:border before:border-dashed before:border-slate-200 after:absolute after:top-6 after:left-6 after:bottom-6 after:-translate-x-1/2 after:border after:border-slate-200 lg:pl-0 lg:before:left-[8.5rem] lg:after:left-[8.5rem]"
                        >
                            <li
                                role="article"
                                className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black dark:before:bg-white before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
                            >
                                <h4 className="text-base font-medium leading-7 text-slate-500 lg:block lg:w-28 lg:text-right">
                                    2021
                                </h4>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className="text-base font-medium leading-7 text-black dark:text-white">
                                        Higher Education
                                        <br />
                                        <span className="font-normal text-slate-500">
                                            Uva Wellassa University - Badulla
                                        </span>
                                    </h3>
                                </div>
                            </li>
                            <li
                                role="article"
                                className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black dark:before:bg-white before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
                            >
                                <h4 className="text-base font-medium leading-7 text-slate-500 lg:block lg:w-28 lg:text-right">
                                    2016
                                </h4>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className="text-base font-medium leading-7 text-black dark:text-white">
                                        Secondary Education
                                        <br />
                                        <span className="font-normal text-slate-500">
                                            Ananda College - Colombo 10
                                        </span>
                                    </h3>
                                </div>
                            </li>
                            <li
                                role="article"
                                className="relative pl-6 before:absolute before:left-0 before:top-2 before:z-10 before:h-2 before:w-2 before:-translate-x-1/2 before:rounded-full before:bg-black dark:before:bg-white before:ring-2 before:ring-white lg:flex lg:gap-12 lg:pl-0 lg:before:left-[8.5rem]"
                            >
                                <h4 className=" text-base font-medium leading-7 text-slate-500 lg:block lg:w-28 lg:text-right">
                                    2005
                                </h4>
                                <div className="flex flex-col flex-1 gap-2">
                                    <h3 className="text-base font-medium leading-7 text-black dark:text-white">
                                        Primary Education
                                        <br />
                                        <span className="font-normal text-slate-500">
                                            Mahanama College - Colombo 03
                                        </span>
                                    </h3>
                                </div>
                            </li>
                        </ul>
                    </div>
                );
            case "Certificates":
                return (
                    <div className="flex items-center justify-center">
                        <p>Certificates Content Goes Here</p>
                    </div>
                );
            default:
                return (
                    <div className="flex items-center justify-center">
                        <p>No conten</p>
                    </div>
                );
        }
    };

    return (
        <>
            <div className="min-h-screen">
                <Header />
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        About Me
                    </h2>
                    <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Hey there! I&apos;m Nureka Rodrigo, currently riding the
                        coding waves as a Trainee Backend Developer with the CSI
                        DevTeam under the Department of Computer Science and
                        Informatics at Uva Wellassa University. Yep, you got it
                        right—I&apos;m from the vibrant shores of Sri Lanka!
                    </p>
                    <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Right now, I&apos;m deep into the world of coding while
                        pursuing my Bachelor&apos;s in Computer Science &
                        Technology at Uva Wellassa University. Eager to learn
                        and passionate about all things tech, I&apos;m on a
                        mission to turn ideas into reality through lines of
                        code. Let&apos;s connect and geek out over some cool
                        projects!
                    </p>
                </div>
                <div>
                    <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mx-auto w-3/4">
                        <ul className="flex items-center justify-center flex-wrap -mb-px">
                            <Tab
                                label="Skills"
                                isActive={activeTab === "Skills"}
                                onClick={() => handleTabClick("Skills")}
                            ></Tab>
                            <Tab
                                label="Experience"
                                isActive={activeTab === "Experience"}
                                onClick={() => handleTabClick("Experience")}
                            />
                            <Tab
                                label="Education"
                                isActive={activeTab === "Education"}
                                onClick={() => handleTabClick("Education")}
                            />
                            <Tab
                                label="Certificates"
                                isActive={activeTab === "Certificates"}
                                onClick={() => handleTabClick("Certificates")}
                            />
                        </ul>
                    </div>
                    <div className="mt-4">{renderTabContent()}</div>
                </div>
                <Footer />
            </div>
        </>
    );
};

export default About;
