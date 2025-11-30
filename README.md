# Serverless Scheduled Tasks

EventBridgeを使用して定期的にLambda関数を実行するサンプルプロジェクトです。

## アーキテクチャ

![Architecture](./docs/architecture.drawio)

## 主な機能

- **EventBridge Rule**: 毎日6:00 UTC（15:00 JST）に自動実行
- **Lambda Function**: Node.js 18.xで実装されたシンプルな実行関数
- **CloudWatch Logs**: 実行ログの記録と監視

## 技術スタック

- AWS CDK (TypeScript)
- AWS Lambda (Node.js 18.x)
- Amazon EventBridge
- Amazon CloudWatch

## セットアップ

```bash
# 依存関係のインストール
npm install

# TypeScriptのビルド
npm run build

# AWSへのデプロイ
npx cdk deploy
```

## プロジェクト構成

```
.
├── bin/                    # CDKアプリのエントリーポイント
├── lib/                    # CDKスタック定義
├── lambda/                 # Lambda関数のコード
├── docs/                   # ドキュメント・構成図
└── README.md
```

## 開発コマンド

```bash
npm run build   # TypeScriptをコンパイル
npm run watch   # ファイル変更を監視してコンパイル
npx cdk diff    # デプロイ済みスタックとの差分確認
npx cdk synth   # CloudFormationテンプレートの生成
```
