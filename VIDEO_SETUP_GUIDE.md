# Video Demo Setup Guide

Your portfolio now supports video demos for projects! Videos appear as banners on both the home page Work section and the dedicated Work page.

## Quick Start

### 1. Prepare Your Video

**Record your demo** (15-60 seconds showing key features)

**Optimize for web:**
```bash
# Using FFmpeg (free tool)
ffmpeg -i raw-demo.mov -c:v libx264 -crf 23 -preset medium -vf scale=1920:1080 -c:a aac -b:a 128k output.mp4
```

Or use **HandBrake** (free GUI tool): https://handbrake.fr
- Preset: "Web" or "Fast 1080p30"
- Format: MP4
- Target size: 5-10 MB

### 2. Choose Hosting Option

#### **Option A: Local Files (Easiest, Free)**

```bash
# Copy your video to public folder
cp demo.mp4 public/videos/morning-market-brief.mp4
```

Then update `lib/data/projects.ts`:
```typescript
videoUrl: "/videos/morning-market-brief.mp4"
```

✅ **Pros:** Simple, no external dependencies
❌ **Cons:** Increases repo size, slower git operations

---

#### **Option B: Cloudflare R2 (Recommended, Free)**

Free tier: 10GB storage, 10GB/month bandwidth

**Setup:**
1. Sign up: https://dash.cloudflare.com/sign-up
2. Go to R2 Object Storage
3. Create bucket (name: `portfolio-videos`)
4. Upload your video
5. Enable public access
6. Copy the public URL

```typescript
videoUrl: "https://pub-xxxxx.r2.dev/morning-market-brief.mp4"
```

✅ **Pros:** Fast global CDN, generous free tier
❌ **Cons:** Requires Cloudflare account

---

#### **Option C: GitHub Releases (Unlimited, Free)**

Perfect for public repos.

**Setup:**
1. Go to your repo on GitHub
2. Releases → Create a new release
3. Tag: `videos-v1.0`
4. Attach video files
5. Publish release
6. Right-click video → Copy link address

```typescript
videoUrl: "https://github.com/16bitoni/dipmind/releases/download/videos-v1.0/demo.mp4"
```

✅ **Pros:** Unlimited free storage for public repos
❌ **Cons:** Not a proper CDN, slower than Cloudflare

---

#### **Option D: Vercel Blob Storage**

Free tier: 5GB storage, included with Vercel hosting

**Setup:**
```bash
npm install @vercel/blob
```

Upload via dashboard or API, then use the blob URL.

✅ **Pros:** Integrated with Vercel, fast
❌ **Cons:** 5GB limit on free tier

---

### 3. Add Video to Your Project

Edit `lib/data/projects.ts`:

```typescript
{
  id: "morning-market-brief",
  title: "Morning Market Brief",
  description: "Voice-enabled financial intelligence assistant...",
  tags: ["AI", "Voice", "Finance"],
  githubUrl: "https://github.com/16bitoni/morning-market-brief",
  liveUrl: "https://morning-market-brief.vercel.app",
  
  // Add these lines:
  videoUrl: "/videos/morning-market-brief.mp4",
  videoThumbnail: "/videos/morning-market-brief-thumb.jpg", // Optional
  
  featured: true,
}
```

### 4. (Optional) Create Custom Thumbnail

```bash
# Extract frame at 2 seconds
ffmpeg -i demo.mp4 -ss 00:00:02 -vframes 1 -q:v 2 thumbnail.jpg
```

If not provided, the video's first frame is used automatically.

---

## Video Player Features

Your custom video player includes:

- ▶️ **Play/Pause controls** - Click anywhere to toggle
- 🔇 **Mute/Unmute** - Bottom left button
- 🖼️ **Fullscreen** - Bottom right button
- 🔁 **Auto-loop** - Videos loop by default
- 🎨 **Hover controls** - Controls appear on hover (desktop)
- 📱 **Mobile optimized** - Touch-friendly controls
- 🚫 **No autoplay audio** - Videos start muted

---

## Best Practices

### Video Content
- **Show, don't tell** - Let the product speak for itself
- **15-45 seconds** - Short attention spans
- **Key features only** - Don't show everything
- **Start strong** - First 3 seconds matter most
- **No audio required** - Most users watch muted

### Technical Specs
- **Format:** MP4 (H.264) for compatibility
- **Resolution:** 1920x1080 or 1280x720
- **File size:** 5-10 MB max
- **Frame rate:** 30fps is plenty
- **Aspect ratio:** 16:9 (matches video player)

### Optimization
```bash
# Small file, good quality
ffmpeg -i input.mov \
  -c:v libx264 -crf 23 \
  -preset medium \
  -vf scale=1920:1080 \
  -movflags +faststart \
  -c:a aac -b:a 128k \
  output.mp4
```

The `-movflags +faststart` flag enables streaming (video starts playing before fully downloaded).

---

## My Recommendation

**For your use case (6 projects, ~30-60 sec demos each):**

1. **First project:** Test with local files (`public/videos/`) to see it working
2. **All projects:** Move to **Cloudflare R2** once confirmed
   - 10GB free = ~100 optimized videos
   - Global CDN = fast everywhere
   - Easy to manage via dashboard

**Why not GitHub Releases?** Fine for 1-2 videos, but:
- Not designed for video delivery
- Slower than proper CDN
- Clutters your releases section

**Why not Vercel Blob?** Great, but:
- 5GB limit = tight for multiple videos
- R2 gives you 10GB and is just as easy

---

## Example: Adding Your First Video

Let's add a demo for "Morning Market Brief":

```bash
# 1. Record and optimize
ffmpeg -i screen-recording.mov \
  -c:v libx264 -crf 23 \
  -preset medium \
  -vf scale=1920:1080 \
  -movflags +faststart \
  -t 30 \
  -c:a aac -b:a 128k \
  morning-market-brief.mp4

# 2. Test locally first
cp morning-market-brief.mp4 public/videos/

# 3. Update project
# Edit lib/data/projects.ts:
videoUrl: "/videos/morning-market-brief.mp4"

# 4. Test in browser
npm run dev
# Visit http://localhost:3000/#work

# 5. Once confirmed, upload to Cloudflare R2
# Then update videoUrl to R2 URL
# Delete from public/videos/
```

---

## Troubleshooting

**Video not showing?**
- Check file path is correct
- Verify video file exists
- Check browser console for errors
- Try opening video URL directly in browser

**Video too large?**
- Increase CRF value (23 → 28) for smaller file
- Reduce resolution (1920x1080 → 1280x720)
- Trim length (`-t 30` for 30 seconds)

**Video won't play?**
- Ensure format is MP4 (H.264)
- Check CORS headers (if using external hosting)
- Try different browser

**Performance issues?**
- Use CDN (Cloudflare R2) instead of local files
- Reduce video file size
- Enable lazy loading (already built-in)

---

## Questions?

- **Where is the VideoPlayer component?** `components/ui/video-player.tsx`
- **Where are projects defined?** `lib/data/projects.ts`
- **Where do local videos go?** `public/videos/`
- **Can I use YouTube embeds?** No, but you could extend VideoPlayer to support it
- **Can I use GIFs instead?** Yes, just use `videoUrl: "/videos/demo.gif"` but MP4 is much better quality/size

Need more help? Check `public/videos/README.md` for detailed hosting options.
