import Link from "next/link";
import Image from "next/image";
import { NotesCard } from "./NotesCard";
import { LectureCard } from "./LectureCard";
import { getLectures, getNotes } from "@/sanity/utilsSanity";

const Demo = async () => {
  const Lectures = await getLectures();
  const Notes = await getNotes();
  return (
    <section
      id="Demo"
      className="px-6 lg:px-28 min-h-screen flex justify-center items-center py-8">
      <div className="w-full">
        <h1 className="md:text-4xl text-2xl font-bold text-text-800 mt-8 ">
          Demo
        </h1>
        <div className=" py-4 md:py-6">
          <h2 className="text-text-600 text-xl sm:text-2xl font-semibold">
            Lectures
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 py-4 md:py-8">
            {Lectures.map((lecture, index) => (
              <LectureCard key={index} index={index} {...lecture} />
            ))}
          </div>
        </div>
        <div className="py-4 md:py-8">
          <h2 className="text-text-600 text-xl sm:text-2xl font-semibold">
            Notes
          </h2>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 py-4 md:py-8">
            {Notes.map((Note, index) => (
              <NotesCard key={index} index={index} {...Note} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
