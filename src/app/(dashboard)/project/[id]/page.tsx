import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CodeBlock from "@/components/codeblock";
export default function Project({ params }: { params: { id: string } }) {
  const code = `
      > anycode-docs@0.0.1 build /Users/tgt/anycode-docs
      > astro check && astro build

      15:19:17 [vite] Re-optimizing dependencies because vite config has changed
      15:19:17 Types generated 122ms
      15:19:17 [check] Getting diagnostics for Astro files in /Users/tgt/anycode-docs...
      Result (5 files):
      - 0 errors
      - 0 warnings
      - 0 hints

      15:19:19 Types generated 100ms
      15:19:19 [build] output: "static"
      15:19:19 [build] directory: /Users/tgt/anycode-docs/dist/
      15:19:19 [build] Collecting build info...
      15:19:19 [build] ✓ Completed in 156ms.
      15:19:19 [build] Building static entrypoints...
      15:19:22 [vite] ✓ built in 3.25s
      15:19:22 [build] ✓ Completed in 3.26s.

       building client (vite)
      15:19:23 [vite] ✓ 15 modules transformed.
      15:19:23 [vite] dist/_astro/Tabs.astro_astro_type_script_index_0_lang.BqK4QFew.js   0.97 kB │ gzip:  0.48 kB
      15:19:23 [vite] dist/_astro/page.CZ0TFQCk.js                                        2.25 kB │ gzip:  1.00 kB
      15:19:23 [vite] dist/_astro/hoisted.bf4k8FkQ.js                                     6.51 kB │ gzip:  2.62 kB
      15:19:23 [vite] dist/_astro/ui-core.CwbtRWDf.js                                    57.18 kB │ gzip: 18.71 kB
      15:19:23 [vite] ✓ built in 124ms

       generating static routes
      15:19:23 λ astro-expressive-code/routes/styles.ts
      15:19:23   └─ /_astro/ec.mgx91.css (+2ms)
      15:19:23 λ astro-expressive-code/routes/scripts.ts
      15:19:23   └─ /_astro/ec.sgewm.js (+1ms)
      15:19:23 ▶ @astrojs/starlight/404.astro
      15:19:23   └─ /404.html (+13ms)
      15:19:23 ▶ @astrojs/starlight/index.astro
      15:19:23   ├─ index.html (+32ms)
      15:19:23   ├─ /other-info/credits/index.html (+6ms)
      15:19:23   ├─ /start-here/config/index.html (+5ms)
      15:19:23   └─ /start-here/index.html (+5ms)
      15:19:23 ✓ Completed in 79ms.

       generating optimized images
      15:19:23   ▶ /_astro/anycode.JW_swgPl_15a4Fj.svg (before: 9kB, after: 9kB) (+283ms) (1/1)
      15:19:23 ✓ Completed in 284ms.


      Running Pagefind v1.0.4 (Extended)
      Running from: "/Users/tgt/anycode-docs/node_modules/.pnpm/@astrojs+starlight@0.20.1_astro@4.4.8/node_modules/@astrojs/starlight"
      Source:       "../../../../../../dist"
      Output:       "../../../../../../dist/pagefind"

      [Walking source directory]
      Found 5 files matching **/*.{html}

      [Parsing files]
      Found a data-pagefind-body element on the site.
      ↳ Ignoring pages without this tag.

      [Reading languages]
      Discovered 1 language: en

      [Building search indexes]
      Total:
        Indexed 1 language
        Indexed 4 pages
        Indexed 185 words
        Indexed 0 filters
        Indexed 0 sorts

      Finished in 0.016 seconds
      15:19:25 [@astrojs/sitemap] \`sitemap-index.xml\` created at \`dist\`
      15:19:25 [build] 5 page(s) built in 6.05s
      15:19:25 [build] Complete!

      - hi from ansh :)
  `;
  return (
    <div className="space-y-4 px-6 py-4">
      <h1 className="text-4xl font-semibold">worker-{params.id}</h1>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Deploys</CardTitle>
          <CardDescription>View your recent deployment</CardDescription>
        </CardHeader>
        <CardContent>
          <h1 className="mb-2 text-lg font-semibold">Deployment Logs</h1>
          <p>
            <span className="rounded-full text-lg text-green-400">&#9679;</span>
            <span className="ml-2">Successfully deployed</span>
          </p>
          <CodeBlock code={code} className="mt-2 h-[48rem]" />
        </CardContent>
        <CardFooter>
          <p></p>
        </CardFooter>
      </Card>
    </div>
  );
}
