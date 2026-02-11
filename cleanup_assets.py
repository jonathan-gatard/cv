import os

# Define paths
PUBLIC_DIR = "public"
IMAGES_DIR = os.path.join(PUBLIC_DIR, "images")
VIDEOS_DIR = os.path.join(PUBLIC_DIR, "videos")

# Get list of all assets in public
all_assets = []
for root, dirs, files in os.walk(PUBLIC_DIR):
    for file in files:
        if file.endswith(('.jpg', '.png', '.jpeg', '.mp4', '.mp3')):
            all_assets.append(os.path.join(root, file))

# Find used assets in src
used_assets = set()
for root, dirs, files in os.walk("src"):
    for file in files:
        if file.endswith(".astro"):
            with open(os.path.join(root, file), 'r') as f:
                content = f.read()
                # Simple grep-like search for /images/ and /videos/
                # Check for each asset if it exists in content
                # This is inefficient O(N*M) but N and M are small enough
                for asset in all_assets:
                    # Asset path in code is like /images/... or /videos/...
                    # Asset path on disk is public/images/...
                    
                    code_path = asset.replace("public", "")
                    if code_path in content:
                        used_assets.add(asset)

# Delete unused
count = 0
for asset in all_assets:
    if asset not in used_assets:
        try:
            os.remove(asset)
            print(f"Deleted {asset}")
            count += 1
        except Exception as e:
            print(f"Error {asset}: {e}")

print(f"Total deleted: {count}")
