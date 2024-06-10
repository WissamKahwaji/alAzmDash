const CONTACT_US = {
  GET: "/contact",
  Edit: (id: string | undefined) => `contact/edit-contact-data/${id}`,
};

const ABOUT_US = {
  GET: "/about-us",
  EDIT: "/about-us/edit",
};

const PROPERTY = {
  GET: {
    All: "/property",
    BY_ID: (id: string | undefined) => `/property/${id}`,
  },
  DELETE: (id: string | undefined) => `/property/delete/${id}`,
  ADD: "/property/add",
  EDIT: (propertyId: string | undefined) => `/property/edit/${propertyId}`,
};
const AUTH = {
  SIGNIN: "/auth/signin",
};

const API_ROUTES = {
  AUTH,
  CONTACT_US,
  ABOUT_US,
  PROPERTY,
};
export default API_ROUTES;
