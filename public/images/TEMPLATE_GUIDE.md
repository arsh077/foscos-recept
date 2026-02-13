# Image Template Guide

## Quick Links to Download Official Logos

### FSSAI Logo
1. Visit: https://foscos.fssai.gov.in
2. Or search Google Images: "FSSAI logo official PNG"
3. Download the orange and green FSSAI logo
4. Save as: `fssai-logo.png`

### State Government Emblems

#### Haryana
- Search: "Haryana Government Emblem official logo PNG"
- Or visit: https://haryana.gov.in
- Save as: `state-emblem.png`

#### Other States
Replace "Haryana" with your state name:
- Delhi: "Delhi Government Emblem official logo PNG"
- Punjab: "Punjab Government Emblem official logo PNG"
- Maharashtra: "Maharashtra Government Emblem official logo PNG"

## Image Specifications

| Property | Recommended Value |
|----------|------------------|
| Format | PNG (preferred), JPG also works |
| Size | 200x200px or larger |
| Background | Transparent (for PNG) |
| Quality | High resolution for printing |
| File Size | Under 500KB for fast loading |

## File Naming

**Important**: File names are case-sensitive and must match exactly!

✅ Correct:
- `fssai-logo.png`
- `state-emblem.png`

❌ Wrong:
- `FSSAI-Logo.png`
- `fssai_logo.png`
- `state emblem.png`

## Where to Place Files

Copy your images to this folder:
```
c:\Users\HELLO\Downloads\foscos-receipt-generator\public\images\
```

Final structure should look like:
```
public/
└── images/
    ├── README.md
    ├── fssai-logo.png      ← Your FSSAI logo here
    └── state-emblem.png    ← Your state emblem here
```

## Testing

1. Place the images in the folder
2. If dev server is running: Refresh your browser
3. If not running: Start dev server with `npm run dev`
4. You should see the images in the receipt preview!
5. Click "Print / Save as PDF" to verify they appear in the PDF

## Troubleshooting

- **Images not showing?** 
  - Check file names exactly match (case-sensitive)
  - Verify files are in the correct folder
  - Refresh your browser
  
- **Blurry in PDF?**
  - Use higher resolution images (500px × 500px or larger)
  
- **CSS placeholder appears?**
  - Image file is missing or named incorrectly
  - Check the browser console for errors (F12)
