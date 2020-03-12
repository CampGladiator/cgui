# Overview

Welcome to the CGUI react library, with component syncing to bit.dev.

## Getting Started with Bit

After pulling down this repository, you'll need to set up a connection between your machine, the repo, and the bit.dev server.

If you aren't yet familiar with the bit system and architecture, please [review their documentation](https://docs.bit.dev/docs/quick-start) before contributing to this project.

#### Installation

First, ensure bit is installed globally on your machine. You can find instructions for installing bit here: https://docs.bit.dev/docs/installation

Once bit is installed locally, you will need to ensure your local components in the repo are synced with bit.

> It is important that you import before any new work is started on an existing component. Much like rebasing with git, if you start work on an existing component without pulling in the newest changes from remote, you will end up with merge conflicts.

run `yarn sync` to automatically import and list component states for changed components in the bit.dev repository.

## Architecture
Our bit architecture uses the proposed Centralized Library workflow described [here](https://docs.bit.dev/docs/workflows/centralized).

This workflow allows us to use this repo (synced with the bit.dev repository) as the source of truth for all of our react components. This also works as a backup for our react library in the event of an outage or other availability issues with the bit.dev server.

This architecture also allows us to properly test our components thoroughly before using them in production projects.

## 
