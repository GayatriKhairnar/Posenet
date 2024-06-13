
# PoseNet Glasses Overlay Project

This project uses PoseNet with p5.js to detect the nose from a webcam feed and overlay a pair of eyeglasses accordingly. The goal is to demonstrate how to use machine learning models for real-time applications with visual effects.

## Features

- Real-time nose detection using the PoseNet model.
- Overlay of eyeglasses image based on detected nose position.
- Uses p5.js for drawing and capturing video from the webcam.
- Simple and easy-to-understand implementation.

## Setup

### Prerequisites

Ensure you have the following installed:

- A web browser (preferably Google Chrome or Firefox)
- A local server to serve the HTML file (optional but recommended for better performance)


### Instructions

1. **Clone the repository or download the project files.**

2. **Place your eyeglasses image (`spects.png`) in the `images` directory.**

3. **Open the `index.html` file in your web browser.**

## How It Works

1. **Setup**: The project initializes a webcam feed and sets up the PoseNet model for pose detection.
2. **Pose Detection**: PoseNet continuously detects the position of the nose in the webcam feed.
3. **Overlay**: The eyeglasses image is drawn on the canvas at the position of the detected nose, updating in real-time.

## Code Explanation

- **Setup**: Initializes the canvas, webcam capture, and PoseNet model.
- **Model Loaded**: Callback function to log when the PoseNet model is loaded.
- **Received Poses**: Updates the global `singlePose` variable with the latest pose data.
- **Draw**: Continuously draws the webcam feed and overlays the eyeglasses image based on the detected nose position.

## Customization

- **Adjusting Image Placement**: Modify the coordinates in the `draw` function to fine-tune the placement of the eyeglasses.
- **Changing the Image**: Replace `spects.png` with any other image and adjust the size and position accordingly.

## Dependencies

- **p5.js**: Library for creative coding.
- **ml5.js**: Friendly machine learning library built on top of TensorFlow.js.
