import { Check, Copy } from "lucide-react";
import { useState } from "react";

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

const CodeBlock = ({ code, language = "bash", title }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="group relative overflow-hidden rounded-md border border-border bg-[hsl(var(--code-bg))]">
      {title && (
        <div className="border-b border-border bg-muted/50 px-4 py-2">
          <span className="font-mono text-xs text-muted-foreground">{title}</span>
        </div>
      )}
      <div className="relative">
        <pre className="overflow-x-auto p-4">
          <code className="font-mono text-sm text-[hsl(var(--code-foreground))]">
            {code}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute right-2 top-2 rounded-md p-2 text-muted-foreground opacity-0 transition-all hover:bg-muted hover:text-foreground group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;