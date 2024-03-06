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
      "text-muted-foreground bg-muted overflow-scroll rounded-lg border font-mono",
      className,
    )}
  >
    <pre className="p-4">{code}</pre>
  </div>
);
export default CodeBlock;
