import { Edit, SimpleForm, TextInput } from "react-admin";

export const AttendeeEdit = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="SSN" readOnly={true} />
      <TextInput source="name" />
      <TextInput source="email" />
      <TextInput source="phoneNumber" />
      <TextInput source="comments" />
    </SimpleForm>
  </Edit>
);
