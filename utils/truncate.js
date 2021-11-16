export function truncate(string, limit) {
  return string.length > limit ? `${string.slice(0, limit - 3)}...` : string;
}
