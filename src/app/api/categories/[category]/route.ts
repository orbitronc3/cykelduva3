import { NextResponse } from "next/server";

const categories = [
  {
    name: "Hybridcyklar",
    slug: "hybrid",
    description: "Allroundcyklar för pendling och vardag.",
  },
  {
    name: "Landsvägscyklar",
    slug: "landsvag",
    description: "Snabba cyklar för asfalt och distans.",
  },
  {
    name: "Mountainbikes",
    slug: "mtb",
    description: "Terrängcyklar för skog och stigar.",
  },
  {
    name: "Elcyklar",
    slug: "elcyklar",
    description: "Elektriska cyklar för smidig pendling.",
  },
];

export async function GET(
  req: Request,
  { params }: { params: { category: string } }
) {
  const { category } = params;

  const found = categories.find((c) => c.slug === category);

  if (!found) {
    return NextResponse.json(
      { error: "Category not found" },
      { status: 404 }
    );
  }

  return NextResponse.json(found);
}
