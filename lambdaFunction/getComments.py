from __future__ import print_function

import json
import urllib
import datetime

print('Loading function')


def lambda_handler(event, context):
    jsonobj = {
        "messageId":1,
        "body":"Hello Lambda",
        "author":"Masayuki.Hirata",
        "date": datetime.date.today().isoformat(),
        "liked":1
        }
    return jsonobj
