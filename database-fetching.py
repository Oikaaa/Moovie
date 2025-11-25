import sqlite3
import json

def fetchDataAsJSON(database_path):
    connection = sqlite3.connect(database_path)
    cursor = connection.cursor()

    # Example: Select all data from a 'users' table
    cursor.execute("SELECT * FROM movies_list")
    rows = cursor.fetchall()

    # Get column names for creating dictionary keys
    column_names = [description[0] for description in cursor.description]

    # Convert rows to a list of dictionaries
    data = []
    for row in rows:
        data.append(dict(zip(column_names, row)))

    connection.close()
    return json.dumps(data, indent=4)

dataJSON = fetchDataAsJSON("./Database/database.db")

with open("./Public/Data/moviesDatabase.json", "w") as f:
    f.write(dataJSON)
