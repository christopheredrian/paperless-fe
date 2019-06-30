// in src/users.js
import React from 'react';
import {List, Datagrid, TextField, EmailField} from 'react-admin';
import CustomUrlField from '../react-admin-wrappers/CustomUrlField';

export const UserList = props => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="id"/>
            <TextField source="name"/>
            <TextField source="username"/>
            <EmailField source="email"/>
            <TextField source="phone"/>
            <CustomUrlField source="website" />
        </Datagrid>
    </List>
);