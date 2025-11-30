#   Copyright (C) 2025  Ahum Maitra

#     This program is free software: you can redistribute it and/or modify
#     it under the terms of the GNU General Public License as published by
#     the Free Software Foundation, either version 3 of the License, or
#     (at your option) any later version.

#     This program is distributed in the hope that it will be useful,
#     but WITHOUT ANY WARRANTY; without even the implied warranty of
#     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#     GNU General Public License for more details.

#     You should have received a copy of the GNU General Public License
#     along with this program.  If not, see <https://www.gnu.org/licenses/>


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
