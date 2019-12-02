import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import Student from '../pages/Student';
import Plan from '../pages/Plan';
import MemberShip from '../pages/MemberShip';
import HelpOrder from '../pages/HelpOrder';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />

            <Route path="/student/:id" component={Student} isPrivate />
            <Route path="/student/" component={Student} isPrivate />

            <Route path="/plan" component={Plan} isPrivate />
            <Route path="/membership" component={MemberShip} isPrivate />

            <Route path="/help-order" component={HelpOrder} isPrivate />
        </Switch>
    );
}
