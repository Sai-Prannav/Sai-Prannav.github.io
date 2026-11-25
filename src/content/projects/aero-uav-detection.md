---
title: LiDAR and thermal UAV detection
summary: A deep-learning detector for intruder drones, built on LiDAR and thermal imagery. Accepted to AIAA SciTech 2027.
context: AERO Lab, KSU
date: Sep 2025 to May 2026
order: 3
featured: true
kind: research
disciplines: [Research, Software]
role: "Owned the ML: data-processing app, labeling app, detection model."
status: Accepted, SciTech 2027
stack: [LiDAR, Thermal imaging, Sensor fusion, Deep learning, Python]
posters: [uavSensors, smarterSignals, pedestrian]
card:
  kind: image
  src: /media/posters/aero-uav-figure.png
  alt: Thermal camera frame of a drone in the sky with a detection box labeled aircraft 0.75
  caption: 'Thermal frame with a detection, from the poster "Evaluation of LiDAR, RGB, and Thermal Sensors for UAV Detection" (KSU Symposium of Student Scholars, Spring 2026). I''m a co-author.'
did:
  - I built a data-processing application for the raw LiDAR data.
  - I built a data-labeling application.
  - I trained the detector.
  - I ran the controlled flight experiments for the sensor poster, comparing LiDAR, RGB and thermal sensing across drone size, altitude and range.
team:
  - Other authors ran the wider project, and I'm co-author, 3rd of 6.
  - Owais Ahmed's the presenting author, so I won't be the one at the podium.
specs:
  - { k: Task, v: 'Detecting and tracking intruder UAVs' }
  - { k: Sensors, v: 'LiDAR and thermal imagery' }
  - { k: Method, v: 'Deep-learning detection model' }
  - { k: Venue, v: 'AIAA SciTech Forum 2027, Orlando' }
  - { k: Authorship, v: 'Co-author, 3rd of 6' }
credits: AERO Lab, Kennesaw State University. PI Dr. Adeel Khalid.
figures:
  - { kind: image, src: /media/photos/aero-drone-flight.jpg, alt: A quadcopter drone in flight against a blue sky with clouds, caption: 'Flight testing, AERO Lab.' }
  - { kind: image, src: /media/photos/aero-drone-pad.jpg, alt: A quadcopter drone on a concrete pad before a test flight, caption: 'On the pad before a controlled test flight.' }
---
## The problem

The raw LiDAR data was unusable as recorded, and it had no labels. Dead end. I couldn't train a detector on that, so I fixed the data first, and that's where my part started.

## What I built

I built three tools. My data-processing app turns the raw LiDAR into something a model can read. My labeling app lets us annotate it. Then I trained the detection model on the result.

## The sensing side

I also ran controlled flight experiments comparing LiDAR, RGB and thermal across drone size, altitude and range. They're behind the sensor poster.

## Where it stands

It's accepted to AIAA SciTech Forum 2027 in Orlando this January, and Owais Ahmed presents it. I'll post the results here once he's given the talk.
