# Where the numbers on this site come from

Every figure on the site points to a **public** source someone can check, or is marked as the author's own report.
When a number changes, change it here in the same commit. (Review finding PUB-04/PUB-14: the numbers used to be copied
by hand with no record of where they came from.)

| Page | Claim | Public source | How to re-check |
|---|---|---|---|
| HeartBridge | 1,207 backend tests passing (1,213 total, 6 todo) | [heartbridge](https://github.com/Sai-Prannav/heartbridge) `ci` workflow and README | `npm test` in `heartbridge/backend`, or the latest `ci` run |
| HeartBridge | Rules alone caught 40.8% of out-of-design emergencies (169/414); 53.9% with a local model | heartbridge [`docs/independent-eval/REPORT.md`](https://github.com/Sai-Prannav/heartbridge/blob/main/docs/independent-eval/REPORT.md) | the REPORT's results table; the repo's offline recall check fails CI below 40.8% |
| HeartBridge | 873 synthetic messages in 5 languages | same REPORT ("Working, 873 messages") | same |
| HeartBridge | Built at HackGT 13 (Georgia Tech), September 2026 | the repo's history and README | `git log --reverse` in the repo |
| StockSnap | 17 REST endpoints, 3 tables (stores, products, scans) | [stocksnap](https://github.com/Sai-Prannav/stocksnap) `backend/app/routers/*.py`, `backend/app/models/models.py` | count the `@router.*` routes (17) and the models (3) |
| StockSnap | 53 detections at 75.0% mean confidence (demo) | this repo's `public/media/stocksnap/MANIFEST.md` (the demo run shown on the page) | the annotated demo image on the page |
| StockSnap | YOLO11 detector | stocksnap `backend/app/services/real_image_analyzer.py` and README | the model name in that file |
| LiDAR/thermal UAV detection | 530 hand-labeled LiDAR clusters (307 UAV, 223 non-UAV) | the AIAA SciTech 2027 paper (accepted; public once the proceedings are out) | the paper's dataset section |
| LiDAR/thermal UAV detection | Accepted, AIAA SciTech 2027, Orlando | AIAA SciTech 2027 program | the program, once published |
| Window thermography | Accepted, TFEC 2027 (ASTFE), Dallas | [TFEC 2027](https://www.astfe.org/tfec2027/) | the conference program |
| Flexible joints | NIH-funded project | [NIH RePORTER 10439264](https://reporter.nih.gov/project-details/10439264), [KSU news](https://www.kennesaw.edu/news/stories/2022/awarded-nih-grant-to-improve-heart-surgeries-through-use-of-robots.php) | the award pages |
| Flexible joints | 8 of 12 joints fabricated, 4 in progress | **author's own progress report** (no public source; updated by hand) | the date of the last commit to `amir-flexible-joints.md` |
| Thrust-test rig | about 15 3D-printed parts; finished September 2026 | **author's own report**, with the build photos on the page | the photos and `public/media/cards/` |
| Posters | titles, authors, venues | `public/media/posters/MANIFEST.md` and the [KSU Digital Commons](https://digitalcommons.kennesaw.edu/) records it links | the Digital Commons record |

Rule for new numbers: no figure goes on the site unless its row here names a public source or says "author's own
report". Private notes are never a source.
