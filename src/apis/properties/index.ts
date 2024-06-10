import { Property } from "../../components/items/dialogs/deleteProperty/type";
import API_ROUTES from "../../constants/apiRoutes";
import { createFormData } from "../../utils";
import privateInstance from "../privetInstance";
import publicInstance from "../publicInstance";
import { AddPropertyProps, PropertyInfo } from "./type";

const getPropertyInfo = async () => {
  const res = await publicInstance.get<PropertyInfo[]>(
    API_ROUTES.PROPERTY.GET.All
  );
  return res.data;
};

const getPropertyById = async (id: string | undefined) => {
  const res = await publicInstance.get<PropertyInfo>(
    API_ROUTES.PROPERTY.GET.BY_ID(id)
  );
  return res.data;
};

const addProperty = async (payload: AddPropertyProps) => {
  const data = createFormData(payload!);

  const res = await privateInstance.post<PropertyInfo>(
    API_ROUTES.PROPERTY.ADD,
    data
  );
  return res;
};
const editProperty = async (payload: AddPropertyProps) => {
  const data = createFormData(payload!);
  const res = await privateInstance.put<PropertyInfo>(
    API_ROUTES.PROPERTY.EDIT(payload._id),
    data
  );
  return res.data;
};
const deleteProperty = async (id: string) => {
  const res = await privateInstance.delete<Property>(
    API_ROUTES.PROPERTY.DELETE(id)
  );
  return res.data;
};

export {
  getPropertyById,
  getPropertyInfo,
  deleteProperty,
  addProperty,
  editProperty,
};
