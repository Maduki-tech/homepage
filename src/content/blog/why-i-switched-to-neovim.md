---
title: "Why I Switched to Neovim (And Never Looked Back)"
date: "2025-08-23"
description: "Three years into my Neovim journey — what I actually use daily, what was hype, and why the modal editing model changed how I think about code."
image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop"
tags: ["Neovim", "Productivity", "Tools", "Dev Setup"]
readTime: "5 min read"
---

## The Honest Beginning

I switched to Neovim because it looked cool on tech Twitter. I'm not going to pretend otherwise.

What kept me was something different entirely.

## The Modal Model Rewires You

The first two weeks were humbling. I was slower than I'd ever been. The muscle memory from VS Code — clicking, Command+S, trackpad gestures — had to be completely unlearned.

But around week three, something clicked. I stopped *reaching* for the mouse. Navigation became a thought, not a physical movement. `ci"` to change inside quotes. `dap` to delete a paragraph. `<leader>ff` to fuzzy-find a file.

The editor stopped being an obstacle between my thoughts and the code.

## What I Actually Use

My setup is deliberately minimal:

- **[lazy.nvim](https://github.com/folke/lazy.nvim)** — plugin management
- **nvim-lspconfig** + **mason.nvim** — LSP for every language I use
- **telescope.nvim** — fuzzy finding everything
- **oil.nvim** — file navigation that feels like editing text
- **conform.nvim** — formatting on save

I've tried Treesitter-based textobjects, various AI plugins, complex statuslines. I always end up trimming back.

## The Config Is the Point

Here's what VS Code users sometimes miss: the Lua config *is* part of the workflow. Understanding why something works, being able to read and modify it — that's not overhead. That's ownership.

When my LSP does something unexpected, I know exactly where to look. When I want a new keybinding, I add five lines of Lua. No marketplace hunting, no GUI settings buried three menus deep.

## What Neovim Won't Fix

It won't make you a better programmer. The algorithmic complexity of your code doesn't care what editor you used.

If you're context-switching constantly (Slack, browser, meetings), the 200ms you save on every navigation command won't matter.

It *will* make the time you do spend editing code feel more deliberate and efficient. That's worth something if writing code is most of your day.

## Should You Switch?

Give it 30 days of real use — not side-by-side with VS Code, not as a curiosity. As your primary editor.

If you hate it after 30 days, go back. You'll at least understand why you prefer what you prefer. That metacognition is worth the experiment.
