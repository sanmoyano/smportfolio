import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { toast } from "@chakra-ui/react";

import Hero from "../layout/2.Hero/Hero";
import { db } from "../../api/firebase";
import ProjectList from "../layout/3.Projects/ProjectList";

const ProjectListContainer = () => {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const { idProject } = useParams();

    useEffect(() => {
        const projectCollection = collection(db, "projectsList");
        const consult = getDocs(projectCollection);

        const consultingDb = (getDocVariables) => {
            getDocVariables
                .then((res) => {
                    setProjects(res.docs.map((doc) => doc.data()));
                })
                .catch((err) => {
                    toast.error(err.message);
                })
                .finally(() => {
                    setLoading(false);
                });
        };

        !idProject
            ? consultingDb(consult)
            : consultingDb(getDocs(query(projectCollection, where("idProject", "==", idProject))));
    }, [idProject]);

    if (loading) {
        return <div>Loading...</div>;
    } else {
        return <ProjectList projects={projects} />;
    }
};

export default ProjectListContainer;
