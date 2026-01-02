import Header from "@/components/Header";
import CodeBlock from "@/components/CodeBlock";
import ArchitectureDiagrams from "@/components/ArchitectureDiagrams";

const Index = () => {
  return (
    <div className="min-h-screen bg-background dot-pattern">
      <Header />
      
      <main>
        {/* Hero - Full viewport, commanding presence */}
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 text-center">
          <h1 className="mb-6 font-mono text-6xl font-light tracking-tight text-foreground md:text-7xl">
            benchy
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed text-muted-foreground md:text-2xl">
            A benchmarking engine for evaluating AI systems on task-specific performance.
          </p>
          <p className="mt-10 font-mono text-sm tracking-widest text-muted-foreground/70">
            <span className="font-bold text-foreground">/&lt;task?&gt;</span>/&lt;domain?&gt;/&lt;language?&gt;
          </p>
        </section>

        {/* Installation */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="section-label mb-4 block">Getting Started</span>
            <h2 className="mb-8 text-3xl font-light text-foreground">
              Installation
            </h2>
            <CodeBlock
              code={`# Using uv (recommended)
uv sync

# Or with pip
pip install -e .`}
            />
          </div>
        </section>

        {/* Define */}
        <section className="bg-muted/30 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="section-label mb-4 block">Workflow</span>
            <h2 className="mb-4 text-3xl font-light text-foreground">
              Define
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Tasks specify data sources, prompts, and evaluation metrics. Interfaces handle provider-specific I/O.
            </p>
            <CodeBlock
              code={`class MyTask(Task):
    name = "my_task"
    metrics = [ExactMatch(), F1Score()]
    
    def get_prompts(self) -> list[Prompt]:
        return self.load_dataset("my_dataset")`}
              language="python"
            />
          </div>
        </section>

        {/* Run */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="section-label mb-4 block">Execution</span>
            <h2 className="mb-4 text-3xl font-light text-foreground">
              Run
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Execute benchmarks locally with vLLM or use cloud providers like OpenAI, Anthropic, or Together.
            </p>
            <CodeBlock
              code={`# Local with vLLM
benchy run --model meta-llama/Llama-3-8B --tasks my_task

# Cloud provider
benchy run --provider openai --model gpt-4o --tasks my_task`}
            />
          </div>
        </section>

        {/* Analyze */}
        <section className="bg-muted/30 px-6 py-24">
          <div className="mx-auto max-w-4xl">
            <span className="section-label mb-4 block">Results</span>
            <h2 className="mb-4 text-3xl font-light text-foreground">
              Analyze
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Results are structured for easy comparison and analysis.
            </p>
            <CodeBlock
              code={`{
  "task": "my_task",
  "model": "gpt-4o",
  "metrics": {
    "exact_match": 0.85,
    "f1_score": 0.91
  }
}`}
              language="json"
            />
          </div>
        </section>

        {/* Architecture */}
        <section id="docs" className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <span className="section-label mb-4 block text-center">Documentation</span>
            <h2 className="mb-10 text-center text-3xl font-light text-foreground">
              Architecture
            </h2>
            <ArchitectureDiagrams />
          </div>
        </section>

        {/* Footer */}
        <footer className="px-6 py-8">
          <div className="flex items-center justify-center gap-4">
            <a 
              href="https://discord.com/invite/VSqAr8BhKV" 
              className="text-muted-foreground/60 transition-colors hover:text-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
            <a href="https://surus.lat" className="text-sm text-muted-foreground/60 transition-colors hover:text-primary">by SURUS</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
