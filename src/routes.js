import Home from "./views/admin/Home/Home";
import AcceptingInstitute from "./views/applicant/testtakers/AcceptingInstitute";
import Stories from "./views/applicant/testtakers/Stories";
import Prepare from "./views/admin/Prepare/Prepare";
import PracticeTest from "./views/admin/PracticeTest/PracticeTest";
import Result from "./views/admin/Result/Result";

//icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AppRegistrationOutlinedIcon from "@mui/icons-material/AppRegistrationOutlined";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import SlideshowOutlinedIcon from "@mui/icons-material/SlideshowOutlined";
import MapsHomeWorkOutlinedIcon from "@mui/icons-material/MapsHomeWorkOutlined";
import StarsOutlinedIcon from "@mui/icons-material/StarsOutlined";
import Faq from "./views/admin/Faq/Faq";
import UniversitiesFav from "./views/univserities/UniversitiesFav";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SelectTest from "./views/checkout/SelectTest/SelectTest";

const routes = [
  {
    path: "/home",
    name: "Home",
    icon: HomeOutlinedIcon,
    iconColor: "Error",
    component: Home,
    layout: "/duolingo",
    isMenuItem: true,
  },
  {
    path: "/prepare",
    name: "Prepare",
    icon: AppRegistrationOutlinedIcon,
    iconColor: "Error",
    component: Prepare,
    layout: "/duolingo",
    isMenuItem: true,
  },
  {
    path: "/practice-test",
    name: "Practice Test",
    icon: FitnessCenterIcon,
    iconColor: "Error",
    component: PracticeTest,
    layout: "/duolingo",
    isMenuItem: true,
  },
  {
    path: "/my_results",
    name: "My Result",
    icon: SlideshowOutlinedIcon,
    iconColor: "Error",
    component: Result,
    layout: "/duolingo",
    isMenuItem: true,
  },
  {
    path: "/accepting_institute",
    name: "Universities",
    icon: MapsHomeWorkOutlinedIcon,
    iconColor: "Error",
    component: UniversitiesFav,
    layout: "/duolingo",
    isMenuItem: true,
  },
  {
    path: "/favorite",
    name: "FAQ",
    icon: StarsOutlinedIcon,
    iconColor: "Error",
    component: Faq,
    layout: "/duolingo",
    isMenuItem: true,
  },
  {
    path: "",
    name: "",
    icon: "",
    iconColor: "Error",
    component: "",
    layout: "/duolingo",
    isMenuItem: true,
    divider: true,
  },
  {
    path: "/checkout/select",
    name: "PURCHASE A TEST",
    icon: ShoppingCartOutlinedIcon,
    iconColor: "Error",
    component: SelectTest,
    layout: "/duolingo",
    isMenuItem: true,
  },
];
export default routes;
