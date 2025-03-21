import { List, Datagrid, TextField, EditButton, DeleteButton } from 'react-admin';

export const AttendeeList = () => (
  <List>
    <Datagrid>
      <TextField source="SSN" />
      <TextField source="name" />
      <TextField source="email" />
      <TextField source="phoneNumber" />
      <TextField source="comments" />
      <EditButton/>
      <DeleteButton/>
    </Datagrid>
  </List>
);
