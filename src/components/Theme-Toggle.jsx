import {useEffect, useState} from "react"
import {MdComputer, MdDarkMode, MdSunny} from "react-icons/md"
import {Dropdown} from "flowbite-react"

function ThemeSwitcher() {
    if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
        document.documentElement.classList.add("dark")
    } else {
        document.documentElement.classList.remove("dark")
    }
}

export default function ThemeButton() {
    // theme change function
    const themeIcons = {
        dark: <MdDarkMode className="h-5 w-5"/>,
        light: <MdSunny className="h-5 w-5"/>,
        default: <MdComputer className="h-5 w-5"/>,
    }

    const [currentTheme, setCurrentTheme] = useState(!("theme" in localStorage) ? "default" : localStorage.theme === "dark" ? "dark" : "light",)

    useEffect(() => {
        ThemeSwitcher()
    }, [currentTheme])

    return (
        <div className="text-sla mx-5 h-fit w-fit rounded-md p-1.5 dark:text-white">
            <Dropdown
                inline
                label={themeIcons[currentTheme]}
                placement={"top"}
                arrowIcon={false}
            >
                <Dropdown.Item
                    onClick={() => {
                        setCurrentTheme("dark")
                        localStorage.theme = "dark"
                    }}
                >
                    {themeIcons.dark} &ensp;Dark
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => {
                        setCurrentTheme("light")
                        localStorage.theme = "light"
                    }}
                >
                    {themeIcons.light} &ensp;Light
                </Dropdown.Item>
                <Dropdown.Item
                    onClick={() => {
                        setCurrentTheme("default")
                        localStorage.removeItem("theme")
                    }}
                >
                    {themeIcons.default} &ensp;Default
                </Dropdown.Item>
            </Dropdown>
        </div>
    )
}