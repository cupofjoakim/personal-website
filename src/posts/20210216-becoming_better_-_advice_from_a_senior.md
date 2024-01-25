---
title: Becoming better - Advice from a senior
date: '2021-02-16'
categories:
  - programming
  - advice
  - engineering
excerpt: It's been around eight years since I made my first commit as a paid developer. Here's some findings that made me better.
author: Joakim Wimmerstedt
author_url: '/'
published: true
---

I have been in the dev game for a long time now, so I thought I'd share some thought with those who are new to the profession.

It's been around eight years since I made my first commit as a paid developer. "Paid" is almost a stretch, as I was an intern at an ad agency in London and the pay barely covered my rent. It was a fun time though, as the result was some cool pitch stuff for some major brands and a ["Website of the day" award from The FWA](https://thefwa.com/cases/wonder-world-fur).

For me, the first four years as a developer was riddled with impostor syndrome. I know a lot of you feel the same and while the comforting "everyone goes through it" probably has been bashed in to your skulls at this point _I think_ I can help you even more. So, humor me while I type down my ramblings.

## Always ask "Why"

At times you'll see design patterns you're unfamiliar with, or technology that solves an issue in a new way. The last example for me would probably be how [deno handles remote imports](https://deno.land/manual/examples/import_export#remote-import) or how observables differ in RxJava and javascript.

The important part when seeing things like these is not to like it, but understanding _why_ it's being done. Quite frankly it's good to have an opinion, but important to know why you do.

A thought experiment could be the utility css-classes in Tailwind:

```html
<div class="bg-gray-100 rounded-xl p-8" />
<!-- What's probably in tailwind -->
<style>
  .bg-gray-100 {
    background: gray;
  }
  .rounded-xl {
    border-radius: 15rem;
  }
  .p-8 {
    padding: 8rem;
  }
</style>

<!-- VS traditional approach -->
<div class="gray-circle" />
<style>
  .gray-circle {
    background: gray;
    border-radius: 15rem;
    padding: 8rem;
  }
</style>
```

When this started gaining traction among developers a lot of people where against it.

> That many classes just pushes styling to the markup, so that can't be good right? We learnt in school that we should separate styling and content!

Turns out it's a good idea in many cases. Why? Because we've moved a lot of how we handle markup into component based frameworks like React, vue and svelte. It makes sense as we're no longer authoring documents, we're authoring individual parts! Apart from the example above, I haven't had to write manual css in a long time, and it seems the results are a bit more consistent thanks to tailwind and tachyon.

## Experiment

You've got to try new stuff to learn new stuff. Preferably really alien things. New paradigms come from all over the place. Spending some years with object oriented java made me a better javascript developer, and while I don't think I'll need my skills in WebGL that often I've still learned a lot.

Experiment! Make it weird! You don't always have to understand it or want to work with it in the future. Make a game in [Godot](https://godotengine.org/) or try making a shader in [shadertoy](https://www.shadertoy.com/). Or just [make a tinder clone in vs code like benawad](https://twitter.com/benawad/status/1336691028473090050)?

## Do boring stuff

This might feel like a weird point to make after talking about how important it is to experiment, but hear me out. Programming is a skill, and like all other skills it needs to trained. The truth is that you're unlikely to master anything without just doing it a lot for a long time.

So, I advice you to do what I did. Use old tech. Refactor, a lot. Write tests, a lot. Try to automate a task that seems boring. Jump on the chance to fix a bug in that old legacy system. Try to draw parallells to modern development - why did we do it like this? Debugging is a skill worth mastering.

> Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it. – Brian Kernighan

## Be humble

```
Me at 0 years experience: hehe, code 🐣
Me at 3 years experience: I'm getting the hang of this
Me at 5 years experience: I know everything
Me at 8 years experience: ¯_(ツ)_/¯ wat
```

It's been joked about a lot but it's true. You think you know everything until you know enough to know you know nothing.

Being a developer is only partly about the hard skill of programming. It's also about teamwork, communicating ideas and solving problems. The nature of teamwork is that there's bound to be different perspectives. Over a career you're bound to be wrong some times. In hindsight - a lot of times. Which is good, that's how you learn.
