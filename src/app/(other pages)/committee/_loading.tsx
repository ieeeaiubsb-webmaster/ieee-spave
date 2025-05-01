import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="container max-w-5xl mx-auto py-8">
      {/* Page title skeleton */}
      <Skeleton className="h-10 w-80 mx-auto mb-8" />

      <div className="mb-8">
        {/* Program Chair section - single column centered */}
        <div className="grid grid-cols-1 justify-items-center py-8">
          <Card className="overflow-hidden w-full max-w-md">
            {/* Rectangular image skeleton */}
            <Skeleton className="h-48 w-full" />

            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-40 mb-2" />
              <Skeleton className="h-4 w-32" />
            </CardHeader>

            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>

            <CardFooter className="flex gap-2">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </CardFooter>
          </Card>
        </div>

        {/* Program Co-Chair section - two columns centered */}
        <div className="grid grid-cols-2 justify-items-center py-8 gap-6">
          {/* First co-chair */}
          <Card className="overflow-hidden w-full max-w-md">
            <Skeleton className="h-48 w-full" />

            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-36 mb-2" />
              <Skeleton className="h-4 w-28" />
            </CardHeader>

            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4" />
            </CardContent>

            <CardFooter className="flex gap-2">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </CardFooter>
          </Card>

          {/* Second co-chair */}
          <Card className="overflow-hidden w-full max-w-md">
            <Skeleton className="h-48 w-full" />

            <CardHeader className="pb-2">
              <Skeleton className="h-6 w-32 mb-2" />
              <Skeleton className="h-4 w-24" />
            </CardHeader>

            <CardContent>
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-2/3" />
            </CardContent>

            <CardFooter className="flex gap-2">
              <Skeleton className="h-9 w-20 rounded-md" />
              <Skeleton className="h-9 w-24 rounded-md" />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}
