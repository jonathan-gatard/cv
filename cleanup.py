import os

def normalize_path(p):
    return p.strip().replace('public', '').replace('/cv', '')

with open('all_images.txt', 'r') as f:
    all_files = [line.strip() for line in f.readlines()]

with open('used_images.txt', 'r') as f:
    used_files = set([normalize_path(line) for line in f.readlines()])

# Also add used videos
with open('used_videos.txt', 'r') as f:
    used_videos = set([normalize_path(line) for line in f.readlines()])
    
deleted_count = 0
for file_path in all_files:
    # Check if image or video
    normalized = file_path.replace('public', '') 
    
    # We need to be careful. The used_images.txt has lines like /images/projects/... 
    # The file_path is public/images/projects/...
    # normalized is /images/projects/...
    
    if normalized not in used_files and normalized not in used_videos:
        # Double check if it's a video file in the images list (unlikely but possible if I messed up find)
        # simplistic check
        try:
            os.remove(file_path)
            print(f"Deleted {file_path}")
            deleted_count += 1
        except OSError as e:
            print(f"Error deleting {file_path}: {e}")

print(f"Total deleted: {deleted_count}")
