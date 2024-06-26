import API_ROUTES from "../../constants/apiRoutes";
import privateInstance from "../privetInstance";
import publicInstance from "../publicInstance";
import { AboutUsInfo } from "./type";

const getAboutUsInfo = async () => {
  const res = await publicInstance.get<AboutUsInfo>(API_ROUTES.ABOUT_US.GET);
  return res.data;
};

const editAboutUsInfo = async (payload: AboutUsInfo) => {
  const res = await privateInstance.put<AboutUsInfo>(
    API_ROUTES.ABOUT_US.EDIT,
    payload
  );
  return res.data;
};

export { getAboutUsInfo, editAboutUsInfo };
