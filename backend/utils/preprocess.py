import numpy as np
from PIL import Image, ImageOps
import cv2
from pdf2image import convert_from_bytes

def process_file(file):
    filename = file.filename.lower()
    # Step 1: Convert input file to image
    if filename.endswith('.pdf'):
        image = convert_from_bytes(file.read())[0]  # First page of PDF
    else:
        image = Image.open(file.stream)
    # Step 2: Convert to grayscale
    image = image.convert('L')
    # Step 3: Invert image (to make it white digit on black if needed)
    image = ImageOps.invert(image)
    # Step 4: Resize to 28x28 while keeping aspect ratio
    image = image.resize((28, 28), Image.LANCZOS)
    # Step 5: Convert to NumPy array
    image_array = np.array(image)
    # Step 6: Normalize to 0-1
    image_array = image_array / 255.0
    # Step 7: Reshape to match model input
    image_array = image_array.reshape(1, 28, 28, 1)
    print("Processed Image Array:", image_array)  # Debugging line
    return image_array