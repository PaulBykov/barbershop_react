import React from "react";

import IChildren from "../../../helpers/types/IChildren";

function Main({children} : IChildren) {
    return(

        <main>
            {children}
        </main>

    );
}


export default Main;
