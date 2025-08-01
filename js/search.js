import Fuse from "https://cdn.jsdelivr.net/npm/fuse.js@6.6.2/+esm"

async function loadData() {
  const files = ["resources", "events", "faqs", "glossary"]
  const results = []

  for (const name of files) {
    const res = await fetch(`data/${name}.json`)
    const arr = await res.json()
    arr.forEach((item) => {
      if (name === "resources") {
        results.push({
          type: "resource",
          title: item["Resource Name"],
          url: item["Full Link"].startsWith("http")
            ? item["Full Link"]
            : `https://${item["Full Link"]}`,
          description: item["Short Description"],
        })
      } else if (name === "events") {
        results.push({
          type: "event",
          title: item.title,
          url: item.link,
          description: item.description,
        })
      } else if (name === "faqs") {
        results.push({
          type: "faq",
          title: item.question,
          url: "faq.html",
          description: item.answer,
        })
      } else if (name === "glossary") {
        results.push({
          type: "glossary",
          title: item.term,
          url: "glossary.html",
          description: item.definition,
        })
      }
    })
  }

  return new Fuse(results, {
    keys: ["title", "description"],
    threshold: 0.3,
  })
}

let fusePromise

export function setupSearch(input, container) {
  if (!fusePromise) fusePromise = loadData()

  input.addEventListener("input", async () => {
    const q = input.value.trim()
    container.innerHTML = ""
    if (!q) return
    const fuse = await fusePromise
    const hits = fuse.search(q).slice(0, 5)
    hits.forEach(({ item }) => {
      const a = document.createElement("a")
      a.href = item.url
      a.textContent = `${item.title} (${item.type})`
      a.className = "block px-4 py-2 hover:bg-[#f3eff9]"
      container.appendChild(a)
    })
  })
}
