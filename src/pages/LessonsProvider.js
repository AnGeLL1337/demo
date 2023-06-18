import { useSelector } from "react-redux";
import { LessonTable } from "../components/LessonTable";

/**
 * Komponenta stránka hodín.
 * @returns {JSX.Element} - Stránka hodín
 */
export const LessonPage = () => {
    const lessons = useSelector((state) => state.lessons || {});
    console.log("LessonPage", lessons);

    return (
        <div>
            <h2>Lessons</h2>
            <LessonTable lessons={lessons} />
        </div>
    );
};
