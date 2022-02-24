from app.models import *
from app import appbuilder
from flask import Flask
from flask_appbuilder.api import ModelRestApi
from flask_appbuilder.models.sqla.interface import SQLAInterface
from flask_cors import CORS

app = Flask(__name__)
CORS(app)
app.config["DEBUG"] = True

class Document(ModelRestApi):
    resource_name = 'document'
    datamodel = SQLAInterface(Document)

appbuilder.add_api(Document)

class Actor(ModelRestApi):
    resource_name = 'actor'
    datamodel = SQLAInterface(Actor)

appbuilder.add_api(Actor)

class Appuser(ModelRestApi):
    resource_name = 'appuser'
    datamodel = SQLAInterface(Appuser)

appbuilder.add_api(Appuser)

class Image(ModelRestApi):
    resource_name = 'image'
    datamodel = SQLAInterface(Image)

appbuilder.add_api(Image)

class Person(ModelRestApi):
    resource_name = 'person'
    datamodel = SQLAInterface(Person)

appbuilder.add_api(Person)

class Place(ModelRestApi):
    resource_name = 'place'
    datamodel = SQLAInterface(Place)

appbuilder.add_api(Place)

class Position(ModelRestApi):
    resource_name = 'position'
    datamodel = SQLAInterface(Position)

appbuilder.add_api(Position)

#db.create_all()