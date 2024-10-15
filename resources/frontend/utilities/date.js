import { format as fnsFormat, parseISO } from "date-fns";
import { ru } from "date-fns/locale";

export function format(date) {
  return fnsFormat(parseISO(date), "HH:mm, d MMMM", { locale: ru })
}
