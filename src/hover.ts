import {
	languages,
	ExtensionContext,
	MarkdownString,
	Hover,
	Range
} from 'vscode';

// Keep this as a class for now, so we can operate within it, but I think it could be a function at the end of the day
export class DISpI {
	constructor(context: ExtensionContext) {
		console.log('CONTEXT', context);

		languages.registerHoverProvider('typescript', {
			provideHover(document, position, token) {
				console.log({ document, position, token });
				console.log(document.getText());
				// console.log(document.getWordRangeAtPosition());
				const markdown = new MarkdownString(
					// We can use markdown styling to style this stuff better...
					`<span style="background-color: #eb4034;">Mr Sir</span>`
				);

				markdown.appendCodeblock(
					`const a = 12 // here is a thing`,
					'typescript'
				);

				return new Hover(markdown, new Range(position, position));
			}
		});
	}
}