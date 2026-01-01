import Header from "@/components/Header";
import CodeBlock from "@/components/CodeBlock";
import ArchitectureDiagrams from "@/components/ArchitectureDiagrams";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto max-w-4xl px-6 py-16">
        {/* Hero */}
        <section className="mb-20 text-center">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground md:text-5xl">
            benchy
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            A benchmarking engine for evaluating AI systems on task-specific performance.
          </p>
        </section>

        {/* Installation */}
        <section className="mb-16">
          <h2 className="mb-4 font-mono text-xl font-semibold text-foreground">
            Installation
          </h2>
          <CodeBlock
            code={`# Using uv (recommended)
uv sync

# Or with pip
pip install -e .`}
          />
        </section>

        {/* Define */}
        <section className="mb-16">
          <h2 className="mb-4 font-mono text-xl font-semibold text-foreground">
            Define
          </h2>
          <p className="mb-4 text-muted-foreground">
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
        </section>

        {/* Run */}
        <section className="mb-16">
          <h2 className="mb-4 font-mono text-xl font-semibold text-foreground">
            Run
          </h2>
          <p className="mb-4 text-muted-foreground">
            Execute benchmarks locally with vLLM or use cloud providers like OpenAI, Anthropic, or Together.
          </p>
          <CodeBlock
            code={`# Local with vLLM
benchy run --model meta-llama/Llama-3-8B --tasks my_task

# Cloud provider
benchy run --provider openai --model gpt-4o --tasks my_task`}
          />
        </section>

        {/* Analyze */}
        <section className="mb-16">
          <h2 className="mb-4 font-mono text-xl font-semibold text-foreground">
            Analyze
          </h2>
          <p className="mb-4 text-muted-foreground">
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
        </section>

        {/* Architecture */}
        <section className="mb-16">
          <h2 className="mb-6 font-mono text-xl font-semibold text-foreground">
            Architecture
          </h2>
          <ArchitectureDiagrams />
        </section>

        {/* Footer */}
        <footer className="border-t border-border pt-8 text-center">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://github.com/surus-inc/benchy"
              className="transition-colors hover:text-foreground"
            >
              GitHub
            </a>
            <a
              href="https://latamboard.ai"
              className="transition-colors hover:text-foreground"
            >
              LATAM Leaderboard
            </a>
            <span>Built by Surus</span>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;