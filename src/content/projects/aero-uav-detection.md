---
title: LiDAR and thermal UAV detection
summary: A deep-learning detector for intruder drones, built on LiDAR and thermal imagery. Accepted to AIAA SciTech 2027.
context: AERO Lab, KSU
date: Sep 2025 to May 2026
order: 3
featured: true
kind: research
disciplines: [Research, Software]
role: "ML pipeline: LiDAR data processing, labeling tool, trained detection model."
status: Accepted, SciTech 2027
stack: [LiDAR, Thermal imaging, Sensor fusion, Deep learning, Python]
posters: [uavSensors, smarterSignals, pedestrian]
card:
  kind: image
  src: /media/cards/aero-card.webp
  alt: Left, a quadcopter drone in flight against clouds. Right, a false-color thermal frame of a drone in the sky with a detection box labeled aircraft 0.75
  caption: 'Left, a flight-test photo (cropped, color-graded). Right, a thermal frame with the detector''s "aircraft 0.75" box, from the poster "Evaluation of LiDAR, RGB, and Thermal Sensors for UAV Detection" (KSU Undergraduate Symposium, Spring 2026). The thermal frame is cropped and scaled only. I''m a co-author.'
proof: [] # SciTech: add the public program listing here once it exists
did:
  - I co-developed the data-processing and labeling applications for the raw LiDAR data with Daniel Byers. The commits are on his account.
  - I hand-labeled 530 LiDAR clusters with the labeling app (307 UAV, 223 non-UAV).
  - I trained the detector.
  - I ran the controlled flight experiments for the sensor poster, comparing LiDAR, RGB and thermal sensing across drone size, altitude and range.
team:
  - Other authors ran the wider project, and I'm co-author, 3rd of 6.
  - Owais Ahmed's the presenting author, so I won't be the one at the podium.
specs:
  - { k: Task, v: 'Detecting and tracking intruder UAVs' }
  - { k: Sensors, v: 'LiDAR and thermal imagery' }
  - { k: Method, v: 'Deep-learning detection model' }
  - { k: Labeled data, v: '530 LiDAR clusters, hand-labeled (307 UAV / 223 non-UAV)' }
  - { k: Venue, v: 'AIAA SciTech Forum 2027, Orlando' }
  - { k: Authorship, v: 'Co-author, 3rd of 6' }
credits: AERO Lab, Kennesaw State University. PI Dr. Adeel Khalid.
figures:
  - { kind: image, src: /media/intruas/intruas-clusters.png, alt: 'IntrUAS evaluation view: raw LiDAR points on the left, clustered points with predicted UAV boxes on the right, and a predictions panel', caption: 'IntrUAS, the LiDAR labeling and evaluation tool from the SciTech work. Raw point cloud on the left, clusters and predictions on the right. The red box is a real false positive.' }
  - { kind: image, src: /media/posters/uav-sensors-lidar-point-cloud.png, alt: 'A LiDAR point cloud rendered as black rings and points on white, with a small red marker for the drone', caption: 'A LiDAR scan with the drone marked in red. From the poster "Evaluation of LiDAR, RGB, and Thermal Sensors for UAV Detection" (Spring 2026).' }
  - { kind: image, fit: cover, pos: '50% 62%', src: /media/cards/aero-drone-flight-g.webp, alt: A quadcopter drone in flight against a blue sky with clouds, caption: 'The quadcopter in a flight test, AERO Lab. Photo; cropped and color-graded.' }
---
## The problem

The raw LiDAR data was unusable as recorded, and it had no labels. Dead end. I couldn't train a detector on that, so I fixed the data first, and that's where my part started.

## What I built

Daniel Byers and I built the tools together. The data-processing app turns the raw LiDAR into something a model can read. The labeling app lets us annotate it, and I hand-labeled 530 clusters with it. Then I trained the detection model on the result.

## The sensing side

I also ran controlled flight experiments comparing LiDAR, RGB and thermal across drone size, altitude and range. They're behind the sensor poster.

## Where it stands

It's accepted to AIAA SciTech Forum 2027 in Orlando this January, and Owais Ahmed presents it. I'll post the results here once he's given the talk.
