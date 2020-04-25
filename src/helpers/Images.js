import { BASE_FILE_URL, BASE_URL } from 'constants/ConstApi'

const PATH_DIR = {
  UploadInformasiOrang: 'uploads/informasi-orang',
}

function getUrl(url, pathDir) {
  if (!url) {
    return '/public/assets/defaultImage.png'
  }
  return [BASE_FILE_URL, pathDir, url].join('/')
}

const Images = {
  getUrl,
  PATH_DIR,
}

export default Images
