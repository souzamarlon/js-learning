import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Student from '../pages/Student';
import EditStudent from '../pages/Student/EditStudent';
import NewStudent from '../pages/Student/NewStudent';

import Plan from '../pages/Plan';
import NewPlan from '../pages/Plan/NewPlan';
import EditPlan from '../pages/Plan/EditPlan';

import MemberShip from '../pages/MemberShip';
import NewMemberShip from '../pages/MemberShip/NewMemberShip';
import EditMemberShip from '../pages/MemberShip/EditMemberShip';

import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/student/" component={Student} isPrivate />
            <Route path="/newstudent/" component={NewStudent} isPrivate />
            <Route path="/editstudent/:id" component={EditStudent} isPrivate />

            <Route path="/plans" component={Plan} isPrivate />
            <Route path="/newplan" component={NewPlan} isPrivate />
            <Route path="/editplan/:id" component={EditPlan} isPrivate />

            <Route path="/membership" component={MemberShip} isPrivate />
            <Route path="/newmembership" component={NewMemberShip} isPrivate />
            <Route
                path="/editmembership/:id"
                component={EditMemberShip}
                isPrivate
            />

            <Route path="/help-order" component={HelpOrder} isPrivate />
        </Switch>
    );
}
