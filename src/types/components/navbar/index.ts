export interface TSubItemType {
    title: string;
    src: string;
    description: string;
}

export interface TSubItemsType {
    subItemId: string;
    subItem: TSubItemType | string;
    subItemURL: string;
    subItemType: "string" | "node";
}

export interface TItemsType {
    itemId: string;
    itemTitle: string;
    subItems: Array</* `TSubItemsType` is defining the structure of sub-items that can be associated
    with an item. It includes properties such as `subItemId` for identifying the
    sub-item, `subItem` which can be either an object of type `TSubItemType` or a
    string, `subItemURL` for the URL of the sub-item, and `subItemType` which
    specifies the type of the sub-item as either "string" or "node". */
    TSubItemsType> | null;
    itemURL: string | null;
}