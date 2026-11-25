---
title: StockSnap
summary: An inventory app that detects and counts items in a shelf photo with a pretrained YOLO11 model.
context: Built at a hackathon
date: Mar to Apr 2026
order: 6
featured: true
kind: software
disciplines: [Software]
role: Built it end to end, from YOLO11 detection to the React frontend.
status: Hackathon project
statusWaiting: true
stack: [YOLO11, FastAPI, React, TypeScript, SQLite]
repo: stocksnap
widgets: [stocksnap]
badge: { n: 53, label: detected }
card:
  kind: video
  src: /media/stocksnap/stocksnap-demo.mp4
  webm: /media/stocksnap/stocksnap-demo.webm
  poster: /media/stocksnap/stocksnap-hero.png
  alt: Screen recording of a shelf photo being uploaded and counted by StockSnap
  caption: Demo recording. Upload a shelf photo, get the boxes and the count.
specs:
  - { k: Detector, v: YOLO11 }
  - { k: Backend, v: 'FastAPI, SQLite' }
  - { k: API, v: '17 REST endpoints, 3 tables (stores, products, scans)' }
  - { k: Frontend, v: 'React, TypeScript' }
  - { k: Demo result, v: '53 detections at 75.0% mean confidence' }
figures:
  - { kind: image, src: /media/stocksnap/stocksnap-dashboard.png, alt: The StockSnap dashboard with stores, products and scans, caption: 'Dashboard (demo data).' }
  - { kind: image, src: /media/stocksnap/stocksnap-upload-flow.png, alt: The upload screen with a shelf photo selected, caption: 'Upload flow.' }
---
## The problem

Small shops still count stock by hand. I figured the photo of the shelf already holds the answer, so I built something that reads it.

## How it works

My React and TypeScript frontend sends the photo to a FastAPI backend. YOLO11 finds the products and SQLite stores the counts. Then the app draws the boxes back over the photo, and that's the result you can drag across above.

## What's next

I'd train on shelf photos from more than one store. I'd also let a user correct a count and feed the fix back into training, because that's how I'd fix the false boxes.
