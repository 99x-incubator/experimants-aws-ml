experiments-aws-ml
=================================

This experiment helps to understand how to build a simple Loan Prediction web application with AWS Machine Learning Service.

## Setup

To setup the project follow the following instructions by opening a command terminal.

* Installing the dependancies

```
npm install


```

* Installing gulp globally

```
npm install gulp -g


```

* Deploying the frontend application to s3

```
gulp deploy-s3
```
* Modify the aws.config.json file specifying your bucket and region

* Deploying the Machine Learning Models

```
gulp deploy-ml
```

## References

* AWS Machine Learning CLI: http://docs.aws.amazon.com/cli/latest/reference/machinelearning/
* AWS Machine Learning JavaScript SDK: http://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/MachineLearning.html

