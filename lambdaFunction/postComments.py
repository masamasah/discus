# coding:utf-8
from __future__ import print_function


import base64
import json
import urllib
from datetime import datetime
import boto3

s3 = boto3.resource('s3')
AWS_S3_BUCKET_NAME = 'discuscomments'

messageIdKey = 'messageId'
bodyKey = 'body'
authorKey = 'author'
dateKey = 'date'
likedKey = 'liked'

def lambda_handler(event, context):
    messageId = event[messageIdKey].replace('/','')
    body = event[bodyKey]
    author = event[authorKey]
    date = event[dateKey]
    liked = event[likedKey]

    bucket = s3.Bucket(AWS_S3_BUCKET_NAME)

    PUT_OBJECT_KEY_NAME = messageId+'.json'

    obj = bucket.Object(PUT_OBJECT_KEY_NAME)
    preBody = '{'
    endBody = '}'

    bodyList = [
        ':'.join(['"'+messageIdKey+'"','"'+messageId+'"']),
        ':'.join(['"'+bodyKey+'"','"'+body+'"']),
        ':'.join(['"'+authorKey+'"','"'+author+'"']),
        ':'.join(['"'+dateKey+'"','"'+date+'"']),
        ':'.join(['"'+likedKey+'"','"'+liked+'"'])
            ]

    body = preBody + ','.join(bodyList) + endBody

    print(body)
    response = obj.put(
        Body=body.encode('utf-8'),
        ContentEncoding='utf-8',
        ContentType='text/plane'
    )

    
