import { Skeleton } from "@/components/ui/skeleton";

import React from "react";

const ChartSkeleton = ({
  height,
  maxHeight,
}: {
  height: number;
  maxHeight: number;
}) => <Skeleton className={`h-${height} lg:h-${maxHeight} w-full`} />;

export default ChartSkeleton;
