import React, { useEffect, useState } from "react";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import Main from "./components/Main.jsx";
import "bootstrap/dist/js/bootstrap.js";
import Loading from "./components/Loading/Loding.jsx";
import ProjectDetail from "./components/ProjectSection/ProjectsDetail/ProjectDetail.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import ProjectSection from "./components/ProjectSection/ProjectSection.jsx";
import { RefsProvider } from "./context/RefsContex.jsx";
import ProjectList from "./components/FetchFolders/FetchFolders.jsx";
import "./bootstrap";
import "../css/app.css";

const App = () => {
    const [themeMode, setThemeMode] = useState("light-background");
    const [isLoading, setIsLoading] = useState(true);
    const darkTheme = () => {
        setThemeMode("dark-background");
    };
    const lightTheme = () => {
        setThemeMode("light-background");
    };
    function handleTheme() {
        themeMode === "light-background"
            ? setThemeMode("dark-background")
            : setThemeMode("light-background");
    }
    useEffect(() => {
        document
            .querySelector("html")
            .classList.remove("dark-background", "light-background");
        document.querySelector("html").classList.add(themeMode);
    }, [themeMode]);

    useEffect(() => {
        const loadData = async () => {
            await new Promise((resolve) => setTimeout(resolve, 2000)); // Adjust the delay as needed
            setIsLoading(false);
        };

        loadData();
    }, []);
    if (isLoading) {
        return <Loading />;
    }
    return (
        <Router>
            <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
                <RefsProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Main />} />
                            <Route
                                path="/projects"
                                element={<ProjectSection location={"own"} />}
                            />
                            <Route
                                path="/projects/:id"
                                element={<ProjectDetail />}
                            />
                            <Route path="folders" element={<ProjectList />} />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                    <div className="flex justify-content-center">
                        <a
                            href="/"
                            onClick={() => {
                                window.scrollTo(0, 0);
                                window.history.pushState(null, "", "/"); // Updates the URL to the home route
                            }}
                            id="scroll-top"
                            className="scroll-top d-flex align-items-center justify-content-center"
                        >
                            <i className="bi bi-arrow-up-short"></i>
                        </a>

                        <Link
                            to="#"
                            className="change-theme d-flex align-items-center justify-content-center"
                            onClick={handleTheme}
                        >
                            <i className="bi bi-lightbulb"></i>
                        </Link>
                    </div>
                </RefsProvider>
            </ThemeProvider>
        </Router>
    );
};

export default App;
