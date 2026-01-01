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
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
      {/* Terminal header with dots */}
      <div className="flex items-center gap-2 bg-[hsl(var(--code-header))] px-4 py-3">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-[#ff5f56]" />
          <div className="h-3 w-3 rounded-full bg-[#ffbd2e]" />
          <div className="h-3 w-3 rounded-full bg-[#27ca40]" />
        </div>
        {title && (
          <span className="ml-3 font-mono text-xs text-muted-foreground">{title}</span>
        )}
        <span className="ml-auto font-mono text-xs text-muted-foreground opacity-60">
          {language}
        </span>
      </div>
      
      {/* Code content */}
      <div className="relative bg-[hsl(var(--code-bg))]">
        <pre className="overflow-x-auto p-6">
          <code className="font-mono text-sm leading-relaxed text-[hsl(var(--code-foreground))]">
            {code}
          </code>
        </pre>
        <button
          onClick={copyToClipboard}
          className="absolute right-3 top-3 rounded-md p-2 text-muted-foreground opacity-0 transition-all hover:bg-white/10 hover:text-white group-hover:opacity-100"
          aria-label="Copy code"
        >
          {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
};

export default CodeBlock;
