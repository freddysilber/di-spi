import * as vscode from 'vscode';

export default class Tsbs {
	public static helloWorld(message: string): void {
		vscode.window.showInformationMessage(message);
	}
}
