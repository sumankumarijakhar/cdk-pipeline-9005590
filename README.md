# AWS CDK + CodePipeline Project

This project was created for Assignment 2 in our DevOps course. It uses AWS CDK (with TypeScript) to define and provision basic AWS resources. A CI/CD pipeline is also planned using AWS CodePipeline with GitHub as the source and AWS CodeBuild to synthesize and deploy the infrastructure.

## What this project includes:

- An S3 bucket (versioned, for storing static files)
- A Lambda function (basic Node.js handler)
- A DynamoDB table (simple CRUD setup)
- A buildspec.yml file to run CDK commands via CodeBuild
- Project configured for deployment using AWS CDK and CodePipeline

Although I didn’t deploy the resources on AWS, I followed the structure and code as required. The project is organized and ready for deployment if access keys are provided later.

## How to Run

1. Clone this repo or unzip the project folder
2. Run `npm install` to install dependencies
3. Run `npm run build` to compile the code
4. You can use `cdk synth` to generate the CloudFormation template

## Technologies Used

- AWS CDK (TypeScript)
- AWS Lambda
- Amazon S3
- Amazon DynamoDB
- AWS CodePipeline & CodeBuild (via `buildspec.yml`)
- GitHub for version control

## Notes

I have prepared all the files correctly but did not run `cdk deploy` since I don’t have access to an AWS account. Screenshots and documentation explain the expected behavior and setup.