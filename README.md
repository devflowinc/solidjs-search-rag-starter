# SolidJS Search and RAG template

We at [Trieve](https://trieve.ai/) have been using SolidJS SPA's as our frontend solution of choice for the past 2 years. We do not use the server-side rendering aspects of Solid and focus on client-only frontend solutions. This starter template is not for SSR.

The purpose of this starter template is to provide a starting for developers to build search and RAG AI apps with SolidJS and, secondarily, Trieve. Steps to deploy and suggestions for starting edits are made later in this README.

## The Stack

### Primary Dependencies

It's worth taking a look at Terracotta and verifying you are comfortable with it for the long term. That's the most extraneous dependency of this template.

- [SolidJS](https://www.npmjs.com/package/solid-js) as the reactivity framework and [@solidjs/router] for client-side routing.
- [tailwindcss](https://www.npmjs.com/package/tailwindcss) for styling
- [vite](https://www.npmjs.com/package/vite) as the bulid tool
- [terracotta](https://www.npmjs.com/package/terracotta) as the unstyled component library (the most replaceable dependency) similar to [HeadlessUI](https://headlessui.com/) in React

### Env management

SPA's deploy as an `index.html` file accessible via some URL. In contrast to server-side frameworks like NextJS, there is not a server holding your env's. Env's are actually bundled into the final distribution folder for the application. This introduces some complexity as your env's will likely differ depending on dev environment.

WARNING: EVERYONE WHO USES YOUR APPLICATION WILL SEE YOUR ENV's (make sure to use a read-only API key with Trieve and other API deps)

This template uses [vite-plugin-runtime-env](https://www.npmjs.com/package/vite-plugin-runtime-env) for local dev and [envsubst](https://www.gnu.org/software/gettext/manual/html_node/envsubst-Invocation.html) for env management post-build. You can see how this works and edit it in the [build.sh](https://github.com/devflowinc/solidjs-search-rag-starter/blob/main/build.sh) file at the root of the repository.

## Where to Start Editing

### 1. Routes.tsx

Template starts with a single route for the search page and a 404 handler that redirects to the search page. You likely want to start by adding a route to an additional page or changing some of the current routes.

Be warned that you can [only use context providers within components and not the Router directly](https://github.com/solidjs/solid-router/issues/273#issuecomment-1670335444). Highlighting because this design decision creates a bit of a footgun.

### 2. components/Chunk.tsx

## Local Dev Setup

1. `cp .env.dist .env` to setup environment variables. For this demo, the user should only need the read-only API key present in the default `.env.dist` file.
2. `yarn` to install dependencies
3. `yarn dev` to start the SolidJS SPA

## Contributing

Most of the functionality is present directly in the `src/App.tsx` file.

Read that file to see how things work and then go from there to develop your feature.

## Community

Get in touch with us on [discord](https://discord.gg/eBJXXZDB8z), [matrix](https://matrix.to/#/#trieve-general:trieve.ai), or by email at humans@trieve.ai.
