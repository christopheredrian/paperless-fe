// in src/posts.js

import React from 'react';
import {Create, SimpleForm, DisabledInput, ReferenceInput, TextInput, LongTextInput, SelectInput} from 'react-admin';

const PostCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <DisabledInput source="id"/>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="name"/>
            </ReferenceInput>
            <TextInput source="title"/>
            <LongTextInput source="body"/>
        </SimpleForm>
    </Create>
);

export default PostCreate;