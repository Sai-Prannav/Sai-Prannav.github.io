---
title: StockSnap
summary: An inventory app that counts the products in a photo of a shelf.
context: Built at a hackathon · Mar to Apr 2026
date: Apr 2026
order: 2
featured: true
stack: [FastAPI, React, TypeScript, SQLite, YOLO11]
repo: stocksnap
slot:
  title: Detection GIF
  need: A short capture of a shelf photo going in and the counted boxes coming out. See VISUALS_NEEDED.md.
---
## Problem

Counting stock by hand is slow, and plenty of small shops still do it with a clipboard. I figured the photo of the shelf already holds the answer.

## What I built

A full-stack inventory app. You give it a photo of a shelf and it counts the products it can see. I built it at a hackathon.

## How it works

The React and TypeScript frontend sends the photo to a FastAPI backend. A YOLO11 object-detection model finds the products in the image, and the counts are stored in SQLite and shown back next to the photo.

## Stack

FastAPI, React, TypeScript, SQLite and YOLO11.

## What I'd do next

I'd train on real shelf photos from more than one store, since the counts are only as good as the training images. I'd also add a way to fix a count by hand and feed that back into training.
