import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  PasswordInput,
} from "react-admin";

export const MorCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="username" source="username" />
        <TextInput label="roles" source="roles" />
        <PasswordInput label="Password" source="password" />
      </SimpleForm>
    </Create>
  );
};
