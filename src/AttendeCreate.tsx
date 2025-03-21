import { Create, SimpleForm, TextInput } from "react-admin";

export const AttendeeCreate = () => (
  <Create>
    <SimpleForm>
      <TextInput source="SSN"/>
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phoneNumber" />
    </SimpleForm>
  </Create>
);
