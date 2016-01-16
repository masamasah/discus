# coding:utf-8
from __future__ import print_function

import json
import urllib
from datetime import datetime
import boto3
from boto3 import Session
import json

s3 = boto3.resource('s3')
AWS_S3_BUCKET_NAME = 'discuscomments'


def lambda_handler(event, context):
    bucket = s3.Bucket(AWS_S3_BUCKET_NAME)

    s3res = Session().resource('s3')

    bucket = s3res.Bucket(AWS_S3_BUCKET_NAME)
    jsonobj = list()

    for obj in bucket.objects.all():
        response = obj.get()
        body = response['Body'].read()
        print(body.decode('utf-8'))
        jsonobj.append(json.loads(body.decode('utf-8')))

    return jsonobj
