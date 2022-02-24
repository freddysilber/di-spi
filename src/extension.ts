// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "di-spy" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('di-spy.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from di-spy!');
	});

	context.subscriptions.push(disposable);

	vscode.languages.registerHoverProvider('typescript', {
		provideHover(document, position, token) {
			console.log({ document, position, token });
			const markdown = new vscode.MarkdownString(`
|    <span style="color:#ff0;background-color:#000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>|    Header     |
|    :----:    |    :----:     |
|first cell    |second cell  |
|third cell    |<span style="color:#f00;background-color:#fff;">&nbsp;&nbsp;fourth cell&nbsp;&nbsp;</span>  |
        \n\n\n`);
			const codeblock = 'const a = 12';
			markdown.appendCodeblock(codeblock, 'typescript');
			return new vscode.Hover(markdown, new vscode.Range(position, position));
			// return {
			// 	contents: [
			// 		'Hover Content',
			// 		'yo',
			// 		'```public readonly _dep: MyDep```'
			// 	]
			// };
		}
	});
}

// this method is called when your extension is deactivated
export function deactivate() { }

// https://stackoverflow.com/questions/67749752/how-to-apply-styling-and-html-tags-on-hover-message-with-vscode-api

// vscode.languages.registerHoverProvider('javascript', {
// 	provideHover(document, position, token) {

// 		// a markdown table, wrapping in a styled span did not work
// 		// had to style each "cell" separately
// 		// html entity &nbsp; works

// 		const markdown = new vscode.MarkdownString(`
// |    <span style="color:#ff0;background-color:#000;">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Table&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>|    Header     |
// |    :----:    |    :----:     |
// |first cell    |second cell  |
// |third cell    |<span style="color:#f00;background-color:#fff;">&nbsp;&nbsp;fourth cell&nbsp;&nbsp;</span>  |
//         \n\n\n`);  // the newline is necessary for any following appends to work correctly, multiple newlines are reduced to one

// 		const styledString = `<span style="color:#fff;background-color:#666;">&nbsp;&nbsp;&nbsp;NASA code follows:&nbsp;&nbsp;&nbsp;</span>`;

// 		const codeBlock = `const a = 12;
// if (a) return;`;    // any preceding tabs will be rendered in a template literal, so flush left

// 		// const codeBlock2 = `const c = 12;\nif (c) return;`;  // works, alternate form with newline

// 		markdown.appendText("______________________________\n");  // a fake separator
// 		markdown.appendMarkdown(styledString);
// 		markdown.appendCodeblock(codeBlock, "javascript");
// 		markdown.appendMarkdown(
// 			`**Bold Text**
// * some note
// * another note
// * final note`
// 		);

// 		markdown.isTrusted = true;

// 		return new vscode.Hover(markdown, new vscode.Range(position, position));
// 	}