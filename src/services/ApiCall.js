import { objectToFormData } from 'object-to-formdata'
import { get } from 'lodash'
import Objects from 'helpers/Objects'
import BaseApiCall from './BaseApiCall'
import Interceptors from './Interceptors'

class MyApiCall extends BaseApiCall {
  postReservasiPerorangan(data) {
    const formData = objectToFormData(Objects.toValueStringify(data))
    formData.append('fileIdentitas', get(data, 'InformasiOrang.fileIdentitas'))
    formData.append(
      'fileBuktiMenikah',
      get(data, 'InformasiOrang.fileBuktiMenikah'),
    )

    return this.http.post('/reservasi/perorangan', formData)
  }

  getCity() {
    return this.http.get('/city')
  }

}

const ApiCall = new MyApiCall({}, Interceptors.default(), MyApiCall)

export default ApiCall
