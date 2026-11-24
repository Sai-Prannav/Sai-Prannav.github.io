# Poster media manifest

## Poster 1: Smarter Signals
- Title (as printed): **Smarter Signals: Integration of LoRa-Based Communication and RF Energy Harvesting Between UAVs and IoT Ground Nodes for the AFRL SDR Challenge**
- NOTE: this is the title on AFRL_Poster.pdf / AFRL_SDR_Poster.pptx. It is NOT "Predicting the SNR Threshold for Accurate Direction-of-Arrival Detection..." (that appears to be the Digital Commons title; the local file differs, so a later/earlier version, or the DoA topic is only the Future Work section). Confirm which poster the Digital Commons record holds before linking.
- Venue/term: KSU Undergraduate Symposium, Fall 2025 (per task brief; the poster file itself prints no venue or date. File date Nov 2025.)
- Digital Commons: https://digitalcommons.kennesaw.edu/undergradsymposiumksu/fall2025/fall2025/7/
- Authors as printed: Team Bullseye: Sai Prannav Murali, Owais Ahmed, Sarani Coly, Drew Haase, Joseph Stanziano, Liam Begley, Michaella Hopfner, Oscar Rosas, Dr. Adeel Khalid, Dr. Sumit Chakravarty. Affiliation printed: Southern Polytechnic College of Engineering and Engineering Technology (SPCEET).
- Sources: AFRL_Poster.pdf, AFRL_SDR_Poster.pptx

## Poster 2: UAV sensors
- Title (as printed): **Evaluation of LiDAR, RGB, and Thermal Sensors for UAV Detection**
- Venue/term: KSU Undergraduate Symposium, Spring 2026 (per task brief; not printed on the poster)
- Digital Commons: https://digitalcommons.kennesaw.edu/undergradsymposiumksu/spring2026/posters/8/
- Authors as printed: Dheeraj Kondragunta, Akshat Chitta, Sai Prannav Murali, Joseph Stanziano, Owais Ahmed, Daniel Byers, & Dr. Adeel Khalid. Department of Mechanical Engineering, Kennesaw State University.
- Sources: intruderUAS_poster.pdf, intruderUAS_poster.pptx
- Poster results are preliminary: YOLO26s on 8,160 annotated images (92.2% train split); quantitative evaluation "ongoing". Do not present the detection scores as benchmark results.

## Slot picks (copies, byte-identical)
- aero-uav-figure.png/.webp = uav-sensors-thermal-detection-palette-a (real thermal frame, YOLO26s detection "aircraft 0.75")
- smarter-signals-figure.png/.webp = smarter-signals-usrp-spectrum-capture (real MATLAB/USRP live-signal capture). The poster has no hardware photo and no SNR-vs-accuracy plot (DoA is only future work).

Raster originals taken from the PPTX media where available (PDF embedded versions are downsampled copies). No figure was altered; PNGs are lossless, WebPs are resized to max 1600 px wide (no upscaling), quality 88. The poster has no vector plots; all figures are raster.
Skipped: KSU logos, a 734x192 latency table image (under size threshold; its content is in the text).

