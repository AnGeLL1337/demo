import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import {useState} from "react";
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

        /*
      <div className="App">

        <AppProvider>
          <GroupPageProvider id="2d9dcd22-a4a2-11ed-b9df-0242ac120003" />
        </AppProvider>


      </div>
      */
    );
}

export default App;
