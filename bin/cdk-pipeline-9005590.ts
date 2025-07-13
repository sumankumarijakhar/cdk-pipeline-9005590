#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkPipelineStack } from '../lib/cdk-pipeline-9005590-stack';

const app = new cdk.App();
new CdkPipelineStack(app, 'CdkPipelineStack');
