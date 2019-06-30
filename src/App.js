// in src/App.js
import React from 'react';
import jsonServerProvider from 'ra-data-json-server';
import {UserList} from './components/users/UserList';
import {PostList, PostEdit, PostCreate} from './components/posts';

import {Admin, Resource, EditGuesser} from 'react-admin';

const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

const App = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate}/>
        <Resource name="users" list={UserList}/>
        <Resource name="users" list={UserList}/>
    </Admin>
);

export default App;