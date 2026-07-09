import cv2
import os


# ==========================
# PILIH KELAS SAMPAH
# ==========================

class_name = input(
    "Masukkan kategori (Organik/Anorganik/B3): "
)


# ==========================
# FOLDER DATASET
# ==========================

save_path = f"dataset/{class_name}"

if not os.path.exists(save_path):
    os.makedirs(save_path)


# ==========================
# HITUNG GAMBAR YANG ADA
# ==========================

images = os.listdir(save_path)

count = len(images)


# ==========================
# OPEN CAMERA
# ==========================

camera = cv2.VideoCapture(0)

camera.set(
    cv2.CAP_PROP_FRAME_WIDTH,
    640
)

camera.set(
    cv2.CAP_PROP_FRAME_HEIGHT,
    480
)


print("""
==============================
CONTROL

SPACE  : Ambil gambar
Q      : Keluar

==============================
""")


while True:

    ret, frame = camera.read()

    if not ret:
        break


    # tampilkan kamera
    cv2.imshow(
        "Collect Data Sampah",
        frame
    )


    key = cv2.waitKey(1)


    # ======================
    # SIMPAN GAMBAR
    # ======================

    if key == 32:

        count += 1

        filename = (
            f"{class_name}_{count:04d}.jpg"
        )

        filepath = os.path.join(
            save_path,
            filename
        )


        cv2.imwrite(
            filepath,
            frame
        )


        print(
            "Tersimpan:",
            filepath
        )


    # ======================
    # KELUAR
    # ======================

    elif key == ord('q'):

        break



camera.release()

cv2.destroyAllWindows()