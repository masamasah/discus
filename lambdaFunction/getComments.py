# coding:utf-8
from __future__ import print_function

import json
import urllib
from datetime import datetime

print('Loading function')


def lambda_handler(event, context):
    jsonobj = [{
        "messageId":1,
        "body":u"こんにちは",
        "author":u"将之",
        "date": datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
        "liked":1
        },
        {
        "messageId":2,
        "body":u"こんばんは",
        "author":u"平田",
        "date": datetime.now().strftime("%Y/%m/%d %H:%M:%S"),
        "liked":1
        }
        ]
    return jsonobj
