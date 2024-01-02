import { createClient, groq } from "next-sanity";

const client = createClient({
  projectId: "hu7026f3",
  dataset: "production",
  apiVersion: "2023-12-30",

  useCdn: false,
});
const LectureQuery = groq` *[_type == "DemoLecture"] {
  title,
 "imageUrl": image.asset->url,
 description,
 link,}`;

export async function getLectures() {
  return client.fetch(LectureQuery, {
    cache: "no-store",
  });
}

const NotesQuery = groq` *[_type == "DemoNotes"] {
  title,
 "imageUrl": image.asset->url,
 description,
 link,}`;

export async function getNotes() {
  return client.fetch(NotesQuery, {
    cache: "no-store",
  });
}
