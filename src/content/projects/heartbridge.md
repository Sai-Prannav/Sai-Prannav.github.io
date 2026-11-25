---
title: HeartBridge
summary: A Telegram agent that checks in on heart-failure patients after discharge, with a nurse dashboard.
context: Built at HackGT 13 (Georgia Tech)
date: Sep 2026
order: 5
featured: true
kind: software
disciplines: [Software]
role: Built the core engine. Rebuilding it as v2, solo.
status: v2 in progress
statusWaiting: true
stack: [Node.js, Express, React, Telegram, LLM, Rule-based triage]
repo: heartbridge
widgets: [triage]
card:
  kind: video
  src: /media/heartbridge/heartbridge-demo.mp4
  webm: /media/heartbridge/heartbridge-demo.webm
  poster: /media/heartbridge/heartbridge-dashboard.png
  alt: Screen recording of the HeartBridge demo
  caption: Demo recording. Every patient shown is made up.
specs:
  - { k: Triage, v: 'Deterministic rules: GREEN / YELLOW / RED' }
  - { k: LLM's job, v: 'Language only, never the decision' }
  - { k: Backend tests, v: '1,207 passing (1,213 total, 6 todo)' }
  - { k: Languages, v: '5 (English, Spanish, Vietnamese, Hindi, Chinese)' }
  - { k: My evaluation, v: 'Rules alone caught 40.8% of out-of-design emergencies (169/414); 53.9% with a local model' }
  - { k: Status, v: 'Hackathon prototype, not clinical software' }
figures:
  - { kind: image, src: /media/heartbridge/heartbridge-dashboard.png, alt: The nurse worklist with a red alert and demo patients, caption: 'Nurse worklist (demo data).' }
  - { kind: image, src: /media/heartbridge/heartbridge-conversation.png, alt: A patient conversation in Spanish with English translations, caption: 'Patient check-in in Spanish, with English underneath (demo data).' }
  - { kind: image, src: /media/heartbridge/heartbridge-alert.png, alt: An alert on the nurse dashboard, caption: 'An alert with the reasons it fired (demo data).' }
  - { kind: image, src: /media/heartbridge/heartbridge-patient.png, alt: A patient detail view, caption: 'Patient detail (demo data).' }
  - { kind: image, src: /media/heartbridge/heartbridge-weight-trend.png, alt: A weight trend chart, caption: 'Weight trend (demo data).' }
  - { kind: image, src: /media/heartbridge/heartbridge-risk-reasons.png, alt: Risk reasons listed for a patient, caption: 'Risk reasons (demo data).' }
---
## The problem

Heart-failure patients mostly look after themselves between discharge and the next clinic visit. That gap is where I think deterioration gets missed, and it's the one I wanted to cover.

## The design call

I made the triage rules, not a model. Weight change, symptoms and red flags go into a pure function, and a tier comes out with a reason for every flag. The same input always gives the same answer, and I can test every rule. The LLM words the conversation, but it can't touch the decision.

## What I built

I built the core engine at HackGT 13 at Georgia Tech in September 2026. It's got Telegram check-ins, the triage rules, and a nurse dashboard with live alerts. It doesn't stop at English: it also speaks, Spanish, Vietnamese, Hindi and Chinese.

## What testing showed

I ran an independent evaluation: 873 synthetic messages in 5 languages, with emergencies phrased in ways the rules weren't designed for. The rules alone caught 40.8% (169 of 414), and 53.9% with a local model added. The test set is AI-generated and no clinician reviewed it, so treat it as a stress test, not a clinical result. That gap is why I'm doing v2, and it's what I'm testing against.

## v2

I'm rebuilding it solo. I'm adding a test for every triage rule, proper handling of missed check-ins, and a clinician review of the thresholds.
