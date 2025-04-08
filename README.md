# Digit Recognizer AI

A full-stack AI-powered web application that predicts handwritten digits using a Convolutional Neural Network (CNN) model.

Built with **React** (frontend) and **Flask + TensorFlow** (backend), this app allows users to upload digit images or PDFs — and instantly get accurate predictions.

---

## ✨ Features

- Upload PNG, JPG, JPEG, or PDF files
- Preview uploaded image before prediction
- Displays predicted digit in a stylish UI card
- Powered by a trained CNN using MNIST dataset
- Clean React-based frontend with modern UI
- Optionally extendable with drawing canvas

---

## 🖥️ Tech Stack

| Frontend           | Backend        | AI Model          |
|--------------------|----------------|-------------------|
| React (Create React App) | Flask (Python) | TensorFlow / Keras |
| HTML/CSS           | CORS / REST API | MNIST CNN         |

---

## 🚀 Live Demo

**Frontend:** [https://your-vercel-link](https://your-vercel-link)  
**Backend (API):** [https://your-render-backend-url](https://your-render-backend-url)

---

## 📷 Screenshots

![UI Preview](screenshots/ui-preview.png)

---

## 🛠️ How to Use

1. Upload a clear image or PDF of a handwritten digit (0–9)
2. Click on **Predict Digit**
3. View the result in the UI card

---

## 🧠 Model Info

The model is trained on the MNIST dataset with the following architecture:

- Conv2D + MaxPooling
- Flatten
- Dense(100) + ReLU
- Dense(10) + Softmax

Training accuracy: **~99%**, Test accuracy: **~98.5%**

---

## 🛠️ Local Setup

```bash
# Clone the repo
git clone https://github.com/your-username/digit-recognizer-ai.git
cd digit-recognizer-ai

# Backend
cd backend
pip install -r requirements.txt
python train_model.py  # train once if needed
python app.py          # start Flask server

# Frontend
cd ../digit-ui
npm install
npm start
