
# Update Benchy Website Code Snippets

## Overview
The current website code snippets are outdated and don't reflect how Benchy actually works. This plan updates all code examples to match the real README documentation.

## Key Changes Identified

### 1. Installation Section (Currently Incorrect)
**Current code shows:**
```bash
# Using uv (recommended)
uv sync

# Or with pip
pip install -e .
```

**Problems:**
- Missing the git clone step entirely
- Missing virtual environment setup
- Doesn't show the recommended setup script option

**Updated code will show:**
```bash
# Clone the repository
git clone https://github.com/surus-ai/benchy.git
cd benchy

# Option 1: Setup script (recommended)
bash setup.sh

# Option 2: Manual with uv
uv venv --python 3.12
source .venv/bin/activate
uv sync
```

### 2. Run Section (Currently Incorrect)
**Current code shows:**
```bash
# Local with vLLM
benchy run --model meta-llama/Llama-3-8B --tasks my_task

# Cloud provider
benchy run --provider openai --model gpt-4o --tasks my_task
```

**Problems:**
- Uses `benchy run` but the actual CLI command is `benchy eval`
- Uses `--model` but the actual flag is `--model-name`
- Missing the `--limit` parameter commonly used in examples

**Updated code will show:**
```bash
# Cloud provider (OpenAI)
benchy eval --model-name gpt-4o-mini --tasks spanish --limit 10

# Local with vLLM
benchy eval --model-name meta-llama/Llama-3.1-8B-Instruct \
  --provider vllm --vllm-config vllm_two_cards_mm --tasks spanish --limit 10
```

### 3. Define Section (Currently Outdated)
**Current code shows:**
```python
class MyTask(Task):
    name = "my_task"
    metrics = [ExactMatch(), F1Score()]
    
    def get_prompts(self) -> list[Prompt]:
        return self.load_dataset("my_dataset")
```

**Problems:**
- The README describes a handler-based system (MultipleChoice, Structured, Freeform, Multimodal)
- Tasks are now built using format handlers, not direct Task subclassing with metrics

**Updated description and code will reflect the handler system:**
```python
# Tasks use format handlers for data, prompts, and metrics
# Handlers: MultipleChoice, Structured, Freeform, Multimodal

# ~30-50 lines of code to add a new task
# vs 200-400 in legacy systems
```

### 4. Analyze Section (Keep Similar)
The JSON output structure is reasonable, but could be updated to match real output format if needed. This section is mostly fine as-is.

## Files to Modify

| File | Changes |
|------|---------|
| `src/pages/Index.tsx` | Update all 4 code snippet sections with accurate commands and syntax |

## Implementation Details

### Installation CodeBlock Update
- Add git clone command
- Show the recommended `bash setup.sh` option
- Include manual uv setup with virtual environment creation
- Keep it concise but complete

### Define Section Update
- Update description to mention format handlers
- Show the handler types (MultipleChoice, Structured, Freeform, Multimodal)
- Emphasize the ~30-50 lines benefit

### Run Section Update
- Change `benchy run` to `benchy eval`
- Change `--model` to `--model-name`
- Add `--limit` parameter
- Show real model names from the README examples
- Include both cloud and local vLLM examples

### Analyze Section
- Keep the current structure (it's reasonable)
- Optionally update to match actual output format

## Technical Notes
- All changes are in `src/pages/Index.tsx`
- The `CodeBlock` component already supports different languages via the `language` prop
- No new dependencies or components needed
