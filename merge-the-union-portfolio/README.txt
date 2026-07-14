MERGE THE UNION — PORTFOLIO DROP-IN

Copy these folders into the root of your Next.js project:

app/
components/
public/

Then run:
npm run dev

Open:
http://localhost:3000/lab/merge-the-union

The package also contains:
components/lab/MergeTheUnionLabCard.tsx

To make the project discoverable from the main Lab page, import and render that
component wherever you want the featured Merge the Union card to appear:

import { MergeTheUnionLabCard } from "@/components/lab/MergeTheUnionLabCard";

<MergeTheUnionLabCard />
