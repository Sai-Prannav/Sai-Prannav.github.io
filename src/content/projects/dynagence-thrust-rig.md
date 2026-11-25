---
title: Thrust-test rig for a bistable fish robot
summary: A 3D-printed rig that measures how hard a bistable fish robot pushes through water.
context: DynaGence Lab, KSU
date: May 2026 to present
order: 1
featured: true
kind: hardware
disciplines: [Hardware, Research]
role: Print-vs-buy analysis, fabrication, assembly, load-cell wiring.
status: Load-cell readout in progress
statusWaiting: true
stack: [3D printing, Aluminum profile, Load cells, HX711, Arduino]
schematic: true
figures:
  - { kind: image, src: /media/photos/dynagence-loadcell-mount.jpg, alt: 'A bar load cell bolted into an orange 3D-printed mount on the aluminum-profile frame, wired to an HX711 amplifier on a breadboard', caption: 'Load cell in a 3D-printed mount on the rig frame, wired to an HX711 amplifier. Readout in progress.' }
  - { kind: image, src: /media/photos/dynagence-rig-assembled.jpg, alt: 'The v1 rig assembled: aluminum-profile frame and gantry over a glass aquarium tank', caption: 'The v1 rig, assembled. It has since been converted for the load-cell setup.' }
  - { kind: image, src: /media/photos/dynagence-hx711-arduino.jpg, alt: 'Top-down view of load-cell wires running into two HX711 amplifier boards on a breadboard, connected to an Arduino Uno', caption: 'The signal chain on the bench: load-cell leads into HX711 amplifiers, then the Arduino.' }
  - { kind: image, src: /media/photos/dynagence-rig-build.jpg, alt: 'Mid-build: aluminum-profile frame over the tank, with orange 3D-printed brackets laid out on the bench', caption: 'Mid-build: the frame going up, with the 3D-printed brackets laid out.' }
widgets: [bistable]
did:
  - I ran the print-versus-buy analysis for the rig parts.
  - I fabricated and assembled the 3D-printed rig, and I finished it in September 2026.
  - I'm wiring the load cells, HX711 amplifiers and Arduino into the measurement chain. That's what I'm on now.
team:
  - The lab designs the fish robot and its bistable drive.
  - A lab member coordinating the fish-tank setup gave me the load-cell job.
specs:
  - { k: Subject, v: 'Carangiform fish robot, bistable "hair-clip" drive' }
  - { k: Fabrication, v: '3D-printed mount and rig parts' }
  - { k: Frame, v: '2020 aluminum profile' }
  - { k: Sensing, v: 'Load cells into HX711 amplifiers' }
  - { k: Controller, v: Arduino }
  - { k: Status, v: 'v1 rig done Sept 2026. Load-cell readout in progress.' }
credits: DynaGence Lab, Kennesaw State University. PI Dr. Md Raf E Ul Shougat.
---
## The problem

Thrust is a small force in a wet, fiddly setup. To measure it, I needed a fixture that holds a swimming robot still and a sensor chain that can read what it pulls.

## The rig

I ran the print-versus-buy analysis, then printed, built and assembled the mount and rig parts myself. The robot hangs from a 3D-printed mount in a tank, and it pulls against a rod.

## The measurement chain

Two load cells turn that pull into a tiny voltage. HX711 amplifiers boost and digitize it, and an Arduino reads it out. Hover or tap a part in the drawing and you'll see what it does. That's the chain I'm wiring up now.

## Where it stands

Load-cell readout: in progress, servo side next. The v1 rig's been converted into this setup, so the figure's a drawing. I'll swap in a bench photo as soon as I've got one.
