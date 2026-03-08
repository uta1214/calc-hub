# Calc Hub

A powerful VS Code calculator extension with a clean sidebar interface. Supports arithmetic, trigonometry, base conversion, and SI prefix unit conversion — all without leaving your editor.

## Features

### 🧮 Basic Calculator
- **Expression Input**: Type any mathematical expression and press Enter to evaluate
- **Superscript Powers**: Enter `x²`, `xⁿ` naturally — displays as proper superscripts
- **Auto Brackets**: Typing `(` automatically inserts `)` and places the cursor inside
- **Thousand Separators**: Results display with commas for readability
- **History**: Previous calculations are saved and can be recalled with a click
- **Constants**: Save named constants (e.g. `c = 299792458`) and insert them into expressions

### 📐 Function Panel (fn ▾)
- **Trigonometry**: sin, cos, tan, asin, acos, atan, sinh, cosh, tanh
- **Logarithms**: log₁₀, log₂, ln
- **Other**: √, |x|, π, e
- **Angle Unit Toggle**: Switch between DEG and RAD modes instantly

### 🔢 Base Conversion
- **Inline Input**: Type directly in BIN, OCT, DEC, or HEX fields
- **Live Sync**: All bases update in real time as you type
- **Input Validation**: Each field only accepts valid characters for its base
- **BIN Formatting**: Binary values display with 4-bit spacing for readability

### 📏 SI Prefix Unit Conversion
- **Inline Input**: Enter a value in any prefix row (T, G, M, k, —, c, m, μ, n, p)
- **Live Sync**: All other prefix rows update instantly
- **Input Validation**: Numeric input only

## Installation

1. Open VS Code
2. Press `Ctrl+P` (Mac: `Cmd+P`)
3. Type `ext install calc-hub`
4. Press Enter

Or search for "Calc Hub" in the Extensions view (`Ctrl+Shift+X` / Mac: `Cmd+Shift+X`).

## Usage

### Basic Calculation
1. Open the Calc Hub sidebar panel
2. Type an expression in the input field (e.g. `sin(30) × 2 + 100`)
3. Press `Enter` or click `=` to evaluate
4. Click any history item to recall it

### Using the Function Panel
1. Click the `fn ▾` button to expand the function drawer
2. Click any function button to insert it into the expression
3. Toggle DEG/RAD with the angle unit button inside the drawer

### Adding Constants
1. Enter a name (e.g. `g`) in the name field
2. Enter a value or expression (e.g. `9.80665`) in the value field
3. Click `+Add`
4. Click a constant chip to insert it into the current expression
5. Click `×` on a chip to delete it

### Base Conversion
1. Switch to the **Base** tab
2. Type a value in any row — BIN, OCT, DEC, or HEX
3. All other rows update automatically

### Unit Conversion
1. Switch to the **Unit** tab
2. Type a numeric value in any prefix row
3. All other prefix rows update automatically

## Keyboard Shortcuts

| Action | Key |
|---|---|
| Evaluate expression | `Enter` |
| Clear input | `Escape` |
| Clear all Base / Unit fields | `Escape` |

## Configuration

No configuration required — Calc Hub works out of the box.

## Tips

### Expression Syntax
- Multiplication: `×` button or `*`
- Division: `÷` button or `/`
- Powers: `x²` for squares, `xⁿ` for arbitrary exponents (e.g. `2^10`)
- Percentage: `%` evaluates as `/100` (e.g. `200 × 15%` → `30`)
- Constants: `π` and `e` are available directly

### Base Conversion Tips
- HEX input accepts both uppercase and lowercase (A–F / a–f)
- BIN results are formatted with spaces every 4 bits (e.g. `0000 1010`)

### Unit Conversion Tips
- Editing any row re-calculates all other rows from that value
- Press `Escape` to clear all rows at once

## License

MIT

---

## 日本語版 (Japanese)

VS Codeのサイドバーで動作するシンプルで高機能な計算機拡張機能。四則演算、三角関数、基数変換、SIプレフィックス単位変換をエディタを離れずに利用できます。

