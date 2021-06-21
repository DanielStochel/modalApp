import { formatFields } from "../Model/formatFields.model";
import { scheduleOptions } from "../Model/scheduleOptions.model";

type RadioFields = typeof formatFields |  typeof scheduleOptions

export class FieldsMapper {
  static radioFieldsMapper(fields: RadioFields, callbackWithReturningFields: (fields: formatFields) => JSX.Element): JSX.Element[] {
    return (Object.values(fields) as formatFields[]).map(callbackWithReturningFields)
  }
}