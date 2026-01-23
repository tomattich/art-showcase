import os
from PIL import Image

def compress_images(source_dir, target_dir, max_width=800, quality=70):
    if not os.path.exists(target_dir):
        os.makedirs(target_dir)
        print(f"Created directory: {target_dir}")

    # List of images to process
    images_to_process = [f for f in os.listdir(source_dir) if (f.startswith('showcase') or f == 'cover.jpg') and f.endswith(('.jpg', '.jpeg'))]

    if not images_to_process:
        print("No images found to process.")
        return

    for filename in images_to_process:
        source_path = os.path.join(source_dir, filename)
        target_path = os.path.join(target_dir, filename)

        try:
            with Image.open(source_path) as img:
                # Resize while maintaining aspect ratio
                if img.width > max_width:
                    ratio = max_width / float(img.width)
                    new_height = int(float(img.height) * float(ratio))
                    img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
                
                # Save with compression
                img.save(target_path, "JPEG", quality=quality, optimize=True, progressive=True)
                print(f"Compressed {filename}: {os.path.getsize(source_path)} -> {os.path.getsize(target_path)} bytes")
        except Exception as e:
            print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    SOURCE = "images"
    TARGET = os.path.join("images", "about")
    compress_images(SOURCE, TARGET)
