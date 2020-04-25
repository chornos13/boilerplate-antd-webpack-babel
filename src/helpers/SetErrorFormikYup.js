import mapErrorYup from 'map-error-yup'
import { get } from 'lodash'

export default function setFormikError(formikProps, e, req) {
  const { setFieldError, setFieldTouched } = formikProps
  console.log(e)
  const mapping = mapErrorYup(e, req)

  const errors = get(mapping, 'errors', {})

  const keys = Object.keys(errors)

  console.log({ errors })

  for (let i = 0; i < keys.length; i += 1) {
    const key = keys[i]
    setFieldError(key, errors[key])
    setFieldTouched(key, true, false)
  }
}
