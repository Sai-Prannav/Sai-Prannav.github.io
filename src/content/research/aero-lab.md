---
lab: AERO Lab
pi: Dr. Adeel Khalid
role: Undergraduate Researcher, Counter-UAS Sensing
period: Sep 2025 to May 2026
order: 4
summary: Sensing and detection research for counter-drone systems. I owned the machine learning on the SciTech paper.
tags: [LiDAR, Thermal imaging, Deep learning]
papers:
  - title: Multi-Modal Intruder UAV Detection and Tracking Using LiDAR and Thermal Imagery with Deep Learning
    venue: AIAA SciTech Forum 2027, Orlando
    position: Co-author, 3rd of 6
    status: Accepted · to be presented Jan 2027
posters:
  - title: "Smarter Signals: Predicting the SNR Threshold for Accurate Direction-of-Arrival Detection in UAV Communication Systems"
    position: 3rd of 10 authors, first-listed student
    when: Fall 2025
    link: smarterSignals
  - title: Evaluation of LiDAR, RGB, and Thermal Sensors for UAV Detection
    position: 3rd of 6 authors
    when: Spring 2026
    link: uavSensors
  - title: AI Assisted Pedestrian Identification Using Drones
    position: 6th of 6 authors
    when: Fall 2025
    link: pedestrian
slot:
  title: Detection figure
  need: One figure from a poster or from the paper once it's cleared. See VISUALS_NEEDED.md.
---
The raw LiDAR data for the SciTech paper was unusable and unlabeled, so I wrote a data-processing application and a labeling application, then trained the deep-learning detection model. I'm not the presenter: Owais Ahmed is.

The signals poster predicts the SNR threshold for reliable direction-of-arrival estimation in UAV links, using MATLAB simulation and random matrix theory validated on LoRa, USRP and Raspberry Pi hardware. For the sensor poster, I ran controlled flight experiments comparing LiDAR, RGB and thermal detection across drone size, altitude and range.
