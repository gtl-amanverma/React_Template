import React from "react";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "./ui";
import {
  BackpackIcon,
  CheckSquare2Icon,
  ForwardIcon,
  HardDriveUpload,
  LucideAArrowDown,
  OutdentIcon,
  PiIcon,
  TvIcon,
} from "lucide-react";

type props = {
  triggerComponent?: React.ReactNode;
};



interface TSubMenuItemType {
    id: string;
  title: string;
  icon: React.ReactNode;
  subMenuItemType: "default" | "submenu";
  menuOption: null,
  disabled: boolean;
}

interface TMenuItemType {
  id: string;
  title: string;
  icon: React.ReactNode | null;
  disabled: boolean;
  menuItemType: "default" | "submenu";
  subMenuItems: Array<TSubMenuItemType> | null;
}

const menuItems: Array<TMenuItemType> = [
  {
    id: "1",
    title: "Back",
    icon: <BackpackIcon />,
    disabled: false,
    menuItemType: "default",
    subMenuItems: null,
  },
  {
    id: "2",
    title: "Forward",
    icon: <ForwardIcon />,
    disabled: false,
    menuItemType: "default",
    subMenuItems: null,
  },
  {
    id: "3",
    title: "Other",
    icon: null,
    disabled: false,
    menuItemType: "submenu",
    subMenuItems: [
      {
        id: "1",
        title: "Menu 1",
        icon: <OutdentIcon />,
        subMenuItemType: "default",
        menuOption: null,
        disabled: false,
      },
      {
        id: "2",
        title: "Menu 2",
        icon: <LucideAArrowDown />,
        subMenuItemType: "submenu",
        menuOption: null,
        disabled: true,
      },
      {
        id: "3",
        title: "Menu 3",
        icon: <HardDriveUpload />,
        subMenuItemType: "default",
        menuOption: null,
        disabled: false,
      },
    ],
  },
];

const Contextmenu = ({ ...props }: props) => {
  return (
    <ContextMenu>
      <ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
        {props.triggerComponent}
      </ContextMenuTrigger>
      <ContextMenuContent className="w-52 bg-background-primary">
        {menuItems.map((item, index) => {
          return (
            <>
              {item.menuItemType === "default" && (
                <ContextMenuItem key={index} inset disabled={item.disabled}>
                  {item.title}
                  <ContextMenuShortcut>{item.icon}</ContextMenuShortcut>
                </ContextMenuItem>
              )}
              {item.menuItemType === "submenu" && (
                <ContextMenuSub key={index}>
                  <ContextMenuSubTrigger inset disabled={item.disabled}>
                    {item.title}
                  </ContextMenuSubTrigger>
                  <ContextMenuSubContent className="w-44 bg-background-primary">
                    {item.subMenuItems?.map((subMenu, index) => {
                      return (
                        <ContextMenuItem key={index} inset disabled={subMenu.disabled}>
                          {subMenu.title}
                          <ContextMenuShortcut>
                            {subMenu.icon}
                          </ContextMenuShortcut>
                        </ContextMenuItem>
                      );
                    })}
                  </ContextMenuSubContent>
                </ContextMenuSub>
              )}
            </>
          );
        })}
      </ContextMenuContent>
    </ContextMenu>
  );
};

export default Contextmenu;
