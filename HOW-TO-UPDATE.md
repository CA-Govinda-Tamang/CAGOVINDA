# How to update the website

You only ever touch two things: the **files** folder (PDFs) and **materials.js** (the list).

## Add or replace a PDF
1. On GitHub, open the folder, e.g. `files/cap3/summary`.
2. Click **Add file → Upload files**, drop the PDF in, click **Commit changes**.
   - Use simple names without spaces, e.g. `Companies_Act_2063_Summary.pdf`.
   - To publish a new version, upload a file with the **same name** – it replaces the old one.
3. Open `materials.js`, click the pencil (Edit) icon.
4. Find the Act and fill in the line, e.g.
   `summary: { file: "files/cap3/summary/Companies_Act_2063_Summary.pdf", version: "v1.0", date: "2026-11-20" },`
5. Click **Commit changes**. The website updates in about a minute.

## Add a video
`video: { link: "https://youtu.be/XXXXXXXXXXX", date: "2026-11-20" },`
The thumbnail and the home page "Latest videos" update automatically.

## Add the official Nepali Act link
`bareNp: { link: "https://lawcommission.gov.np/..." },`

## Folders
| Material | Folder |
|---|---|
| Bare Act (English) | files/cap3/english, files/cap2/english |
| Act Summary | files/cap3/summary, files/cap2/summary |
| Suggested Answers / RTP / PEPT | files/cap3/compilation, files/cap2/compilation |
| Exam corner decks | files/cap3/exam |

## Rules
- Dates as `YYYY-MM-DD`. `null` = "Coming soon".
- Keep commas and quotes as in the examples. If the site shows a blank page after an edit, a comma or quote is missing – open the last commit and compare.
- Each file must be under 25 MB.
