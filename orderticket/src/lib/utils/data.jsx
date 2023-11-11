import {
  ArrowRightOnRectangleIcon,
  ArrowLeftOnRectangleIcon,
  ArrowUpOnSquareIcon,
  Cog6ToothIcon,
  TicketIcon,
  HomeIcon,
  EyeIcon,
  PlusCircleIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
export const itemsMenu = [
  {
    label: (
      <Link className={"w-[100px] h-[100px]"} to={"/"}>
        Home
      </Link>
    ),
    icon: <HomeIcon className="w-[1em] h-[1em]"></HomeIcon>,
  },
  {
    label: <Link to={"/signin"}>Đăng nhập</Link>,
    icon: <ArrowRightOnRectangleIcon className="w-[1em] h-[1em]" alt="" />,
  },
  {
    label: <Link to={"/pagefilm"}>Xem phim</Link>,
    icon: <ArrowRightOnRectangleIcon className="w-[1em] h-[1em]" alt="" />,
  },
  {
    label: "Xem vé phim",
    icon: <EyeIcon className="w-[1em] h-[1em]" EyeIcon />,
    children: [
      {
        label: "2D",
      },
      {
        label: "3D",
      },
    ],
  },
  {
    label: <Link to={"/signup"}>Đăng ký</Link>,
    icon: <PlusCircleIcon className="w-[1em] h-[1em]" PlusCircleIcon />,
  },
  {
    label: "Quản lý vé",
    icon: <TicketIcon className="w-[1em] h-[1em]" />,
  },
  {
    label: "Đăng xuất",
    icon: (
      <ArrowLeftOnRectangleIcon className="w-[1em] h-[1em]"></ArrowLeftOnRectangleIcon>
    ),
  },
  {
    label: "Phim sắp ra mắt",
    icon: (
      <ArrowUpOnSquareIcon className="w-[1em] h-[1em]"></ArrowUpOnSquareIcon>
    ),
  },
  {
    label: "Setting",
    icon: <Cog6ToothIcon className="w-[1em] h-[1em]"></Cog6ToothIcon>,
  },
];
