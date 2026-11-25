---
title: Window heat loss from infrared images
summary: Estimating heat loss and gain through windows from thermal images. Accepted to TFEC 2027.
context: Gurupatham Lab, KSU
date: Sep 2026 to present
order: 4
featured: true
kind: research
disciplines: [Research, Software]
role: Developed and tested the algorithms; collected the data.
status: Accepted, TFEC 2027
stack: [Infrared thermography, Heat transfer, Machine learning]
withheld: true
withheldNote:
  title: Figures after TFEC 2027
  sub: Shown once the paper is presented, March 2027
  caption: The paper's figures stay private until it's presented at TFEC 2027 (Dallas, March 2027).
proof:
  - { label: 'TFEC 2027 (paper accepted)', href: 'https://www.astfe.org/tfec2027/' }
did:
  - I helped develop the algorithms.
  - I helped test them.
  - I collected the data.
team:
  - Kinza Molvi and Dr. Gurupatham are the other two authors. I'm co-author, 2nd of 3.
specs:
  - { k: Measurement, v: 'Infrared thermography of windows' }
  - { k: ML part, v: 'Proposed segmentation workflow (Mask R-CNN / Detectron2)' }
  - { k: Venue, v: 'TFEC 2027, 12th Thermal and Fluids Engineering Conference (ASTFE), Dallas' }
  - { k: Authorship, v: 'Co-author, 2nd of 3' }
credits: Gurupatham Lab, Kennesaw State University. PI Dr. Sathish Kumar Gurupatham.
---
## The problem

An infrared camera shows a window leaking heat. Turning that picture into watts is the hard part, and it's what I worked on.

## The approach

The paper pairs a U-value sensitivity analysis with a proposed segmentation workflow for finding the window in the image. I helped develop and test the algorithms, and I collected the data.

## Where it stands

It's accepted to TFEC 2027 in Dallas, March. I'd call it a framework paper: the ML step is proposed, and we don't claim trained-model results. The lab's second accepted paper applies ML to estimating tumor blood perfusion during hyperthermia.
