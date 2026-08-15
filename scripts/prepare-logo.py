from PIL import Image
import os

src = r"C:\Users\ASUS\.cursor\projects\c-Users-ASUS-Desktop-rrdesign\assets\c__Users_ASUS_AppData_Roaming_Cursor_User_workspaceStorage_174c820357edc1a83f18d87204d4c99e_images_ChatGPT_Image_Aug_15__2026__02_44_13_PM-958781bd-30c6-4201-ad0a-28db16bf2e5a.png"
im = Image.open(src).convert("RGBA")
pixels = im.load()
w, h = im.size

min_x, min_y, max_x, max_y = w, h, 0, 0
for y in range(h):
    for x in range(w):
        r, g, b, _a = pixels[x, y]
        if r < 245 or g < 245 or b < 245:
            if x < min_x:
                min_x = x
            if y < min_y:
                min_y = y
            if x > max_x:
                max_x = x
            if y > max_y:
                max_y = y

print("bbox", min_x, min_y, max_x, max_y, "size", max_x - min_x + 1, max_y - min_y + 1)

bw = max_x - min_x + 1
bh = max_y - min_y + 1
side = max(bw, bh)
pad = int(side * 0.12)
canvas = side + pad * 2

out = Image.new("RGBA", (canvas, canvas), (0, 0, 0, 0))
ox = (canvas - bw) // 2
oy = (canvas - bh) // 2
cropped = im.crop((min_x, min_y, max_x + 1, max_y + 1))
cp = cropped.load()
cw, ch = cropped.size
for y in range(ch):
    for x in range(cw):
        r, g, b, _a = cp[x, y]
        lum = (r + g + b) / 3
        alpha = int(max(0, min(255, (245 - lum) * (255 / 245))))
        if alpha < 8:
            continue
        ink = min(r, g, b)
        out.putpixel((ox + x, oy + y), (ink, ink, ink, alpha))

root = r"c:\Users\ASUS\Desktop\rrdesign"
public = os.path.join(root, "public")
app = os.path.join(root, "app")
os.makedirs(public, exist_ok=True)

logo_path = os.path.join(public, "logo.png")
out.resize((1024, 1024), Image.Resampling.LANCZOS).save(logo_path, "PNG", optimize=True)
print("saved", logo_path, os.path.getsize(logo_path))

icon = Image.new("RGBA", (512, 512), (255, 255, 255, 255))
mark = out.resize((512, 512), Image.Resampling.LANCZOS)
icon.alpha_composite(mark)
icon_path = os.path.join(app, "icon.png")
icon.save(icon_path, "PNG", optimize=True)
print("saved", icon_path)

apple = icon.resize((180, 180), Image.Resampling.LANCZOS).convert("RGB")
apple_path = os.path.join(app, "apple-icon.png")
apple.save(apple_path, "PNG", optimize=True)
print("saved", apple_path)
print("done")
