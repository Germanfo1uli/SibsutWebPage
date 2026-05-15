"use client";

import dynamic from "next/dynamic";
import LazyLoad from "@/app/components/LazyLoad";
import SectionLoader from "@/app/components/SectionLoader";

// Пример 1: Использование next/dynamic (автоматический code splitting)
const HeavyComponent = dynamic(
  () => import("./components/HeavyComponent"),
  {
    loading: () => <SectionLoader />,
    ssr: true,
  }
);

// Пример 2: Комбинация next/dynamic + LazyLoad (загрузка при видимости)
const VeryHeavyComponent = dynamic(
  () => import("./components/VeryHeavyComponent")
);

export default function ExamplePage() {
  return (
    <main>
      {/* Критичный компонент - загружается сразу */}
      <header>Header</header>

      {/* Компонент с code splitting - загружается в фоне */}
      <HeavyComponent />

      {/* Компонент с double optimization - только при скролле до него */}
      <LazyLoad fallback={<SectionLoader />}>
        <VeryHeavyComponent />
      </LazyLoad>
    </main>
  );
}
