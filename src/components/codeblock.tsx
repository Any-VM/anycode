import { cn } from "@/lib/utils";
const CodeBlock = ({
  code,
  className,
}: {
  code: string;
  className?: string;
}) => (
  <div
    className={cn(
      "text-muted-foreground overflow-scroll rounded-lg border bg-slate-50 font-mono dark:bg-slate-900 ",
      className,
    )}
  >
    <pre className="p-4">{code}</pre>
  </div>
);
export default CodeBlock;
