from flask import Flask

app = Flask(__name__)


# Members API Route
@app.route("/members")
def members():
    return {
                "placards": [
                {
                    "title": "Shopping List",
                    "items": [
                    {
                        "task": "Milk",
                        "completed": False
                    },
                    {
                        "task": "Bread",
                        "completed": False
                    },
                    {
                        "task": "Eggs",
                        "completed": True
                    }
                    ]
                },
                {
                    "title": "Work Tasks",
                    "items": [
                    {
                        "task": "Write report",
                        "completed": False
                    },
                    {
                        "task": "Prepare presentation",
                        "completed": True
                    },
                    {
                        "task": "Attend meeting",
                        "completed": False
                    }
                    ]
                }
                ]
            }


if __name__ == "__main__":
    app.run(debug=True)