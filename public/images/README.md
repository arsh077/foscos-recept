# Images for FSSAI Receipt Generator

This folder contains the images used in the PDF receipts.

## Required Images

### 1. **fssai-logo.png**
- **Purpose**: FSSAI (Food Safety and Standards Authority of India) official logo
- **Position**: Top-left corner of the receipt
- **Recommended Size**: 200px × 150px (or similar aspect ratio)
- **Format**: PNG with transparent background preferred
- **Where to get**: Download the official FSSAI logo from [FSSAI website](https://foscos.fssai.gov.in)

### 2. **state-emblem.png** 
- **Purpose**: State Government emblem (changes based on state)
- **Position**: Top-right corner of the receipt
- **Recommended Size**: 200px × 200px (or square aspect ratio)
- **Format**: PNG with transparent background preferred
- **Where to get**: Download from respective state government's official website
- **Note**: You can create different files like `haryana-emblem.png`, `delhi-emblem.png`, etc. for different states

## How to Update Images

1. **Download the official logos** from government websites
2. **Rename them** to `fssai-logo.png` and `state-emblem.png`
3. **Place them** in this `public/images/` folder
4. **Refresh the browser** to see the updated images in your receipts

## Current Status

✅ Folder structure created
⚠️ **ACTION REQUIRED**: Please add the actual image files:
   - `fssai-logo.png`
   - `state-emblem.png`

## Technical Details

- Images are loaded from `/images/` path
- The code will automatically display these images in all generated PDFs
- If images are not found, placeholder text will be shown
- Supported formats: PNG, JPG, JPEG, WebP
