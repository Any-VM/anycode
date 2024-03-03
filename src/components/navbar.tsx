"use client";
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

import { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const projects = [
	{
		value: "next.js",
		label: "Next.js",
	},
	{
		value: "sveltekit",
		label: "SvelteKit",
	},
	{
		value: "nuxt.js",
		label: "Nuxt.js",
	},
	{
		value: "remix",
		label: "Remix",
	},
	{
		value: "astro",
		label: "Astro",
	},
];

export default function Navbar() {
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState("");

	return (
		<div className="min-w-screen border-b h-16 flex items-center justify-between px-6">
			<div className="flex items-center gap-4">
				<Cloud className="h-7 w-7 text-blue-400 fill-blue-400" />
				<Slash className="text-gray-400 -rotate-[18deg] h-5 w-5" />
				<Popover open={open} onOpenChange={setOpen}>
					<PopoverTrigger asChild>
						<Button
							variant="outline"
							role="combobox"
							aria-expanded={open}
							className="w-[200px] justify-between"
						>
							{value
								? projects.find((project) => project.value === value)?.label
								: "Select a project"}
							<ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
						</Button>
					</PopoverTrigger>
					<PopoverContent className="w-[200px] p-0">
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
			</div>
			<DropdownMenu>
				<DropdownMenuTrigger>
					<Avatar>
						<AvatarImage src="https://github.com/proudparrot2.png" />
						<AvatarFallback>P</AvatarFallback>
					</Avatar>
				</DropdownMenuTrigger>
				<DropdownMenuContent className="mr-4 mt-4 w-48">
					<DropdownMenuLabel>
						<p>proudparrot2</p>
						<p className="text-xs text-gray-300 font-light">
							hi@proudparrot2.tech
						</p>
					</DropdownMenuLabel>
					<DropdownMenuSeparator />
					<DropdownMenuItem>Profile</DropdownMenuItem>
					<DropdownMenuItem>Billing</DropdownMenuItem>
					<DropdownMenuItem>Team</DropdownMenuItem>
					<DropdownMenuItem>Subscription</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