## 機能

### 🧮 基本計算機
- **数式入力**: 数式を入力してEnterで評価
- **上付き文字のべき乗**: `x²`、`xⁿ` として自然に表示
- **括弧の自動補完**: `(` を入力すると `)` が自動挿入され、カーソルが中に入る
- **桁区切り表示**: 結果にカンマ区切りを自動付与
- **履歴**: 過去の計算を保存・再呼び出し可能
- **定数保存**: 名前付き定数（例: `c = 299792458`）を登録して数式に挿入

### 📐 関数パネル（fn ▾）
- **三角関数**: sin, cos, tan, asin, acos, atan, sinh, cosh, tanh
- **対数**: log₁₀, log₂, ln
- **その他**: √, |x|, π, e
- **角度単位切り替え**: DEGとRADをワンクリックで切り替え

### 🔢 基数変換
- **インライン入力**: BIN、OCT、DEC、HEXそれぞれに直接入力
- **リアルタイム同期**: 入力中にすべての基数がリアルタイムで更新
- **入力バリデーション**: 各欄はその基数で有効な文字のみ受け付ける
- **BINフォーマット**: 2進数は4ビットごとにスペース区切りで表示

### 📏 SIプレフィックス単位変換
- **インライン入力**: T、G、M、k、—、c、m、μ、n、pのいずれかの行に直接入力
- **リアルタイム同期**: 他のすべての行が即時更新
- **入力バリデーション**: 数値のみ受け付ける

## インストール

1. VS Codeを開く
2. `Ctrl+P` (Mac: `Cmd+P`) を押す
3. `ext install calc-hub` と入力
4. Enterを押す

または拡張機能ビュー (`Ctrl+Shift+X` / Mac: `Cmd+Shift+X`) で「Calc Hub」を検索。

## 使い方

### 基本計算
1. Calc Hubサイドバーパネルを開く
2. 入力欄に数式を入力（例: `sin(30) × 2 + 100`）
3. `Enter` または `=` ボタンで評価
4. 履歴アイテムをクリックして再呼び出し

### 関数パネルの使い方
1. `fn ▾` ボタンをクリックして関数ドロワーを展開
2. 関数ボタンをクリックして数式に挿入
3. ドロワー内の角度単位ボタンでDEG/RADを切り替え

### 定数の追加
1. 名前欄に名前を入力（例: `g`）
2. 値欄に値または数式を入力（例: `9.80665`）
3. `+Add` をクリック
4. 定数チップをクリックして数式に挿入
5. チップの `×` をクリックして削除

### 基数変換
1. **Base** タブに切り替え
2. BIN、OCT、DEC、HEXのいずれかの行に値を入力
3. 他のすべての行が自動で更新される

### 単位変換
1. **Unit** タブに切り替え
2. 任意のプレフィックス行に数値を入力
3. 他のすべての行が自動で更新される

## キーボードショートカット

| 操作 | キー |
|---|---|
| 数式を評価 | `Enter` |
| 入力をクリア | `Escape` |
| Base / Unitの全フィールドをクリア | `Escape` |

## 設定

設定不要 — Calc Hubはそのままで動作します。

## ヒント

### 数式の書き方
- 掛け算: `×` ボタンまたは `*`
- 割り算: `÷` ボタンまたは `/`
- べき乗: `x²` は2乗、`xⁿ` は任意のべき乗（例: `2^10`）
- パーセント: `%` は `/100` として評価（例: `200 × 15%` → `30`）
- 定数: `π` と `e` は直接利用可能

### 基数変換のヒント
- HEX入力は大文字・小文字どちらも受け付ける（A–F / a–f）
- BINの結果は4ビットごとにスペース区切りで表示（例: `0000 1010`）

### 単位変換のヒント
- 任意の行を編集するとその値を基準に全行が再計算される
- `Escape` で全フィールドを一括クリア

## ライセンス

MIT

---

by uta