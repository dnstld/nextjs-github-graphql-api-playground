import GoBackButton from "@/components/GoBackButton";
import Organization from "@/components/Organization";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";

export default async function ClientStreamingPage() {
  return (
    <main className="container mx-auto max-w-md p-4 space-y-8">
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-xl font-semibold">Organization</h1>
          <p className="text-sm text-gray-400">Details</p>
        </div>

        <GoBackButton />
      </header>

      <div>
        <ErrorBoundary fallback={<div>Error loading organization</div>}>
          <Suspense fallback={<div>Loading organization...</div>}>
            <Organization />
          </Suspense>
        </ErrorBoundary>
      </div>
    </main>
  );
}
