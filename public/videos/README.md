# Project Demo Videos

This directory contains demo videos for your portfolio projects.

## How to Add Videos

### Option 1: Local Videos (Free, Simple)
1. Export your demo video as **MP4** or **WebM** format
2. Optimize for web (recommended: 1920x1080, H.264, ~5-10 MB for 30-60 seconds)
3. Place the file here: `public/videos/project-name.mp4`
4. Update your project in `lib/data/projects.ts`:

```typescript
{
  id: "morning-market-brief",
  title: "Morning Market Brief",
  videoUrl: "/videos/morning-market-brief.mp4",
  videoThumbnail: "/videos/morning-market-brief-thumb.jpg", // optional
  // ... rest of project data
}
```

### Option 2: Free CDN Options

#### Cloudflare R2 (Free tier: 10GB storage)
1. Sign up at https://cloudflare.com
2. Create R2 bucket
3. Upload videos
4. Get public URL
5. Use URL directly:
```typescript
videoUrl: "https://pub-xxxxx.r2.dev/morning-market-brief.mp4"
```

#### GitHub Releases (Free, unlimited for public repos)
1. Create a release in your portfolio repo
2. Attach video files as release assets
3. Use the direct download URL:
```typescript
videoUrl: "https://github.com/16bitoni/dipmind/releases/download/v1.0/demo.mp4"
```

#### Vercel Blob Storage (Free tier: 5GB)
1. Install: `npm install @vercel/blob`
2. Upload via Vercel dashboard or API
3. Use the generated URL

### Video Optimization Tips

**Recommended specs:**
- Format: MP4 (H.264 codec) - best compatibility
- Resolution: 1920x1080 or 1280x720
- Bitrate: 2-5 Mbps
- Length: 15-60 seconds
- File size: 5-10 MB max

**Tools to compress:**
- **HandBrake** (free, GUI): https://handbrake.fr
- **FFmpeg** (command line):
  ```bash
  ffmpeg -i input.mov -c:v libx264 -crf 23 -preset medium -c:a aac -b:a 128k output.mp4
  ```

### Custom Thumbnails (Optional)

Generate a thumbnail image:
```bash
ffmpeg -i demo.mp4 -ss 00:00:02 -vframes 1 -q:v 2 thumbnail.jpg
```

Then reference it:
```typescript
videoThumbnail: "/videos/project-thumb.jpg"
```

If not provided, the video's first frame will be used automatically.

## Current Structure

```
public/
  └── videos/
      ├── README.md (this file)
      └── (your video files will go here)
```

## Need Help?

- Video too large? Use HandBrake or FFmpeg to compress
- Need hosting? Cloudflare R2 or GitHub Releases are easiest
- Format issues? Stick with MP4 (H.264) for best compatibility
