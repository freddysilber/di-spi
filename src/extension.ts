/**
 * Notes
 * 
 * https://stackoverflow.com/questions/67749752/how-to-apply-styling-and-html-tags-on-hover-message-with-vscode-api
 */
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
// CUSTOM
import Tsbs from './tsbs';
import { DISpy, hoverWidget } from './hover';
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	// console.log('Congratulations, your extension "di-spy" is now active!');
	Tsbs.helloWorld('Hello world from the TSBS'); // This shows a hello world message when the extension is loaded??
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerCommand('di-spy.helloWorld', () => {
		// The code you place here will be executed every time your command is executed
		// Display a message box to the user
		vscode.window.showInformationMessage('Hello World from di-spy!');
	});
	context.subscriptions.push(disposable);
	hoverWidget;

	const diSpy = new DISpy(context);
	console.log(diSpy);
}
// this method is called when your extension is deactivated
export function deactivate() {
	// This method might be good for some garbage collection and clean up???
}