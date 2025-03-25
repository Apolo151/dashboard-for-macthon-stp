import {
  Admin,
  Resource
} from "react-admin";
import { Layout } from "./Layout";
import { authProvider } from "./authProvider";
import AttendeeDataProvider from "./AthendeeDataProver"; 
import { AttendeeList } from "./AttendeLits";
import{AttendeeEdit} from "./AttendeeEdit";
import { AttendeeShow } from "./AttendeeShow";
import { AttendeeCreate } from "./AttendeCreate";
export const App = () => (
  <Admin
    layout={Layout}
    authProvider={authProvider}
    dataProvider={AttendeeDataProvider}
  >
    <Resource
      name="attendence"
      list={AttendeeList}
      show={AttendeeShow}
      edit={AttendeeEdit}
      create={AttendeeCreate}
    ></Resource>
  </Admin>
);
