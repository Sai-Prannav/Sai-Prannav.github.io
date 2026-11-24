---
title: HeartBridge
summary: A Telegram agent for heart-failure patients after they leave the hospital.
context: Built at HackGT 13 (Georgia Tech)
date: Sep 2026
order: 1
featured: true
stack: [Python, Telegram, LLM, Rule-based triage]
repo: heartbridge
status: v2 in progress
slot:
  title: Telegram screen recording
  need: A short recording of a v2 conversation using fake patient data. See VISUALS_NEEDED.md.
---
## Problem

Heart-failure patients go home from the hospital and mostly look after themselves until the next clinic visit. That gap is where problems get missed, and I think a tool that talks to patients there has to be careful about what it says.

## What I built

A Telegram agent for patients after discharge. I built the core engine at HackGT 13 at Georgia Tech. A v2 rebuild is in progress.

## How it works

The triage is deterministic. Fixed rules take the patient's situation and produce a decision, so the same input always gives the same answer and you can read exactly why. The language model is used only for language, which means wording the conversation. It never decides how urgent something is.

I split it this way because I don't think a model that's usually right is good enough for a medical decision. Rules I can test.

## Stack

Python, Telegram, an LLM for the language layer, and a rules module for triage.

## What I'd do next

I'd write a test case for every triage rule, handle missed check-ins properly, and get a clinician to review the rules. That's the plan for v2.
