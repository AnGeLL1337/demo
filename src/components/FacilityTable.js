import React from "react";
import { FacilityTableRow} from "./FacilityTableRow";

export const FacilityTable = ({ facilities }) => {
    return (
        <table className={"table table-hover table-stripped"}>
            <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
            </tr>
            </thead>
            <tbody>
            {facilities.length > 0 ? (
                facilities.map((facility) => (
                    <FacilityTableRow key={facility.id} facility={facility}/>
                ))
            ) : (
                <tr>
                    <td colSpan="4">No facility found</td>
                </tr>
            )}
            </tbody>
        </table>
    );
};