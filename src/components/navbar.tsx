"use client";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { Cloud, Slash, Check, ChevronsUpDown } from "lucide-react";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { ModeToggle } from "./ThemeSwitch";

const projects = [
  {
    value: "1",
    label: "my-project",
  },
  {
    value: "2",
    label: "my-other-project",
  },
  {
    value: "3",
    label: "my-third-project",
  },
  {
    value: "4",
    label: "my-fourth-project",
  },
  {
    value: "5",
    label: "my-fifth-project",
  },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const { data: session } = useSession();
  const { name, email, image: avatar } = session?.user || {};

  return (
    <div className="min-w-screen flex h-16 items-center justify-between border-b px-6">
      <div className="flex items-center gap-4">
        <Link href="/">
          <Cloud className="h-7 w-7 fill-blue-400 text-blue-400" />
        </Link>
        <Slash className="h-5 w-5 -rotate-[18deg] text-slate-400" />
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-56 justify-between"
            >
              {value
                ? projects.find((project) => project.value === value)?.label
                : "Select a project"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-56 p-0">
            <Command>
              <CommandInput placeholder="Search projects..." />
              <CommandEmpty>No project found.</CommandEmpty>
              <CommandGroup>
                {projects.map((project) => (
                  <CommandItem
                    key={project.value}
                    value={project.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === project.value ? "opacity-100" : "opacity-0",
                      )}
                    />
                    {project.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Slash className="h-5 w-5 -rotate-[18deg] text-slate-400" />
        <div className="text-lg font-semibold">Worker 1</div>
      </div>
      <div className="flex space-x-4">
        <ModeToggle />

        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src={avatar || ""} />
              <AvatarFallback>
                {name ? name?.charAt(0) : email?.charAt(0)}
              </AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="mr-4 mt-4 w-48">
            <DropdownMenuLabel>
              <p>{name || email}</p>
              <p className="text-muted-foreground text-xs font-light">
                {name ? email : name}
              </p>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/auth/logout">Log Out</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
