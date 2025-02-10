// src/components/content/NavigationMenuWrapper.tsx
"use client";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuLink,
  navigationMenuTriggerStyle, // Correct import
} from "@/components/ui/navigation-menu";

interface NavigationMenuWrapperProps {
  items: {
    title: string;
    href: string;
    description?: string;
  }[];
}

export function NavigationMenuWrapper({ items }: NavigationMenuWrapperProps) {
  return (
    <NavigationMenu className="w-full"> {/* Ensure full width */}
      <NavigationMenuList className="justify-between w-full">
        {items.map((item, index) => (
          <NavigationMenuItem key={index} className="flex-1 text-center">
            <NavigationMenuLink
              href={item.href}
              className={navigationMenuTriggerStyle()} // Correct usage
            >
              {item.title}
            </NavigationMenuLink>
            {item.description && (
              <NavigationMenuContent>
                <div className="p-4">
                  <p>{item.description}</p>
                </div>
              </NavigationMenuContent>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
