import {isDate} from "@/util/date";

export default function format<T>(obj: Record<string, unknown>): T {
    return Object.entries(obj).reduce((result, [key, value]) => {
        const newResult = result;

        if (value === null) {
            return newResult;
        }

        if (isDate(value)) {
            newResult[key] = new Date(value);
        } else {
            newResult[key] = value;
        }

        return newResult;
    }, {} as Record<string, unknown>) as T;
}