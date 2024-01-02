import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
const config = defineConfig({
  projectId: "hu7026f3",
  dataset: "production",
  apiVersion: "2023-12-30",
  basePath: "/admin",
  title: "gwoc-portfolio",
  plugins: [deskTool(), visionTool()],

  schema: {
    types: schemas,
  },
});

export default config;
