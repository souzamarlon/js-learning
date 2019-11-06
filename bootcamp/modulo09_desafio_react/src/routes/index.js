import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
import Dashboard from '../pages/Dashboard';
import NewMeetup from '../pages/NewMeetup';
import EditMeetup from '../pages/EditMeetup';
import Profile from '../pages/Profile';

import Detail from '../pages/Detail';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />
            <Route path="/dashboard" component={Dashboard} isPrivate />
            <Route path="/detail/:id" component={Detail} isPrivate />
            <Route path="/newmeetup" component={NewMeetup} isPrivate />
            <Route path="/editmeetup/:id" component={EditMeetup} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
        </Switch>
    );
}
