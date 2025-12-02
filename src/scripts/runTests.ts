import { spawnSync } from "node:child_process"

const args = process.argv.slice(2)
const day = args[0]

const env = { ...process.env }
if (day) {
    env.DAY = day
}

const result = spawnSync("bun", ["test", "src/index.test.ts"], {
    stdio: "inherit",
    env,
})

process.exit(result.status ?? 0)
