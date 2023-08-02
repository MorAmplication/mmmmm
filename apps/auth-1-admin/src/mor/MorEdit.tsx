import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const MorEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <TextInput label="roles" source="roles" />
        <PasswordInput label="Password" source="password" />
      </SimpleForm>
    </Edit>
  );
};
