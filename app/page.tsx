import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">Welcome to automatric!</h1>
        <p className="mt-3 text-2xl">
          The best{" "}
          <a href="/places" className="text-blue-600 hover:underline">
            places
          </a>{" "}
          to discover magical machines of every kind.
        </p>

        <details className="mt-6 w-full max-w-lg rounded-xl border p-4 text-left">
          <summary className="text-lg font-medium">What is this?</summary>
          <p className="mt-2">
            My name&apos;s Binney and I live in London. I started collecting
            recommendations for places you can see magical machines and
            automata, whether they&apos;re museums, workshops, or simply public
            installations in surprising places.
          </p>
          <p className="mt-2">
            Some are old, some are new - some are homemade and local, others are
            giant big-budget blockbusters.
          </p>
          <p className="mt-2">
            The nature of the automation can be anything from moving puppets, to
            autonomous shows, to games and interactives.
          </p>
          <p className="mt-2">
            I take suggestions! @ me on Mastodon:{" "}
            <a href="https://mastodon.me.uk/@binney">@binney</a>.
          </p>
        </details>
      </main>
    </div>
  );
}
