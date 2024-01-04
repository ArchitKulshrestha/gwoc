import { createClient, groq } from "next-sanity";

export const revalidate = 3600;

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

const ExperienceQuery = groq`
*[_type == "workExperience"] {
  title,
  description,
  duration,
  "imageUrl": image.asset->url,
  
}
`;

export async function getExperience() {
  return client.fetch(ExperienceQuery, {
    cache: "no-store",
  });
}

const NotificationsQuery = groq`
*[_type == "notifications"] {
  description
}`;

export async function getNotifications() {
  return client.fetch(NotificationsQuery, {
    cache: "no-store",
  });
}

const SkillsQuery = groq`
*[_type == "skills"] {
  description,
  title,
}`;

export async function getSkills() {
  return client.fetch(SkillsQuery, {
    cache: "no-store",
  });
}
