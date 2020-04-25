import React from 'react'
import cx from 'classnames'
import cssDetailTagihan from 'views/FrontOffice/Reservasi/Form/DetailTagihan.module.css'
import { Icon, Typography } from 'antd'
import { get } from 'lodash'
import AppConst from 'constants'

const { Text } = Typography

const mapStyle = {
  [AppConst.ConstMasterStatusInvoice.LUNAS]: cx(cssDetailTagihan.lunas),
  [AppConst.ConstMasterStatusInvoice.BELUM_LUNAS]: cx(
    cssDetailTagihan.belumLunas,
  ),
}
function renderStatusLunas(reservasi) {
  const MasterStatusInvoiceId = get(reservasi, 'MasterStatusInvoiceId')
  const label = get(reservasi, 'MasterStatusInvoice.nama', '-')

  return (
    <Text className={mapStyle[MasterStatusInvoiceId]}>
      {label}
      &nbsp;
      <Icon type="container" />
    </Text>
  )
}

const ReservasiHelpers = {
  renderStatusLunas,
}

export default ReservasiHelpers
