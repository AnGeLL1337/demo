import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {bindFacilityActions} from "../reducers/_main";
import {FacilityTable} from "../components/FacilityTable";

/**
 * Komponenta na zobrazenie všetkých zaridení.
 * @returns {JSX.Element} - Stránka zariadení
 */

export const FacilityPage = () => {
    const dispatch = useDispatch();
    const facilities = useSelector(state => state.facilities || []);

    useEffect(() => {
        const {facilityFetch} = bindFacilityActions(dispatch);
        facilityFetch();
    }, [dispatch]);

    return (
        <div>
            <h2>Facilities</h2>
            <FacilityTable facilities={facilities}/>
        </div>
    );
}