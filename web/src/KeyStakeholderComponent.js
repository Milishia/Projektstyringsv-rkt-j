import {withRouter} from "react-router-dom";
import React from "react";
import {observer} from "mobx-react";

const KeyStakeholderComponent = withRouter(observer(({history, match}) => {
    return(
        <div>
            <h2> Key Stakeholder page</h2>

        </div>
    )
}));

export default observer(KeyStakeholderComponent)