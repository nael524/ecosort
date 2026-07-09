import tensorflow as tf
from tensorflow.keras import layers, models
import matplotlib.pyplot as plt


# ==========================
# KONFIGURASI
# ==========================

DATASET_PATH = "dataset"

IMG_SIZE = 224
BATCH_SIZE = 16
EPOCHS = 20


# ==========================
# LOAD DATASET
# ==========================

train_data = tf.keras.utils.image_dataset_from_directory(
    DATASET_PATH,
    validation_split=0.2,
    subset="training",
    seed=123,
    image_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE
)


val_data = tf.keras.utils.image_dataset_from_directory(
    DATASET_PATH,
    validation_split=0.2,
    subset="validation",
    seed=123,
    image_size=(IMG_SIZE, IMG_SIZE),
    batch_size=BATCH_SIZE
)


class_names = train_data.class_names

print(
    "Class:",
    class_names
)


# ==========================
# NORMALISASI
# ==========================

normalization = layers.Rescaling(
    1./255
)


# ==========================
# MODEL CNN
# ==========================

model = models.Sequential([

    normalization,


    layers.Conv2D(
        32,
        (3,3),
        activation="relu"
    ),

    layers.MaxPooling2D(),


    layers.Conv2D(
        64,
        (3,3),
        activation="relu"
    ),

    layers.MaxPooling2D(),


    layers.Conv2D(
        128,
        (3,3),
        activation="relu"
    ),

    layers.MaxPooling2D(),


    layers.Flatten(),


    layers.Dense(
        128,
        activation="relu"
    ),


    layers.Dropout(
        0.5
    ),


    layers.Dense(
        len(class_names),
        activation="softmax"
    )

])


# ==========================
# COMPILE
# ==========================

model.compile(
    optimizer="adam",
    loss="sparse_categorical_crossentropy",
    metrics=[
        "accuracy"
    ]
)


model.summary()



# ==========================
# TRAINING
# ==========================

history = model.fit(
    train_data,
    validation_data=val_data,
    epochs=EPOCHS
)



# ==========================
# SIMPAN MODEL
# ==========================

model.save(
    "trash_classifier.h5"
)


print(
    "Model berhasil disimpan!"
)



# ==========================
# GRAFIK AKURASI
# ==========================

plt.plot(
    history.history["accuracy"]
)

plt.plot(
    history.history["val_accuracy"]
)

plt.title(
    "Accuracy"
)

plt.legend(
    [
        "Train",
        "Validation"
    ]
)

plt.show()