---
title: Thrust-test rig for a bistable fish robot
summary: A 3D-printed rig that measures how hard a bistable fish robot pushes through water.
context: DynaGence Lab, KSU
date: May 2026 to present
order: 1
featured: true
kind: hardware
disciplines: [Hardware, Research]
role: Print-vs-buy analysis, ~15 printed parts, assembly, load-cell wiring.
status: Readout in progress
statusWaiting: true
stack: [3D printing, Aluminum profile, Load cells, HX711, Arduino]
schematic: true
card:
  kind: image
  src: /media/cards/dynagence-card.webp
  alt: A bar load cell clamped in an orange 3D-printed mount, with its four wires running to an HX711 amplifier board
  caption: 'A bar load cell in a 3D-printed mount, wired to an HX711 amplifier board. Photo of the bench; cropped and color-graded.'
proof: # verified public links only
  - { label: "Dr. Shougat's lab site", href: 'https://sites.google.com/site/mdrafeulshougat' }
figures:
  - { kind: image, fit: cover, pos: '50% 6%', src: /media/cards/dynagence-loadcell-mount-g.webp, alt: 'A bar load cell bolted into an orange 3D-printed mount on the aluminum-profile frame, wired to an HX711 amplifier on a breadboard', caption: 'The load cell in its 3D-printed mount on the rig frame, wired to an HX711 amplifier. Readout in progress.' }
  - { kind: image, fit: cover, src: /media/cards/dynagence-rig-build-g.webp, alt: 'Mid-build: aluminum-profile frame over the tank, with orange 3D-printed brackets laid out on the bench', caption: 'Mid-build: the frame going up, with the 3D-printed brackets laid out on the bench.' }
  - { kind: image, fit: cover, src: /media/cards/dynagence-rig-assembled-g.webp, alt: 'The v1 rig assembled: aluminum-profile frame and gantry over a glass aquarium tank', caption: 'The v1 rig, assembled. It has since been converted for the load-cell setup.' }
widgets: [bistable]
did:
  - I ran the print-versus-buy analysis for the rig parts.
  - I fabricated and assembled the rig, about 15 3D-printed parts, and finished it in September 2026.
  - I'm wiring the load cells, HX711 amplifiers and Arduino into the measurement chain. That's what I'm on now.
team:
  - The lab designs the fish robot and its bistable drive.
  - A lab member coordinating the fish-tank setup gave me the load-cell job.
specs:
  - { k: Subject, v: 'Carangiform fish robot, bistable "hair-clip" drive' }
  - { k: Fabrication, v: '~15 3D-printed parts' }
  - { k: Frame, v: '2020 aluminum profile' }
  - { k: Sensing, v: '2 load cells into HX711 amplifiers' }
  - { k: Controller, v: Arduino }
  - { k: Status, v: 'v1 rig done Sept 2026. Load-cell readout in progress.' }
credits: DynaGence Lab, Kennesaw State University. PI Dr. Md Raf E Ul Shougat.
---
## The problem

Thrust is a small force in a wet, fiddly setup. To measure it, I needed a fixture that holds a swimming robot still and a sensor chain that can read what it pulls.

## The rig

I ran the print-versus-buy analysis, then printed, built and assembled the mount and rig parts myself, about 15 parts in all. The robot hangs from a 3D-printed mount in a tank, and it pulls against a rod.

## The measurement chain

Two load cells turn that pull into a tiny voltage. HX711 amplifiers boost and digitize it, and an Arduino reads it out. Hover or tap a part in the drawing and you'll see what it does. That's the chain I'm wiring up now.

## Where it stands

Load-cell readout: in progress, servo side next. The v1 rig's been converted into this setup. The drawing shows the signal chain, and the photos below are the real bench.
