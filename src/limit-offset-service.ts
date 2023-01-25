export const applyLimitOffset = ({
  data,
  limit,
  offset,
}: {
  data: Array<any>;
  limit?: number;
  offset?: number;
}) => {
  if (limit && offset) {
    if (limit + offset > data.length) return data.slice(offset);
    return data.slice(offset, limit);
  } else if (limit) {
    return data.slice(0, limit);
  } else if (offset) {
    return data.slice(offset);
  } else {
    return data;
  }
};