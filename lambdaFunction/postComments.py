# coding:utf-8
from __future__ import print_function


import base64
import json
import urllib
from datetime import datetime

print('Loading function')


def lambda_handler(event, context):
    messageId = event['messageId']
    print('messageId:')
    print(messageId)

    body = event['body']
    print('body:')
    print(body)

    author = event['author']
    print('author:')
    print(author)

    date = event['date']
    print('date:')
    print(date)

    liked = event['liked']
    print("liked:")
    print(liked)



    
