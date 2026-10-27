import { format, isValid, parse } from "date-fns";

// Preserve the displayed publication date while supplying a valid calendar date.
export const blogPublicationDate = (displayDate: string): string | undefined => {
  const parsed = parse(displayDate, "MMMM d, yyyy", new Date(2000, 0, 1));
  if (!isValid(parsed) || format(parsed, "MMMM d, yyyy") !== displayDate) return undefined;
  return format(parsed, "yyyy-MM-dd");
};