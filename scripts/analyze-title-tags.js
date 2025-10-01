const response = await fetch(
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/title_tag_too_long-t7mwFXnm1UhRC8AdfAl46cfpZNHOGl.csv",
)
const csvText = await response.text()

console.log("[v0] CSV Content:")
console.log(csvText)

// Parse CSV
const lines = csvText.trim().split("\n")
const headers = lines[0].split(",")
const pages = []

for (let i = 1; i < lines.length; i++) {
  const values = lines[i].split(",")
  const url = values[0]
  const title = values.slice(1).join(",") // In case title has commas

  pages.push({
    url,
    title,
    titleLength: title.length,
    path: url.replace("https://www.summitroofingprofessionals.com", ""),
  })
}

console.log("[v0] Pages with long titles:")
pages.forEach((page) => {
  console.log(`\nPath: ${page.path}`)
  console.log(`Current Title: ${page.title}`)
  console.log(`Length: ${page.titleLength} characters`)
})

console.log(`\n[v0] Total pages to update: ${pages.length}`)
