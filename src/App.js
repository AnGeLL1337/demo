import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import {AppProvider} from 'pages/AppProvider';
import {SelectedLessonProvider} from 'pages/SelectedLessonProvider';
import SearchButton from "./components/SearchButton";
import {UserPage} from "./pages/UserPage";
import {FacilityPage} from "./pages/FacilityPage";
import LoadAllLessonsButton from "./components/LoadAllLessons";
import {LessonPage} from "./pages/LessonsProvider";


function App() {

    return (
        <div className="App">

            <AppProvider>
                <SearchButton/>
                <LoadAllLessonsButton/>
                <SelectedLessonProvider/>
                <LessonPage/>
                <UserPage/>
                <FacilityPage/>
            </AppProvider>

        </div>

    );
}

export default App;
