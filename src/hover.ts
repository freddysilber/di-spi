/**
 * Notes
 * 
 * Does this need to be a const?
 * Can this be an exported function or a class???
 * Can this be a default export?
 */
import * as vscode from 'vscode';

export class DISpI {

	constructor(context: vscode.ExtensionContext) {
		console.log('CONTEXT', context);

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
		// const input = vscode.window.showInputBox().then((input) => {
		// 	console.log(input);
		// });
	}
}
