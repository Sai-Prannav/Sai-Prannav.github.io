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
card:
  kind: image
  src: /media/cards/tfec-card.webp
  alt: Two exterior FLIR infrared views of a window, shown side by side on a neutral ground
  caption: 'Both panels of Fig. 1 from the paper: exterior FLIR thermal views of a window. Qualitative only; panels are scaled, not altered.'
proof:
  - { label: 'TFEC 2027 (paper accepted)', href: 'https://www.astfe.org/tfec2027/' }
figures:
  - { kind: image, ratio: '1600 / 614', src: /media/tfec/tfec-fig1-full-with-caption.webp, alt: 'Figure 1 as printed in the paper: two FLIR thermal views of a window, with the paper''s caption', caption: 'Fig. 1 as printed in the paper, with its own caption. Representative exterior FLIR screenshots, used for qualitative interpretation only. TFEC 2027 paper (preliminary framework).' }
did:
  - I developed and tested the algorithms.
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

The paper pairs a U-value sensitivity analysis with a proposed segmentation workflow for finding the window in the image. I developed and tested the algorithms, and I collected the data.

## Where it stands

It's accepted to TFEC 2027 in Dallas, March. I'd call it a framework paper: the ML step is proposed, and we don't claim trained-model results. The lab's second accepted paper applies ML to estimating tumor blood perfusion during hyperthermia.
