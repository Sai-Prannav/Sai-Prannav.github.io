# heartbridge media manifest

Captured 2026-11-24 by running the app locally (Playwright Chromium, 1440x900 @2x for stills). All data is synthetic/demo.

| File | Dimensions | Size | Shows |
|---|---|---|---|
| `heartbridge-alert.png` | 1976x1090 | 63 KB | YELLOW alert card for Maria Garcia: warning signs, vitals strip, standing-order protocol panel (labelled DEMO PROTOCOL) |
| `heartbridge-alert.webp` | 1976x1090 | 111 KB | YELLOW alert card for Maria Garcia: warning signs, vitals strip, standing-order protocol panel (labelled DEMO PROTOCOL) |
| `heartbridge-conversation.png` | 832x1308 | 49 KB | Patient conversation log (Spanish phone simulator with English gloss) |
| `heartbridge-conversation.webp` | 832x1308 | 67 KB | Patient conversation log (Spanish phone simulator with English gloss) |
| `heartbridge-dashboard.png` | 2880x1800 | 145 KB | Nurse worklist: RED (Thanh) and YELLOW (Maria) alerts at the top of the worklist, patient list with tier pills and risk badges, 911 banner |
| `heartbridge-dashboard.webp` | 2880x1800 | 204 KB | Nurse worklist: RED (Thanh) and YELLOW (Maria) alerts at the top of the worklist, patient list with tier pills and risk badges, 911 banner |
| `heartbridge-demo.gif` | 960x540 | 2077 KB | Clip (about 12 s): worklist empty, then scenario escalates Thanh to RED (911 banner and toast) live |
| `heartbridge-demo.mp4` | 1280x720 | 174 KB | Clip (about 12 s): worklist empty, then scenario escalates Thanh to RED (911 banner and toast) live |
| `heartbridge-demo.webm` | 1280x720 | 259 KB | Clip (about 12 s): worklist empty, then scenario escalates Thanh to RED (911 banner and toast) live |
| `heartbridge-patient.png` | 2880x1800 | 136 KB | Full patient page viewport: risk tier explanation and conversation log |
| `heartbridge-patient.webp` | 2880x1800 | 181 KB | Full patient page viewport: risk tier explanation and conversation log |
| `heartbridge-risk-reasons.png` | 1856x368 | 21 KB | Why this risk tier: baseline and dynamic risk points |
| `heartbridge-risk-reasons.webp` | 1856x368 | 33 KB | Why this risk tier: baseline and dynamic risk points |
| `heartbridge-weight-trend.png` | 1856x564 | 22 KB | Daily weight chart for Maria with +2 / +5 lb thresholds and dry-weight line, rising to 179 lb |
| `heartbridge-weight-trend.webp` | 1856x564 | 28 KB | Daily weight chart for Maria with +2 / +5 lb thresholds and dry-weight line, rising to 179 lb |

## Notes
- Seeded demo patients (synthetic), scenarios `thanh` (RED) and `maria` (YELLOW) played through `POST /api/demo/scenario/:name`.
- The nurse-channel "delivery_failed" lines in the full patient timeline are expected (no nurse channel configured) and are not in any still.
- Clip: MP4 (H.264, muted), WebM and a 960 px, 12 fps GIF.