## Files
| File | Pixels | Size | What it shows | Source |
|---|---|---|---|---|
| smarter-signals-full-poster.png | 2200x1700 | 1115 KB | Complete poster, as rendered from the PDF. | AFRL_Poster.pdf (page 1, 200 dpi render) |
| smarter-signals-full-poster.webp | 1600x1236 | 236 KB | Complete poster, as rendered from the PDF. | AFRL_Poster.pdf (page 1, 200 dpi render) |
| smarter-signals-usrp-spectrum-capture.png | 1190x794 | 107 KB | MATLAB Spectrum Analyzer screenshot of a live USRP receive test: waveforms from a calibrated RF signal generator (power density vs frequency). | AFRL_SDR_Poster.pptx ppt/media/image1.png (original, unmodified) |
| smarter-signals-usrp-spectrum-capture.webp | 1190x794 | 56 KB | MATLAB Spectrum Analyzer screenshot of a live USRP receive test: waveforms from a calibrated RF signal generator (power density vs frequency). | AFRL_SDR_Poster.pptx ppt/media/image1.png (original, unmodified) |
| smarter-signals-doa-concept-illustration.png | 778x437 | 188 KB | Illustration of UAV transmission pattern and Direction-of-Arrival (DoA) geometry: low SNR, transitional SNR (energy efficient), antenna array, estimated DoA, no guess. Cartoon, not a measurement. | AFRL_SDR_Poster.pptx ppt/media/image5.png (original, unmodified) |
| smarter-signals-doa-concept-illustration.webp | 778x437 | 33 KB | Illustration of UAV transmission pattern and Direction-of-Arrival (DoA) geometry: low SNR, transitional SNR (energy efficient), antenna array, estimated DoA, no guess. Cartoon, not a measurement. | AFRL_SDR_Poster.pptx ppt/media/image5.png (original, unmodified) |
| smarter-signals-vert900-antenna-patterns.png | 952x889 | 147 KB | Measured 3D radiation pattern and polar cuts of the VERT900 antenna, from anechoic chamber testing. | AFRL_SDR_Poster.pptx ppt/media/image3.png (original, unmodified) |
| smarter-signals-vert900-antenna-patterns.webp | 952x889 | 60 KB | Measured 3D radiation pattern and polar cuts of the VERT900 antenna, from anechoic chamber testing. | AFRL_SDR_Poster.pptx ppt/media/image3.png (original, unmodified) |
| smarter-signals-charging-rate-vs-distance.png | 975x587 | 79 KB | Plot: Powercast energy-harvesting charging rate (V/min) vs distance (cm) for C1/C3 at 2.4 GHz and 0.915 GHz. | AFRL_SDR_Poster.pptx ppt/media/image2.png (original, unmodified) |
| smarter-signals-charging-rate-vs-distance.webp | 975x587 | 25 KB | Plot: Powercast energy-harvesting charging rate (V/min) vs distance (cm) for C1/C3 at 2.4 GHz and 0.915 GHz. | AFRL_SDR_Poster.pptx ppt/media/image2.png (original, unmodified) |
| smarter-signals-uav-iot-system-diagram.png | 780x461 | 101 KB | UAV-IoRT systems diagram: UAV with Raspberry Pi/LoRa module, USRP-2901 ground receiver, VERT900 antenna, ground computer. | AFRL_SDR_Poster.pptx ppt/media/image4.png (original, unmodified) |
| smarter-signals-uav-iot-system-diagram.webp | 780x461 | 18 KB | UAV-IoRT systems diagram: UAV with Raspberry Pi/LoRa module, USRP-2901 ground receiver, VERT900 antenna, ground computer. | AFRL_SDR_Poster.pptx ppt/media/image4.png (original, unmodified) |
| smarter-signals-rf-energy-harvesting-architecture.png | 1105x491 | 142 KB | Block diagram of the RF energy-harvesting system (RF generator, matching network, rectifier, power management). Appears to be a published-literature figure; do not present as original work without checking. | AFRL_SDR_Poster.pptx ppt/media/image10.png (original, unmodified) |
| smarter-signals-rf-energy-harvesting-architecture.webp | 1105x491 | 34 KB | Block diagram of the RF energy-harvesting system (RF generator, matching network, rectifier, power management). Appears to be a published-literature figure; do not present as original work without checking. | AFRL_SDR_Poster.pptx ppt/media/image10.png (original, unmodified) |
| smarter-signals-mac-flowchart-ground.png | 960x1158 | 172 KB | Ground station MAC protocol flowchart. | AFRL_SDR_Poster.pptx ppt/media/image8.png (original, unmodified) |
| smarter-signals-mac-flowchart-ground.webp | 960x1158 | 58 KB | Ground station MAC protocol flowchart. | AFRL_SDR_Poster.pptx ppt/media/image8.png (original, unmodified) |
| smarter-signals-mac-flowchart-uav.png | 1026x1195 | 200 KB | UAV MAC protocol flowchart. | AFRL_SDR_Poster.pptx ppt/media/image9.png (original, unmodified) |
| smarter-signals-mac-flowchart-uav.webp | 1026x1195 | 65 KB | UAV MAC protocol flowchart. | AFRL_SDR_Poster.pptx ppt/media/image9.png (original, unmodified) |
| uav-sensors-full-poster.png | 2200x1700 | 1639 KB | Complete poster, as rendered from the PDF. | intruderUAS_poster.pdf (page 1, 200 dpi render) |
| uav-sensors-full-poster.webp | 1600x1236 | 313 KB | Complete poster, as rendered from the PDF. | intruderUAS_poster.pdf (page 1, 200 dpi render) |
| uav-sensors-thermal-detection-palette-a.png | 640x512 | 493 KB | Radiometric thermal frame (false-colour palette) with a YOLO26s detection box, "aircraft 0.75", on a UAV against sky above tree line. | intruderUAS_poster.pptx ppt/media/image5.JPG (original, unmodified) |
| uav-sensors-thermal-detection-palette-a.webp | 640x512 | 58 KB | Radiometric thermal frame (false-colour palette) with a YOLO26s detection box, "aircraft 0.75", on a UAV against sky above tree line. | intruderUAS_poster.pptx ppt/media/image5.JPG (original, unmodified) |
| uav-sensors-thermal-detection-palette-b.png | 640x512 | 671 KB | Thermal frame (false-colour palette), detection box "aircraft 0.74" over a drone above a dark ground/water band. | intruderUAS_poster.pptx ppt/media/image4.JPG (original, unmodified) |
| uav-sensors-thermal-detection-palette-b.webp | 640x512 | 125 KB | Thermal frame (false-colour palette), detection box "aircraft 0.74" over a drone above a dark ground/water band. | intruderUAS_poster.pptx ppt/media/image4.JPG (original, unmodified) |
| uav-sensors-thermal-detection-grayscale-a.png | 640x512 | 199 KB | Grayscale thermal frame with detection box "aircraft 0.57". | intruderUAS_poster.pptx ppt/media/image6.JPG (original, unmodified) |
| uav-sensors-thermal-detection-grayscale-a.webp | 640x512 | 24 KB | Grayscale thermal frame with detection box "aircraft 0.57". | intruderUAS_poster.pptx ppt/media/image6.JPG (original, unmodified) |
| uav-sensors-thermal-detection-grayscale-b.png | 640x512 | 211 KB | Grayscale thermal frame with detection box "aircraft 0.38" (lowest-confidence example). | intruderUAS_poster.pptx ppt/media/image7.JPG (original, unmodified) |
| uav-sensors-thermal-detection-grayscale-b.webp | 640x512 | 28 KB | Grayscale thermal frame with detection box "aircraft 0.38" (lowest-confidence example). | intruderUAS_poster.pptx ppt/media/image7.JPG (original, unmodified) |
| uav-sensors-lidar-point-cloud.png | 1449x850 | 34 KB | LiDAR point-cloud view: concentric scan rings from the ground sensor, with the UAV target highlighted in red. | intruderUAS_poster.pptx ppt/media/image3.png (original, unmodified) |
| uav-sensors-lidar-point-cloud.webp | 1449x850 | 63 KB | LiDAR point-cloud view: concentric scan rings from the ground sensor, with the UAV target highlighted in red. | intruderUAS_poster.pptx ppt/media/image3.png (original, unmodified) |
| uav-sensors-system-architecture-illustration.png | 2048x2048 | 5936 KB | Stylised illustration of the intruder-UAV detection system: Skydio X10 thermal camera + ground LiDAR, YOLO26 pipeline, LiDAR pipeline. Illustration/concept graphic, not a photo or measurement. | intruderUAS_poster.pptx ppt/media/image2.png (original, unmodified) |
| uav-sensors-system-architecture-illustration.webp | 1600x1600 | 321 KB | Stylised illustration of the intruder-UAV detection system: Skydio X10 thermal camera + ground LiDAR, YOLO26 pipeline, LiDAR pipeline. Illustration/concept graphic, not a photo or measurement. | intruderUAS_poster.pptx ppt/media/image2.png (original, unmodified) |
| aero-uav-figure.png | 640x512 | 493 KB | Portfolio slot copy (see picks above) | copy |
| aero-uav-figure.webp | 640x512 | 58 KB | Portfolio slot copy (see picks above) | copy |
| smarter-signals-figure.png | 1190x794 | 107 KB | Portfolio slot copy (see picks above) | copy |
| smarter-signals-figure.webp | 1190x794 | 56 KB | Portfolio slot copy (see picks above) | copy |
