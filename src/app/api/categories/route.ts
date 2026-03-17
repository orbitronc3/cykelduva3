import { NextResponse } from "next/server";

export async function GET() {
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
      description: "Terrängcyklar för skog, stigar och tekniska partier.",
    },
    {
      name: "Elcyklar",
      slug: "elcyklar",
      description: "Elektriska cyklar för smidig och snabb pendling.",
    },
  ];

  return NextResponse.json(categories);
}
