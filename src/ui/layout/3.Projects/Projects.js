import { Route, Routes } from "react-router-dom";

import ProjectListContainer from "../../containers/ProjectListContainer";

const Projects = () => {
    return (
        <div className="main__project">
            <h2>.projects ( )</h2>
            <p>
                Part of my job is design and code digital products and web applications from idea to
                implementation. I see every project as a chance to <i>leave my footprint </i> and
                explore unique UX/UI solutions for the users.
            </p>
            <Routes>
                <Route element={<ProjectListContainer />} path="/" />
            </Routes>
        </div>
    );
};

export default Projects;
