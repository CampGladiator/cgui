# Overview

Welcome to the CGUI react library, with component syncing to bit.dev.

## Getting Started with Bit

After pulling down this repository, you'll need to set up a connection between your machine, the repo, and the bit.dev server.

If you aren't yet familiar with the Bit system and architecture, please [review their documentation](https://docs.bit.dev/docs/quick-start) before contributing to this project.

#### Installation

First, ensure Bit is installed globally on your machine. You can find instructions for installing Bit here: https://docs.Bit.dev/docs/installation

Once Bit is installed locally, you will need to ensure your local components in the repo are synced with Bit.

> It is important that you import before any new work is started on an existing component. Much like rebasing with git, if you start work on an existing component without pulling in the newest changes from remote, you will end up with merge conflicts.

run `yarn sync` to automatically import and list component states for changed components in the Bit.dev repository.

## Architecture
Our Bit architecture uses the proposed Centralized Library workflow described [here](https://docs.bit.dev/docs/workflows/centralized).

This workflow allows us to use this repo (synced with the bit.dev repository) as the source of truth for all of our react components. This also works as a backup for our react library in the event of an outage or other availability issues with the bit.dev server.

This architecture also allows us to properly test our components thoroughly before using them in production projects.

## Contributing

#### Work on existing components
When working on an existing component in the library, first be sure to run `yarn sync` to import the latest versions of all components. This is important since components can be updated outside of this working repository.

Once you have imported the component, you can work on your improvements as needed. **Keep in mind that all components should have full unit test coverage of their functionality and logic.**

Run `bit status` at any time to see the status of tracked components.

Once you have finished work on a tracked component you should build it to ensure it compiles without errors: `bit build <component_id>`

Once you have ensured your component builds correctly, you can tag it with a new version for release. `bit tag --all` will automatically bump version numbers to the next patch or minor release as needed. To manually change the version number, use: `bit tag <component_id> <new_version_number>`

Once your component or components have been versioned, you can export them to the bit.dev server using: `bit export campgladiator.cgui`

If you come across any merge conflicts while exporting, this is likely a result of you not having the most recent version of a component pulled down locally.

You can learn more about fixing these types of merge conflicts [here](https://docs.bit.dev/docs/sourcing-components#merge-remote-conflicts)

#### Work on new components
First identify if you new component constitutes an atom, molecule, organism, template, or page based on the [atomic design principle](https://bradfrost.com/blog/post/atomic-web-design/). This project has a folder for each grouping allowing you to keep your components organized by this paradigm.

To create your component, you can follow the structure you see used by other components in the repo. Set all component files up in a single folder named the same as the component. Include the main component file, along with a .scss file, if needed, a test/spec file and an index file which would allow exporting of the component by Bit.

Once your component folder is structured, you'll want to set up tracking with your component and Bit. To do this run the following command:
```
bit add <local/path/to/ComponentFolder> --tests <local/path/to/ComponentFolder/component.spec.js> --namespace <components/component_folder>
```

In the above example <components/component_folder> would be something like `components/atoms`, `components/molecules`, `components/organisms` etc. Which is the Bit namespace/folder that this component would be grouped with.

**Example:**
```
bit add src/components/atoms/Button --tests src/components/atoms/Button/Button.spec.js --namespace components/atoms
```