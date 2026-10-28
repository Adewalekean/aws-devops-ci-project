# AWS DevOps CI Pipeline Project

## Project Overview

In this project, I created an automated CI pipeline using AWS CodeCommit, CodeBuild, CodePipeline, and Amazon S3.

The aim was to automate the process of testing and building a simple Node.js application whenever I pushed changes to my repository.

Instead of manually running the build every time, AWS CodePipeline detects changes in CodeCommit and starts the build automatically.

## AWS Services Used

- **AWS CodeCommit:** Stores my application code and tracks changes.
- **AWS CodeBuild:** Runs my automated tests and packages the application.
- **AWS CodePipeline:** Connects CodeCommit and CodeBuild and automates the workflow.
- **Amazon S3:** Stores the packaged application artifacts.
- **AWS IAM:** Controls permissions between the AWS services.
- **Amazon CloudWatch:** Stores the build logs for monitoring and troubleshooting.

## Project Structure

```text
aws-devops-ci-project/
├── app.js
├── app.test.js
├── package.json
├── buildspec.yml
├── README.md
└── screenshots/
```

## How the Pipeline Works

1. I make changes to the Node.js application on my Mac.
2. I commit the changes using Git and push them to AWS CodeCommit.
3. AWS CodePipeline detects the new commit on the `master` branch.
4. CodePipeline sends the source code to AWS CodeBuild.
5. CodeBuild runs the automated test using `npm test`.
6. If the test passes, CodeBuild packages the application.
7. The build artifact is uploaded to Amazon S3.

## Running the Application Locally

Make sure Node.js and npm are installed.

Run:

```bash
npm start
```

This displays a welcome message in the Terminal.

## Running Automated Tests

Run:

```bash
npm test
```

The test checks that the greeting function returns the expected message.

## Build Configuration

The `buildspec.yml` file defines the steps AWS CodeBuild follows.

It uses Node.js 22, installs dependencies, runs automated tests, and copies the application files into a `dist` directory.

The build output is packaged as a ZIP artifact.

## AWS Configuration

| Service | Configuration |
|---|---|
| Region | eu-west-2 (London) |
| CodeCommit repository | aws-devops-ci-project |
| Source branch | master |
| CodeBuild project | aws-devops-ci-build |
| CodePipeline | aws-devops-ci-pipeline |
| S3 bucket | aws-devops-ci-artifacts-k7m42p |

## Security and IAM

I used AWS IAM Identity Center to access my AWS account and configured AWS CLI authentication using an SSO profile.

CodeBuild and CodePipeline use IAM service roles to access the AWS services required by the pipeline.

The CodeBuild service role has permissions to read the source repository, write build logs, and upload artifacts to S3.

The S3 bucket is private, with public access blocked.

No AWS access keys or passwords are stored in the source code.

## Testing the Pipeline

After creating the pipeline, I updated the application greeting and pushed the change to the `master` branch.

CodePipeline detected the new commit automatically.

Both the Source and Build stages completed successfully, confirming that the CI pipeline was working.

## Challenges and Lessons Learned

During the project, I experienced a Git 403 authentication error when pushing code to CodeCommit.

I resolved this by configuring Git to use the AWS CodeCommit credential helper with my AWS SSO profile.

I also encountered an expired AWS SSO token, which I fixed by signing in again using the AWS CLI.

This project helped me understand how Git, automated testing, IAM permissions, build artifacts, and AWS CI services work together.

## Evidence

Screenshots of the successful CodeBuild execution, automated test results, S3 artifact, and CodePipeline execution are stored in the `screenshots` directory.

## Conclusion

I successfully created an automated CI pipeline using AWS services.

The pipeline detects new code changes, runs automated tests, and builds the application without needing me to start the process manually.