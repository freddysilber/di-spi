# di-spi README

# DI Spi
DI Spi is the newest solution to 'peeping' into the dependency chain in your typescript code.

## Contraints / Scope
- The user has a class with constructor params
- The user should be able to hover over the args in the constructor (the variable names)
- The user should see a popover / hover window with information about the class / argument they are hovering
- The user can collect context of whats being 'injected' to the class that they are currently viewing
- The user should be able to stay on the same file and not have to navigate to the 'parent' file or the file that is being passed in as an argument to the current file's constructor
- The user and see what is ```public``` and what is ```private```

#### OPTIONAL:

- The user can copy the 'signature' or variable from within the hover window
- The user can see the public exposed methods from the class they are hovering over (so they could use them within the class they are in)
- The user can see if the class is marked 'abstract' so they can extend it if they'd like to

This is the README for your extension "di-spi". After writing up a brief description, we recommend including the following sections.

## Description
VSCode extension for typescript to show the user what dependencies / props and params are availablet to them from class constructor.
Example: class A injects class B into the constructor and class B injects class C into its constructor. If I hover over the class B injection (on class A), the hover shows what is being injected into class B (eventhough your on class A) which would be the injection of class C.

## Features

Describe specific features of your extension including screenshots of your extension in action. Image paths are relative to this README file.

For example if there is an image subfolder under your extension project workspace:

\!\[feature X\]\(images/feature-x.png\)

> Tip: Many popular extensions utilize animations. This is an excellent way to show off your extension! We recommend short, focused animations that are easy to follow.

## Requirements

If you have any requirements or dependencies, add a section describing those and how to install and configure them.

## Extension Settings

Include if your extension adds any VS Code settings through the `contributes.configuration` extension point.

For example:

This extension contributes the following settings:

* `myExtension.enable`: enable/disable this extension
* `myExtension.thing`: set to `blah` to do something

## Known Issues

Calling out known issues can help limit users opening duplicate issues against your extension.

## Release Notes

Users appreciate release notes as you update your extension.

### 1.0.0

Initial release of ...

### 1.0.1

Fixed issue #.

### 1.1.0

Added features X, Y, and Z.

-----------------------------------------------------------------------------------------------------------
## Following extension guidelines

Ensure that you've read through the extensions guidelines and follow the best practices for creating your extension.

* [Extension Guidelines](https://code.visualstudio.com/api/references/extension-guidelines)

## Working with Markdown

**Note:** You can author your README using Visual Studio Code.  Here are some useful editor keyboard shortcuts:

* Split the editor (`Cmd+\` on macOS or `Ctrl+\` on Windows and Linux)
* Toggle preview (`Shift+CMD+V` on macOS or `Shift+Ctrl+V` on Windows and Linux)
* Press `Ctrl+Space` (Windows, Linux) or `Cmd+Space` (macOS) to see a list of Markdown snippets

### For more information

* [Visual Studio Code's Markdown Support](http://code.visualstudio.com/docs/languages/markdown)
* [Markdown Syntax Reference](https://help.github.com/articles/markdown-basics/)

**Enjoy!**
