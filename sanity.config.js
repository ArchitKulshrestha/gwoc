import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/DemoLecture";
import { visionTool } from "@sanity/vision";
import schemas from "./sanity/schemas";
const config = defineConfig({
  projectId: "hu7026f3",
  dataset: "production",
  apiVersion: "2023-12-30",
  basePath: "/admin",
  title: "gwoc-portfolio",
  plugins: [deskTool(), visionTool()],
  useCDN: true,
  schema: {
    types: schemas,
  },
});

export default config;
