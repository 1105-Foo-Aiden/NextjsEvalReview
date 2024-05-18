'use client'

import ButtonComponent from "@/Components/ButtonComponent/buttonComponent";
import { PaginationComponent } from "@/Components/PaginationCompoinent/PaginationComponent";

export default function Home() {


  return (
    <main className="flex min-h-screen flex-col items-center gap-5 p-24 bg-gray-600">
      <h1 className="text-3xl text-white">React Review</h1>
      <ButtonComponent PageLink="/IaseahLecturePage" name="Iaseah's lecture" />
      <ButtonComponent PageLink="/JacboLecturePage" name="Jacob's Lecture"/>
      <ButtonComponent PageLink="/ApiCallPage" name="Calling Api's"/>
      <PaginationComponent/>
    </main>
  );
}
