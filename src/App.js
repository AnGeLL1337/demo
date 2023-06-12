import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';
import {useState} from "react";
import {AppProvider} from 'pages/AppProvider';
import {LessonPageProvider} from 'pages/LessonPageProvider';
import SearchBar from "./components/SearchButton";
import {UserPage} from "./pages/UserPage";
import {FacilityPage} from "./pages/FacilityPage";


function App() {
    const [searchTerm, setSearchTerm] = useState('');
    return (
        <div className="App">


            <AppProvider>
                <SearchBar handleSearch={setSearchTerm}/>
                <LessonPageProvider id={searchTerm}/>
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
