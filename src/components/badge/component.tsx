import React from "react";
import { Badge as CustomBadge } from "./ui";
import { cn } from "../../utils/cn";
import { BadgeCheckIcon } from "lucide-react";

type props = {
  badgeType:
    | "default"
    | "outline"
    | "secondary"
    | "destructive"
    | "verified"
    | "digit"
    | "digit-destructive"
    | "digit-outline"
    | "digit-secondary";
  label: string;
  className?: string;
};

const Badge = ({ ...props }: props) => {
  return (
    <div>
      {props.badgeType === "default" && (
        <CustomBadge className={cn("", props.className)}>
          {props.label}
        </CustomBadge>
      )}
      {props.badgeType === "outline" && (
        <CustomBadge variant="outline" className={cn("", props.className)}>
          {props.label}
        </CustomBadge>
      )}
      {props.badgeType === "secondary" && (
        <CustomBadge variant="secondary" className={cn("", props.className)}>
          {props.label}
        </CustomBadge>
      )}
      {props.badgeType === "destructive" && (
        <CustomBadge variant="destructive" className={cn("", props.className)}>
          {props.label}
        </CustomBadge>
      )}
      {props.badgeType === "verified" && (
        <CustomBadge
          variant="secondary"
          className="bg-blue-500 text-white dark:bg-blue-600"
        >
          <BadgeCheckIcon />
          Verified
        </CustomBadge>
      )}
      {props.badgeType === "digit" && (
        <CustomBadge
          className={cn(
            "h-5 min-w-5 rounded-full bg-card-background-primary text-card-foreground-primary px-1 tabular-nums",
            props.className
          )}
        >
          {props.label}
        </CustomBadge>
      )}
      {props.badgeType === "digit-destructive" && (
        <CustomBadge
          variant="destructive"
          className={cn(
            "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            props.className
          )}
        >
          {props.label}
        </CustomBadge>
      )}
      {props.badgeType === "digit-outline" && (
        <CustomBadge
          variant="outline"
          className={cn(
            "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            props.className
          )}
        >
          {props.label}
        </CustomBadge>
      )}
      {props.badgeType === "digit-secondary" && (
        <CustomBadge
          variant="secondary"
          className={cn(
            "h-5 min-w-5 rounded-full px-1 font-mono tabular-nums",
            props.className
          )}
        >
          {props.label}
        </CustomBadge>
      )}
    </div>
  );
};

export default Badge;
