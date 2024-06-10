import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import ContactPhoneRoundedIcon from "@mui/icons-material/ContactPhoneRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";

import AddBusinessRoundedIcon from "@mui/icons-material/AddBusinessRounded";

const NAV_LINKS = [
  {
    name: "properties",
    link: "/properties",
    icon: HomeRoundedIcon,
  },
  {
    name: "add-property",
    link: "/add-property",
    icon: AddBusinessRoundedIcon,
  },

  {
    name: "contact-us",
    link: "/contact",
    icon: ContactPhoneRoundedIcon,
  },
  {
    name: "about-us",
    link: "/about-us",
    icon: InfoRoundedIcon,
  },
];

export { NAV_LINKS };
