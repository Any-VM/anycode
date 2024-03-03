import { Button } from "@/components/ui/button";
import { Route, UploadCloud } from "lucide-react";

export default function ProjectLayout({
	children,
}: Readonly<{ children: React.ReactNode }>) {
	return (
		<div className="flex">
			<div className="w-1/4 h-[calc(100vh-4rem)] ">
				<div className="flex flex-col gap-2 p-4">
					<h1 className="px-4 pt-4 pb-2 text-xs font-medium text-muted-foreground uppercase tracking-wide">
						Project
					</h1>
					<Button variant="ghost" className="px-4 py-2 text-left justify-start">
						<UploadCloud className="h-5 w-5 mr-2" /> Deploy
					</Button>
					<Button variant="ghost" className="px-4 py-2 text-left justify-start">
						<Route className="h-5 w-5 mr-2" /> Paths
					</Button>
				</div>
			</div>
			<div className="w-3/4 h-[calc(100vh-4rem)]">{children}</div>
		</div>
	);
}
