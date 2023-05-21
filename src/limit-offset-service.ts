export const applyLimitOffset = ({
  data,
  limit = data.length,
  offset = 0,
}: {
  data: Array<any>;
  limit?: number;
  offset?: number;
}) => {
  if (!Array.isArray(data)) {
    throw new Error("Data must be an array");
  }

  if (typeof limit !== "undefined" && (!Number.isInteger(limit) || limit < 0)) {
    throw new Error("Limit must be a non-negative integer");
  }

  if (
    typeof offset !== "undefined" &&
    (!Number.isInteger(offset) || offset < 0)
  ) {
    throw new Error("Offset must be a non-negative integer");
  }

  const endIndex = limit + offset;

  return data.slice(offset, endIndex);
};
