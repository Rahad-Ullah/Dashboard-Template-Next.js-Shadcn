import {
  Blocks,
  ChartNoAxesCombined,
  Handshake,
  MessagesSquare,
  Settings,
  Shield,
  UsersRound,
} from "lucide-react";

export const sidebarMenu = {
  navMain: [
    {
      title: "Analytics",
      url: "/",
      icon: ChartNoAxesCombined,
      isActive: true,
    },
    {
      title: "Products",
      url: "/products",
      icon: Blocks,
    },
    {
      title: "Users",
      url: "/users",
      icon: UsersRound,
    },
    {
      title: "Moderation",
      url: "/moderation",
      icon: Shield,
    },
    {
      title: "Messaging",
      url: "/messaging",
      icon: MessagesSquare,
    },
    {
      title: "Support",
      url: "/support",
      icon: Handshake,
    },
  ],
  settings: [
    {
      name: "Settings",
      url: "/settings",
      icon: Settings,
    },
  ],
};

export const profileData = {
  name: "Rahad Ullah",
  email: "rahadullah10@gmail.com",
  role: "Admin",
  avatar:
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
};
