import * as vscode from 'vscode';
import * as path from 'path';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
  const provider = new CalcHubProvider(context.extensionUri);
  context.subscriptions.push(
    vscode.window.registerWebviewViewProvider('calc-hub.view', provider)
  );
}

export function deactivate() {}

class CalcHubProvider implements vscode.WebviewViewProvider {
  constructor(private readonly _extensionUri: vscode.Uri) {}

  resolveWebviewView(webviewView: vscode.WebviewView) {
    webviewView.webview.options = {
      enableScripts: true,
      localResourceRoots: [
        vscode.Uri.joinPath(this._extensionUri, 'media')
      ]
    };
    webviewView.webview.html = this._getHtml(webviewView.webview);
  }

  private _getHtml(webview: vscode.Webview): string {
    const htmlPath = path.join(this._extensionUri.fsPath, 'media', 'calculator.html');
    let html = fs.readFileSync(htmlPath, 'utf8');
    return html;
  }
}