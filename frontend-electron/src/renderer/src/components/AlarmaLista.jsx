import React, { useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as dataTest from '../services/dataTest.json'
import { Alarma } from '../services/classes/alarma'
import { faTriangleExclamation, faCircle, faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/svg/tiny-Codelco_logo.svg"

const DialogAlerta = ({ setDialogUseState }) => {
  return (
    <div className="dialogPopup">
      <img srcSet={logo} className="material-symbols-outlined"></img>
      <div className="content">
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <button type="button" onClick={() => setDialogUseState(false)}>
          OK
        </button>
      </div>
    </div>
  )
}

const AlarmaGoogleMap = ({ setGoogleMapUseState }) => {
  return (
    <div className="mapModal">
      <img srcSet={logo} className="material-symbols-outlined"></img>
      <button type="button" onClick={() => setGoogleMapUseState(false)}>
        OK
      </button>
    </div>
  )
}

const ModalLista = ({ setModalUseState }) => {
  return (
    <div className="modalPopup">
      <img srcSet={logo} className="material-symbols-outlined"></img>
      <div className="content">
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <label>Aqui va el texto :D</label>
        <p>Inserte más texto</p>
        <button type="button" onClick={() => setModalUseState(false)}>
          OK
        </button>
      </div>
    </div>
  )
}

export const AlarmaLista = () => {
  const LIMIT = 20
  const [isLoading, setLoading] = React.useState(true)
  const [index, setIndex] = React.useState(0)
  const [dataAlarma, setDataAlarma] = React.useState([])
  const [modalActivate, setActivateModal] = React.useState(false)
  const [dialogActivate, setDialogActivate] = React.useState(false)
  const [googleMapActivate, setGoogleMapActivate] = React.useState(false)
  const alarmas = []
  const changeIndex = (idx) => {
    setDataAlarma(alarmas.slice(0 + 20 * (idx - 1)), 20 * idx)
    return
  }
  const jsonToData = async () => {
    for (let x of dataTest.data) {
      alarmas.push(new Alarma(x.alertID, x.alertType, x.message, x.timestamp, x.dispatcherID))
    }
    setIndex(parseInt(alarmas.length / LIMIT) + 1)
    if (alarmas.length < LIMIT) {
      setDataAlarma(alarmas)
    } else {
      setDataAlarma(alarmas.slice(0, 19))
    }
  }
  useEffect(() => {
    jsonToData()
    setLoading(false)
  }, [])
  if (isLoading) console.log('loading!')
  return (
    <>
      <div className="bgList grayScale"></div>
      {modalActivate && <ModalLista setModalUseState={setActivateModal} />}
      {dialogActivate && <DialogAlerta setDialogUseState={setDialogActivate} />}
      {googleMapActivate && <AlarmaGoogleMap setGoogleMapUseState={setGoogleMapActivate} />}
      <div className={modalActivate ? 'containerList blur' : 'containerList'}>
        <div className="block">
          <div className="kpi">
            <div className="card">
              <p>Total de Alarmas</p>
              <strong>{dataAlarma.length}</strong>
            </div>
            <div className="card">
              <p>Total de Alarmas</p>
              <strong>{dataAlarma.length}</strong>
            </div>
            <div className="card">
              <p>Total de Alarmas</p>
              <strong>{dataAlarma.length}</strong>
            </div>
          </div>
          <table className="tableAlarma">
            <thead className="headers">
              <tr className="rowHeader">
                <th className="header">ID Alarma</th>
                <th className="header">Alerta</th>
                <th className="header">Periodo</th>
                <th className="header">Mensaje</th>
                <th className="header">Acción</th>
              </tr>
            </thead>
            <tbody className="rows">
              {(() => {
                const arr = []
                for (let data of dataAlarma) {
                  arr.push(
                    <tr className="rowAlarma">
                      <td>{data.alertId}</td>
                      <td>
                        <FontAwesomeIcon
                          icon={
                            data.alertType === 'Test Alert 1' ? faTriangleExclamation : faCircle
                          }
                          color={data.alertType === 'Test Alert 1' ? 'red' : 'green'}
                        />
                      </td>
                      <td>{data.timestamp}</td>
                      <td>{data.dispatcherID}</td>
                      <td>
                        <button className="buttonAction">
                          <FontAwesomeIcon
                            className="iconAction"
                            icon={faCircleInfo}
                            onClick={() => {
                              setActivateModal(true)
                            }}
                          />
                        </button>
                      </td>
                    </tr>
                  )
                }
                return arr
              })()}
            </tbody>
            <tfoot className="foot">
              <tr>
                <td colSpan="5">
                  {(() => {
                    const array = []
                    for (let idx = 1; idx <= index; idx++) {
                      array.push(
                        <button className="indexes" key={'idx_' + idx}>
                          {idx}
                        </button>
                      )
                    }
                    return array
                  })()}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </>
  )
}
