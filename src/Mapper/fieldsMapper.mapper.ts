import { formatFields } from "../Modal/Model/formatFields.model";
import { scheduleOptions } from "../Modal/Model/scheduleOptions.model";

type RadioFields = typeof formatFields |  typeof scheduleOptions

export class FieldsMapper {
  static radioFieldsMapper(fields: RadioFields, callbackWithReturningFields: (fields: formatFields) => JSX.Element): JSX.Element[] {
    return (Object.values(fields) as formatFields[]).map(callbackWithReturningFields)
  }
}