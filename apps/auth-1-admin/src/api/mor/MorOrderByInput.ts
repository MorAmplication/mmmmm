import { SortOrder } from "../../util/SortOrder";

export type MorOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  username?: SortOrder;
  roles?: SortOrder;
  password?: SortOrder;
};
