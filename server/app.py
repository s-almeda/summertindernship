# -*- coding: utf-8 -*-
# Librarys
import os 
import json 
from collections import namedtuple 

from flask import Flask, make_response, request, jsonify
from flask_cors import CORS, cross_origin
import requests


headers = {"Authorization" : 'Bearer {}'.format(os.environ['ICIMS_KEY'])}
# Variables
app = Flask(__name__)
cors = CORS(app)

# Settings
app.config['DEBUG'] = True
app.config['SECRET_KEY'] = 'secret'
app.config['CORS_HEADERS'] = 'Content-Type'

# Views
@app.route('/', methods=['GET'])
@cross_origin(origin='localhost', headers=['Content-Type', 'Authorization'])
def index():
	r = requests.get('http://hackicims.com/api/v1/companies/99/people', headers=headers)
	json = r.json()	
	return str(json)

# Run
if __name__ == '__main__':
    app.run()
 	