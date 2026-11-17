import { PDFDocument } from 'pdf-lib'
import fs from 'node:fs/promises'
import path from 'node:path'

// Slidev's print CSS maps the 1920×1080 canvas onto a 1440×810pt page.
const pageWidth = 1440
const pageHeight = 810
const dir = path.resolve(process.argv[2] ?? '.export-pages')
const out = path.resolve(process.argv[3] ?? 'insury-deck.pdf')

const files = (await fs.readdir(dir))
  .filter((name) => name.endsWith('.png'))
  .sort((a, b) => Number(a.replace(/\D/g, '')) - Number(b.replace(/\D/g, '')))

if (files.length === 0) {
  console.error(`No PNG pages in ${dir}`)
  process.exit(1)
}

const pdf = await PDFDocument.create()
pdf.setTitle('Insury — Pitch Deck')
pdf.setCreator('Insury')

for (const file of files) {
  const png = await pdf.embedPng(await fs.readFile(path.join(dir, file)))
  const page = pdf.addPage([pageWidth, pageHeight])
  page.drawImage(png, { x: 0, y: 0, width: pageWidth, height: pageHeight })
}

await fs.writeFile(out, await pdf.save())
await fs.rm(dir, { recursive: true, force: true })
console.log(`exported ${files.length} slides to ${path.relative(process.cwd(), out)}`)
