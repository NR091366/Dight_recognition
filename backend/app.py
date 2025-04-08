from flask import Flask, request, jsonify
from flask_cors import CORS
import numpy as np
from tensorflow.keras.models import load_model
from utils.preprocess import process_file

app = Flask(__name__)
CORS(app)

model = load_model("model/digit_model.h5")
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

@app.route('/predict', methods=['POST'])
def predict():
    file = request.files.get("file")
    if not file:
        return jsonify({"error": "No file uploaded"}), 400
    try:
        print("File received:", file.filename)
        image_array = process_file(file)
        prediction = model.predict(image_array)
        predicted_digit = int(np.argmax(prediction, axis=1)[0])
        return jsonify({"digit": predicted_digit})
    except Exception as e:
        print("Prediction error:", e)
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)