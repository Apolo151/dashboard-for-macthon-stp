import {  EmailField, Show, SimpleShowLayout, TextField } from "react-admin";

export const AttendeeShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="SSN" />
      <TextField source="name" />
      <EmailField source="email" />
      <TextField source="phoneNumber" />
      <TextField source="comments" />
      <TextField source="id" />
    </SimpleShowLayout>
  </Show>
);
