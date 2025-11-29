from fastapi import FastAPI
from pyjokes import pyjokes

app: FastAPI = FastAPI()


@app.get("/items/{item_id}")
async def read_item(item_id : int):
    return {"item_id": item_id}


@app.get("/joke")
async def get_joke():
    joke: str = pyjokes.get_joke()
    return joke


@app.get("/")
async def root():
    return "These root is main the root of the api, please go to the /joke to get the joke. Thanks for unerstanding! Have a nice day!"
