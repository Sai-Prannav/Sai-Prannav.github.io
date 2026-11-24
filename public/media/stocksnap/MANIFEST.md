# stocksnap media manifest

Captured 2026-11-24 by running the app locally (Playwright Chromium, 1440x900 @2x for stills). All data is synthetic/demo.

| File | Dimensions | Size | Shows |
|---|---|---|---|
| `stocksnap-dashboard.png` | 2880x1800 | 65 KB | Dashboard overview: stat cards, quick actions, recent scans table |
| `stocksnap-dashboard.webp` | 2880x1800 | 70 KB | Dashboard overview: stat cards, quick actions, recent scans table |
| `stocksnap-demo.gif` | 960x600 | 2551 KB | Clip (about 14 s): fill upload form, Analyze, result, Show Boxes, then Timeline |
| `stocksnap-demo.mp4` | 1280x800 | 517 KB | Clip (about 14 s): fill upload form, Analyze, result, Show Boxes, then Timeline |
| `stocksnap-demo.webm` | 1280x800 | 495 KB | Clip (about 14 s): fill upload form, Analyze, result, Show Boxes, then Timeline |
| `stocksnap-detection-viewport.png` | 2880x1800 | 3892 KB | Upload page, full app chrome, result card with boxes showing |
| `stocksnap-detection-viewport.webp` | 2880x1800 | 369 KB | Upload page, full app chrome, result card with boxes showing |
| `stocksnap-hero.png` | 1728x1626 | 3753 KB | HERO. Upload result: count 53, confidence 75.0%, boxes 53, with real YOLO11 bounding boxes drawn on the shelf photo (card crop) |
| `stocksnap-hero.webp` | 1728x1626 | 370 KB | HERO. Upload result: count 53, confidence 75.0%, boxes 53, with real YOLO11 bounding boxes drawn on the shelf photo (card crop) |
| `stocksnap-scans.png` | 2880x1800 | 92 KB | Scans list page |
| `stocksnap-scans.webp` | 2880x1800 | 82 KB | Scans list page |
| `stocksnap-timeline.png` | 2880x1800 | 73 KB | Timeline page: stats and inventory-count line chart over 5 scans |
| `stocksnap-timeline.webp` | 2880x1800 | 63 KB | Timeline page: stats and inventory-count line chart over 5 scans |
| `stocksnap-upload-empty.png` | 2880x1800 | 48 KB | Upload page, empty form |
| `stocksnap-upload-empty.webp` | 2880x1800 | 41 KB | Upload page, empty form |
| `stocksnap-upload-flow.png` | 2880x1800 | 688 KB | Upload page with shelf photo previewed, store and product selected, before Analyze |
| `stocksnap-upload-flow.webp` | 2880x1800 | 103 KB | Upload page with shelf photo previewed, store and product selected, before Analyze |

## Notes and licensing
- Shelf photo: "Soft drink shelf.JPG" by User:SMC, Wikimedia Commons, marked Public domain. https://commons.wikimedia.org/wiki/File:Soft_drink_shelf.JPG
- Real YOLO11n (COCO, ultralytics) detections, nothing faked. 52 of the 53 boxes are `bottle`; one is a spurious large `refrigerator` box (a genuine model artifact of the pretrained COCO model, visible as the big rectangle across the right half).
- The repo's own test photo (can shelf, source unrecorded) detected poorly (20 boxes, stacked cans merged) and was not used.
- Timeline history: 4 earlier scans are different crops of the same photo, backdated in the demo SQLite DB (Nov 10/14/17/21); the fifth is the live upload in the clip. This is synthetic demo history, not real stock movement.
- Two display shims were applied in the browser only (Playwright request routing, no repo files changed): the frontend hardcodes `localhost:8000` for images and expects `store_name`/`product_name` on scans, while the backend returns nested `store`/`product`. Same data, mapped.
- The Timeline green line (confidence plotted on the count axis) is how the app currently renders it.
- The clip is H.264 MP4 (muted), WebM, and a 960 px, 12 fps GIF.
