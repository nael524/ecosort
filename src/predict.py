import tensorflow as tf
import numpy as np
import cv2

model=tf.keras.models.load_model("models/best_cnn.keras")

classes=[
    "B3",
    "BotolPlastik",
    "Kaca",
    "Kaleng",
    "Kertas",
    "Organik"
]

img=cv2.imread("test.jpg")

img=cv2.resize(img,(224,224))
img=img.astype("float32")/255.0
img=np.expand_dims(img,axis=0)

pred=model.predict(img)

index=np.argmax(pred)

print("Kelas :",classes[index])
print("Confidence :",pred[0][index]*100,"%")