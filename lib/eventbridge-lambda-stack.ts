import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export class EventbridgeLambdaStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    const projectName = 'TimeExecution';

    // Lambda関数の定義
    const scheduledLambda = new cdk.aws_lambda.Function(this, projectName + 'Lambda', {
      runtime: cdk.aws_lambda.Runtime.NODEJS_18_X,
      handler: 'index.handler',
      code: cdk.aws_lambda.Code.fromAsset('lambda'), // lambdaディレクトリ内にindex.tsやindex.jsを配置
      environment: {
        MY_ENV_VAR: 'Hello from CDK!',
      },
    });

    // EventBridgeのスケジュールルール
    const rule = new cdk.aws_events.Rule(this, projectName + 'Rule', {
      schedule: cdk.aws_events.Schedule.cron({ minute: '0', hour: '6' }), // 毎日6時に実行（UTC）
    });

    // Lambdaをターゲットに設定
    rule.addTarget(new cdk.aws_events_targets.LambdaFunction(scheduledLambda));
  }
}
