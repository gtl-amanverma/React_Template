import React, { useState } from "react";
import { cn } from "../../utils/cn";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui";
import {
  TItemsType,
  TSubItemsType,
  TSubItemType,
} from "../../types/components/navbar";
import { useNavigate } from "react-router-dom";

const items: Array<TItemsType> = [
  {
    itemId: "1",
    itemTitle: "Home",
    subItems: null,
    itemURL: "/home",
  },

  {
    itemId: "3",
    itemTitle: "Section",
    subItems: [
      {
        subItemId: "1",
        subItem: {
          title: "Section 1",
          src: "https://assets.aceternity.com/demos/algochurn.webp",
          description: "Prepare for tech interviews like never before.",
        },
        subItemURL: "/section-1",
        subItemType: "node",
      },
      {
        subItemId: "2",
        subItem: {
          title: "Section 2",
          src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
          description:
            "Production ready Tailwind css components for your next project",
        },
        subItemURL: "/section-2",
        subItemType: "node",
      },
      {
        subItemId: "2",
        subItem: {
          title: "Section 2",
          src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
          description:
            "Production ready Tailwind css components for your next project",
        },
        subItemURL: "/section-2",
        subItemType: "node",
      },
      {
        subItemId: "2",
        subItem: {
          title: "Section 2",
          src: "https://assets.aceternity.com/demos/tailwindmasterkit.webp",
          description:
            "Production ready Tailwind css components for your next project",
        },
        subItemURL: "/section-2",
        subItemType: "node",
      },
    ] as Array<TSubItemsType>,
    itemURL: null,
  },
  {
    itemId: "2",
    itemTitle: "About",
    subItems: [
      {
        subItemId: "1",
        subItem: "About Company",
        subItemURL: "/about-company",
        subItemType: "string",
      },
      {
        subItemId: "1",
        subItem: "About Tutor",
        subItemURL: "/about-tutor",
        subItemType: "string",
      },
      {
        subItemId: "1",
        subItem: "About Access",
        subItemURL: "/about-access",
        subItemType: "string",
      },
    ] as Array<TSubItemsType>,
    itemURL: null,
  },
];

type props = {
  className?: string;
};

const Navbar = ({ ...props }: props) => {
  const navigate = useNavigate();
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("top-10 inset-x-0 mx-auto z-50 border", props.className)}
    >
      <Menu setActive={setActive}>
        {items.map((item) => {
          return item.subItems === null ? (
            <div onClick={() => navigate(item.itemURL as string)}>
              <MenuItem
                setActive={setActive}
                active={null}
                item={item.itemTitle}
              />
            </div>
          ) : (
            <MenuItem
              setActive={setActive}
              active={active}
              item={item.itemTitle}
            >
              <div
                className={
                  item.subItems[0].subItemType === "node"
                    ? "text-sm grid grid-cols-2 gap-10 p-4"
                    : "flex flex-col space-y-4 text-sm"
                }
              >
                {item.subItems.map((subItem) => {
                  return subItem.subItemType === "string" ? (
                    <HoveredLink href={subItem.subItemURL}>
                      {subItem.subItem as string}
                    </HoveredLink>
                  ) : (
                    <ProductItem
                      title={(subItem.subItem as TSubItemType).title}
                      href={subItem.subItemURL}
                      src={(subItem.subItem as TSubItemType).src}
                      description={
                        (subItem.subItem as TSubItemType).description
                      }
                    />
                  );
                })}
              </div>
            </MenuItem>
          );
        })}
      </Menu>
    </div>
  );
};

export default Navbar;
