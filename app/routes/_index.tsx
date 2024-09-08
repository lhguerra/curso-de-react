import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Curso de React" },
    { name: "description", content: "Curso de React grátis em Português!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Curso de React</h1>
      <ul className="list-disc mt-4 pl-6 space-y-2">
        <li>
          <a href="/aulas/1">
            Aula 1
          </a>
        </li>
      </ul>
    </div>
  );
}
