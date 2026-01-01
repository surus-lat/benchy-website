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
        <footer className="border-t border-border px-6 py-16">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center gap-6 text-center">
              <span className="font-mono text-xl font-semibold text-foreground">benchy</span>
              <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
                <a
                  href="https://github.com/surus-lat/benchy"
                  className="transition-colors hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href="https://latamboard.ai"
                  className="transition-colors hover:text-primary"
                >
                  LatamBoard
                </a>
                <a href="https://surus.lat" className="text-muted-foreground/60 transition-colors hover:text-primary">by SURUS</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;
