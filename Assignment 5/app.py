from flask import Flask, request, jsonify
from flask_cors import CORS
import mysql.connector

app = Flask(__name__)
CORS(app)  

db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Mysql@123",
    database="user_db"
)
cursor = db.cursor()

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    data = request.json
    try:
        query = """
            INSERT INTO project_submissions (name, email, phone, vehicle_year, vehicle_make, vehicle_model, project_description)
            VALUES (%s, %s, %s, %s, %s, %s, %s)
        """

        # Split vehicle field into year, make, and model
        vehicle_parts = data.get('vehicle', '').split(' ', 2)
        year = int(vehicle_parts[0]) if len(vehicle_parts) > 0 and vehicle_parts[0].isdigit() else None
        make = vehicle_parts[1] if len(vehicle_parts) > 1 else ''
        model = vehicle_parts[2] if len(vehicle_parts) > 2 else ''

        values = (
            data.get('name'),
            data.get('email'),
            data.get('phone'),
            year,
            make,
            model,
            data.get('message')
        )
        cursor.execute(query, values)
        db.commit()
        return jsonify({'message': 'Contact form submitted successfully!'}), 201
    except Exception as e:
        print("Error:", e)
        return jsonify({'message': 'Failed to submit form'}), 500

if __name__ == '__main__':
    app.run(debug=True)
