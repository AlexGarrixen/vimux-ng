import { ValidationErrors, FormGroup } from '@angular/forms';

type ValidationMap<T extends object> = {
  [key in keyof T]: { [error: string]: string };
};
type Output = Record<string, string[]>;

export function generateControlErrors<T extends FormGroup['controls'] = {}>(
  controls: T,
  validationMap: ValidationMap<T>
): Output {
  const result: Output = {};

  Object.entries(controls).forEach(([key, value]) =>
    extractErrors({
      validationKey: key,
      errors: value.errors,
      output: result,
      validationMap,
    })
  );

  return result;
}

function extractErrors({
  errors,
  output,
  validationKey,
  validationMap,
}: {
  validationKey: string;
  errors: ValidationErrors | null;
  output: Output;
  validationMap: { [key: string]: { [error: string]: string } };
}) {
  if (errors)
    Object.entries(errors).forEach(([errorKey]) => {
      const prevErrorValue = output[errorKey];
      const msg = validationMap[validationKey][errorKey];
      const resolvedValue = prevErrorValue ? [...prevErrorValue, msg] : [msg];

      output[validationKey] = resolvedValue;
    });
}
